import React from "react";
import Answer from "./Answer";

export default function AnswerList({ answers, qId }) {
  return (
    <ul className="space-y-3">
      {answers.map((item, i) => (
        <Answer qId={qId} key={i + Math.random()} item={item} />
      ))}
    </ul>
  );
}
