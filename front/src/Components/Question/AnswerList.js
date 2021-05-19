import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Answer from "./Answer";

export default function AnswerList({ qId }) {
  const answers = useSelector((state) => state.answers);
  const [answerList, setAnswerList] = useState([]);
  useEffect(() => {
    setAnswerList(
      answers.filter((answ) => {
        return answ.question._id === qId;
      })
    );
  }, [answers]);
  return (
    <ul className="space-y-3">
      {answerList.length > 0 &&
        answerList.map((item, i) => (
          <Answer qId={qId} key={i + Math.random()} item={item._id} />
        ))}
    </ul>
  );
}
