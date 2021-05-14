import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { useSelector } from "react-redux";
import QuestionBody from "../Components/Question/QuestionBody";
import CreateAnswer from "../Components/Question/CreateAnswer";
import AnswerList from "../Components/Question/AnswerList";
import { UserIcon } from "@heroicons/react/outline";

export default function QuestionSingle() {
  const { id } = useParams();

  const state = useSelector((state) => state.user);
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
      <QuestionBody questions={questionObj.question} />
      {state ? (
        <CreateAnswer count={editCount} edit={setEditCount} id={id} />
      ) : (
        <div className="flex items-center bg-red-100 text-gray-700 rounded-md p-5 text-xl my-5">
          <UserIcon className="h-8 w-8 text-gray-500 opacity-50 mr-3" /> Войди
          чтобы ответить!
        </div>
      )}
      <AnswerList answers={questionObj.answers} />
    </div>
  ) : null;
}
