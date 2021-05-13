import React from "react";

export default function QuestionBody({ questions }) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
      <div className="px-4 py-5 sm:px-6">
        <p className="font-bold text-3xl">{questions.title}</p>
        <p>{questions.body}</p>
      </div>
      <div className="px-4 py-5 text-gray-600 text-sm sm:p-6">
        {questions.author ?? "Антон"}
      </div>
    </div>
  );
}
