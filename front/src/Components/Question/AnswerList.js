import { HeartIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import Answer from "./Answer";
import Workflow from "./Workflow";

export default function AnswerList({ answers }) {
  return (
    <ul className="space-y-3">
      {answers.map((item) => (
        <Answer item={item} />
      ))}
    </ul>
  );
}
