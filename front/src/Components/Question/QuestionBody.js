import React from "react";

export default function QuestionBody({ questions }) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
      <div className="px-4 py-5 sm:px-6">
        <p className="font-bold my-4 text-3xl">{questions.title}</p>
        <p>{questions.body}</p>
      </div>
      <div className="px-4 flex items-center space-x-3 py-5 text-gray-600 text-sm sm:p-6">
        <img
          className="inline-block h-8 w-8 rounded-md"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <div>{questions.author ?? "Антон"}</div>
      </div>
    </div>
  );
}
