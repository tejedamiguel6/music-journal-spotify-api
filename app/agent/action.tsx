"use server";

import { z } from "zod";
import { graph } from "../lib/sql-qa/graph";

const schema = z.object({ question: z.string().min(2) });

export async function askQuestion(formData: FormData) {
  const parse = schema.safeParse({
    question: formData.get("question"),
  });
  if (!parse.success) {
    return { error: "Invalid question" };
  }

  try {
    const { answer, error } = await graph.invoke({
      question: parse.data.question,
    });

    if (error) return { error };
    return { answer };

    // console.log("here is your answer", answer);
  } catch (error) {
    return { error: "LLM service overloaded, try again later." };
  }
}
