import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sagaLoadAnswers } from "../../Redux/actions/actionCreator";
import WorkflowAdd from "./WorkflowAdd";
import { nanoid } from "nanoid";

export default function CreateAnswer({ id, edit, count }) {
  const comment = useRef("");
  const state = useSelector((state) => state.user);
  const [todo, setTodo] = useState({
    comment: comment.value,
    stages: [{ title: "Этап 1", todos: [{ value: "", checked: false }] }],
    id: nanoid(),
  });
  const dispatch = useDispatch();
  function addAnswer(e) {
    e.preventDefault();
    fetch(process.env.REACT_APP_ANSWER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        workflows: todo,
        comment: e.target.title.value,
        id: id,
        authorId: state._id,
      }),
    }).then((e) => {
      dispatch(sagaLoadAnswers(process.env.REACT_APP_QUESTION + id));
    });
  }
  return (
    <div className="my-3">
      <form
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
        onSubmit={addAnswer}
        action="#"
        method="POST"
      >
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="bg-white py-1 px-4 space-y-6 sm:p-6">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Добавить ответ
              </h3>
              <p className="mt-1 text-md text-gray-500">
                Распишите подробный план действий
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3">
                <label
                  htmlFor="about"
                  className="block text-md font-medium text-gray-700"
                >
                  Описание
                </label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="title"
                    ref={comment}
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-md border-gray-300 rounded-md"
                    placeholder="Краткий комментарий по теме"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3">
                <label
                  htmlFor="about"
                  className="block text-md font-medium text-gray-700"
                >
                  Workflow
                </label>
                <div className="mt-1 rounded-md shadow-sm flex">
                  <WorkflowAdd todo={todo} setTodo={setTodo} />
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-md font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Отправить
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
