import React, { useState } from "react";
import { useSelector } from "react-redux";
import WorkflowAdd from "./WorkflowAdd";

export default function CreateAnswer({ id, edit, count }) {
  const state = useSelector((state) => state.user);
  const [todo, setTodo] = useState([{ title: "Этап 1", todos: [""] }]);
  function addAnswer(e) {
    e.preventDefault();
    fetch("http://localhost:4000/answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        workflows: (e.target.todo && e.target.todo.value) || "123",
        comment: e.target.title.value,
        id: id,
        authorId: state._id,
      }),
    });
    edit(count + 1);
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
          <div className="bg-white py-3 px-4 space-y-6 sm:p-6">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Добавить ответ
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Распишите подробный план действий
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700"
                >
                  Описание
                </label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="title"
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
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
                  className="block text-sm font-medium text-gray-700"
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
              className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Отправить
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
