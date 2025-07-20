"use client";

import { useState } from "react";

export default function SqlQaPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const exampleQuestions = [
    "What tables do you see?",
    "What are the top 5 most played tracks?",
    "When was the last track played?",
    "Who was the last artist listened?",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    setError("");
    setAnswer("");

    try {
      const response = await fetch("/api/agent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setAnswer(data.answer);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleExampleClick = (exampleQuestion: string) => {
    setQuestion(exampleQuestion);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            SQL Question Answering System
          </h1>
          <p className="text-gray-600 mb-8">
            Ask questions about the Miguel's music database in natural language.
          </p>

          {/* Main Form */}
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="question"
                  className="block text-sm font-medium text-gray-800 mb-2"
                >
                  Your Question
                </label>
                <textarea
                  id="question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="e.g., How many employees are there?"
                  className="w-full text-gray-900 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                />
              </div>

              <button
                type="submit"
                disabled={loading || !question.trim()}
                className="bg-blue-600 text-gray-900 px-6 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"
              >
                {loading ? "Thinking..." : "Ask Question"}
              </button>
            </div>
          </form>

          {/* Example Questions */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Example Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-900">
              {exampleQuestions.map((example, index) => (
                <button
                  key={index}
                  onClick={() => handleExampleClick(example)}
                  className="text-left p-3 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors text-sm"
                >
                  &quot;{example}&quot;
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          {loading && (
            <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-4">
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600 mr-3"></div>
                <span className="text-blue-800">
                  Processing your question...
                </span>
              </div>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
              <div className="flex items-center">
                <div className="text-red-400 mr-3">⚠️</div>
                <div>
                  <h3 className="text-red-800 font-medium">Error</h3>
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              </div>
            </div>
          )}

          {answer && (
            <div className="bg-green-50 border border-green-200 rounded-md p-4">
              <div className="flex items-start">
                <div className="text-green-400 mr-3 mt-1">✓</div>
                <div>
                  <h3 className="text-green-800 font-medium mb-2">Answer</h3>
                  <p className="text-green-700">{answer}</p>
                </div>
              </div>
            </div>
          )}

          {/* Database Info */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              About the Database
            </h2>
            <p className="text-gray-900 text-sm mb-4">
              The Music Journal database represents a digital media store with
              the following tables:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-950">
              {["Album", "Artist", "Genre", "Track"].map((table) => (
                <div
                  key={table}
                  className="bg-gray-500 px-2 py-1 rounded text-center"
                >
                  {table}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
