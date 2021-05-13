import React from "react";

export default function AnswerList({ answers }) {
  return (
    <ul className="space-y-3">
      {answers.map((item) => (
        <li
          key={item._id}
          className="bg-white shadow overflow-hidden rounded-md px-6 py-4"
        >
          <h1 className="font-bold text-2xl">{item.comment}</h1>
          {item.workflows}
        </li>
      ))}
    </ul>
  );
}
