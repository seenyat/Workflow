import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { useSelector } from "react-redux";
import QuestionBody from "../Components/Question/QuestionBody";

export default function QuestionSingle() {
  const { id } = useParams();

  const [editStatus, setEditStatus] = useState(false);
  const [question, setQuestion] = useState({});

  useEffect(() => {
    fetch(`http://localhost:4000/question/${id}`).then((data) =>
      data.json().then((question) => {
        console.log(question);
        setQuestion(question);
      })
    );
  }, [id]);

  async function addAnswer(e) {
    e.preventDefault();
    fetch("http://localhost:4000/answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        workflows: e.target.todo.value,
        comment: e.target.title.value,
        id: id,
      }),
    });
  }

  return question ? (
    <div className="container py-2 mx-auto px-4 sm:px-6 lg:px-8">
      <QuestionBody question={question} />
      {!editStatus && (
        <button
          onClick={() => setEditStatus(true)}
          className="flex justify-center items-center p-3 h-24 w-24 border border-transparent rounded-full text-6xl shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          +
        </button>
      )}

      <form
        onSubmit={addAnswer}
        className="flex flex-col space-y-3 m-5"
        action=""
      >
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="todo" name="todo" />
        <button>Submit </button>
      </form>
    </div>
  ) : null;
}
