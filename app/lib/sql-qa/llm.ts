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
  model: "claude-3-7-sonnet-20250219",
  temperature: 0,
  apiKey: ANTHROPIC_API_KEY,
});
