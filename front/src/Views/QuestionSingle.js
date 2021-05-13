import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { useSelector } from "react-redux";
import QuestionBody from "../Components/Question/QuestionBody";

export default function QuestionSingle() {
  const { id } = useParams();

  const [editStatus, setEditStatus] = useState(false);

  const question = useSelector((state) =>
    state.questions.find((que) => que._id === id)
  );

  return question ? (
    <div>
      <QuestionBody info={question} />
      {!editStatus && (
        <button
          onClick={() => setEditStatus(true)}
          className="flex justify-center items-center p-3 h-24 w-24 border border-transparent rounded-full text-6xl shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          +
        </button>
      )}

      {editStatus && (
        <div>
          <p>TODOSHKA POLETELA SUDAAAAA</p>
          <button
            className="bg-indigo-600"
            onClick={() => setEditStatus(false)}
          >
            SAVE TODOSHKU
          </button>
        </div>
      )}
    </div>
  ) : null;
}
