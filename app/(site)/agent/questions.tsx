"use client";

import { useState, useTransition } from "react";
import { askQuestion } from "./action";

export function QuestionForm() {
  const [pending, start] = useTransition();
  const [answer, setAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  return (
    <form
      action={(formData) =>
        start(async () => {
          setAnswer(null);
          setError(null);
          const res = await askQuestion(formData);
          if (res.error) setError(res.error);
          else setAnswer(res.answer || null);
        })
      }
      className="space-y-4"
    >
      <textarea
        name="question"
        className="w-full border rounded p-2 text-black"
        placeholder="e.g. How many tracks did I play last week?"
        disabled={pending}
      />
      <button
        type="submit"
        disabled={pending}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {pending ? "Thinking…" : "Ask"}
      </button>

      {answer && (
        <p className="mt-4 p-4 bg-green-50 border rounded text-green-800">
          {answer}
        </p>
      )}
      {error && (
        <p className="mt-4 p-4 bg-red-50 border rounded text-red-800">
          {error}
        </p>
      )}
    </form>
  );
}
