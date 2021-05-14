import React from "react";
import Answer from "./Answer";

export default function AnswerList({ answers }) {
  return (
    <ul className="space-y-3">
      {answers.map((item) => (
        <Answer item={item} />
      ))}
    </ul>
  );
}
