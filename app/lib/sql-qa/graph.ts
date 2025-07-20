import { Annotation, StateGraph } from "@langchain/langgraph";
import { pull } from "langchain/hub";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { z } from "zod";
import { db } from "./db";
import { llm } from "./llm";
import { SystemMessage } from "@langchain/core/messages";

// 1 define application state
export const State = Annotation.Root({
  question: Annotation<string>,
  query: Annotation<string>,
  result: Annotation<string>,
  answer: Annotation<string>,
  summary: Annotation<string>,
  error: Annotation<string | null>,
  artist_name: Annotation<string>,
});

// 2 Node: convert question into SQL query

const queryPromptTemplate = await pull<ChatPromptTemplate>(
  "langchain-ai/sql-query-system-prompt"
);

const queryOutput = z.object({
  query: z.string().describe("Syntactically valid SQL query."),
});

const summarySchema = z.object({
  /* must exist */
  artist: z.string(),

  tracks: z.array(
    z.object({
      track: z.string(),
      album: z.string(),
      album_cover_url: z.string().url(),
      played_at: z.string(), // ISO date
      play_count: z.number().optional(), // keep optional if you want
    })
  ),

  total_plays: z.number(),
  date_range: z
    .object({
      from: z.string(),
      to: z.string(),
    })
    .optional(),
});
const summaryLlm = llm.withStructuredOutput(summarySchema);

const structuredLlm = llm.withStructuredOutput(queryOutput);

// this is for chatbot
const writeQuery = async (state: typeof State.State) => {
  const database = await db;
  const SAFE_TABLES = ["recently_liked", "recently_played"];

  // Get table info
  const tableInfo = await database.getTableInfo(SAFE_TABLES);

  // Build the question with proper artist_name context and column requirements
  let questionText = state.question;
  let additionalContext = "";

  if (state.artist_name) {
    additionalContext = `
IMPORTANT: 
- Filter results for artist_name = '${state.artist_name}'
- Include ALL available columns in your SELECT statement, especially:
  - track_name or song_name (for track names)
  - album_name or album (for album names) 
  - album_cover_url or image_url or cover_url (for album artwork)
  - played_at or timestamp (for play dates)
  - Any play_count or count columns
- Use COUNT(*) or similar aggregation for play counts
- Order by play count or frequency DESC to get top tracks`;

    questionText = `${state.question} for artist named '${state.artist_name}'. Include track names, album names, album cover URLs, play dates, and play counts.`;
  }

  const promptValue = await queryPromptTemplate.invoke({
    dialect: database.appDataSourceOptions.type,
    top_k: 10,
    table_info: tableInfo + additionalContext,
    input: questionText,
  });

  console.log("PROMPT VALUE", promptValue);

  try {
    const result = await structuredLlm.invoke(promptValue);
    console.log("Generated SQL:", result.query);
    return { query: result.query };
  } catch (err) {
    console.error("SQL generation error:", err);
    return { error: "Sorry, I couldn't map that question to SQL." };
  }
};
// 3 Node: run sql

const executeQuery = async (state: typeof State.State) => {
  if (state.error) return state;
  if (!state.query) {
    return { error: "I couldn’t translate that question into SQL." };
  }

  const database = await db;
  const result = await database.run(state.query);
  return { result: JSON.stringify(result) };
};

// 4 Node: convert sql result into natural language

const generateAnswer = async (state: typeof State.State) => {
  const promptValue =
    "Given the following user question, corresponding SQL query, " +
    "and SQL result, answer the user question with the image url if it exists.\n\n" +
    `Question: ${state.question}\n` +
    `SQL Query: ${state.query}\n` +
    `SQL Result: ${state.result}\n`;
  const response = await llm.invoke(promptValue);
  return { answer: response.content };
};

// 4.1 Node: generate summary in HTML format
const generateSummaryInHtml = async (state: typeof State.State) => {
  if (state.error || !state.result) return state;

  const prompt =
    `Artist: ${state.artist_name}\n\n` +
    `Convert the SQL result data below into JSON that matches this exact schema:\n` +
    `{\n` +
    `  "artist": "string",\n` +
    `  "tracks": [\n` +
    `    {\n` +
    `      "track": "string",\n` +
    `      "album": "string",\n` +
    `      "album_cover_url": "string",\n` +
    `      "played_at": "string",\n` +
    `      "play_count": number\n` +
    `    }\n` +
    `  ],\n` +
    `  "total_plays": number,\n` +
    `  "date_range": {\n` +
    `    "from": "string",\n` +
    `    "to": "string"\n` +
    `  }\n` +
    `}\n\n` +
    `SQL Result Data:\n${state.result}\n\n` +
    `Return ONLY valid JSON that matches the schema above.`;

  try {
    const parsed = await summaryLlm.invoke(prompt);
    return { summary: JSON.stringify(parsed) };
  } catch (err) {
    console.error("Error generating summary:", err);
    return { error: "Failed to generate summary" };
  }
};

// 5 wire the graph together

export const graph = new StateGraph({ stateSchema: State })
  .addNode("writeQuery", writeQuery)
  .addNode("executeQuery", executeQuery)
  .addNode("generateAnswer", generateAnswer)
  .addNode("generateSummary", generateSummaryInHtml)
  .addEdge("__start__", "writeQuery")
  .addEdge("writeQuery", "executeQuery")
  .addEdge("executeQuery", "generateAnswer")
  .addEdge("generateAnswer", "generateSummary")
  .addEdge("generateSummary", "__end__")
  .compile();
