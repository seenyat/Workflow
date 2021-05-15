import React from "react";
import Answer from "./Answer";

export default function AnswerList({ answers }) {
  return (
    <ul className="space-y-3">
      {answers.map((item, i) => (
        <Answer key={i + Math.random()} item={item} />
      ))}
    </ul>
  );
}
