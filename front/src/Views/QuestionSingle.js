import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { useSelector } from "react-redux";
import QuestionBody from "../Components/Question/QuestionBody";
import CreateAnswer from "../Components/Question/CreateAnswer";
import AnswerList from "../Components/Question/AnswerList";
import Warning from "../Components/Partials/Warning";

export default function QuestionSingle() {
  const { id } = useParams();

  const user = useSelector((state) => state.user);
  const [editCount, setEditCount] = useState(0);
  const [questionObj, setQuestion] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:4000/question/${id}`, {
      method: "GET",
      credentials: "include",
    }).then((data) =>
      data.json().then((question) => {
        setQuestion(question);
      })
    );
  }, [id, editCount]);

  return questionObj ? (
    <div className="overflow-scroll container py-2 mx-auto px-4 sm:px-6 lg:px-8">
      <QuestionBody question={questionObj.question} />
      {user ? (
        <CreateAnswer count={editCount} edit={setEditCount} id={id} />
      ) : (
        <Warning />
      )}
      <AnswerList answers={questionObj.answers} />
    </div>
  ) : null;
}
