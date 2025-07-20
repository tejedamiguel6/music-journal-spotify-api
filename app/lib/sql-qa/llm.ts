// local llm
// import { ChatOllama } from "@langchain/ollama";

// import { pull } from "langchain/hub";

// import { ChatPromptTemplate } from "@langchain/core/prompts";

// // const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

// const queryPropmtTemplate = await pull<ChatPromptTemplate>(
//   "langchain-ai/sql-query-system-prompt"
// );

// queryPropmtTemplate.promptMessages.forEach((message) => {
//   console.log("you @@GotSomethig!", message.lc_kwargs.prompt.template);
// });

// export const llm = new ChatOllama({
//   baseUrl: "http://127.0.0.1:11434",
//   model: "llama3.2:1b",
//   temperature: 0,
// });

import { ChatAnthropic } from "@langchain/anthropic";

import { pull } from "langchain/hub";

import { ChatPromptTemplate } from "@langchain/core/prompts";

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

const queryPropmtTemplate = await pull<ChatPromptTemplate>(
  "langchain-ai/sql-query-system-prompt"
);

queryPropmtTemplate.promptMessages.forEach((message) => {
  console.log("you @@GotSomethig!", message.lc_kwargs.prompt.template);
});

export const llm = new ChatAnthropic({
  model: "claude-3-5-sonnet-latest",
  temperature: 0,
  apiKey: ANTHROPIC_API_KEY,
});
