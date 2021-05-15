import React from "react";
import { useSelector } from "react-redux";

export default function Workflow({ todo, id }) {
  const user = useSelector((state) => state.user);
  function addWorkflow() {
    fetch("http://localhost:4000/profile/addworkflow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo, userID: user._id }),
    });
  }
  return (
    <div className="flex px-4 py-2 shadow rounded-md flex-col">
      <div className="flex">
        <div className="text-gray-300 select-none ml-1 font-mono text-sm">
          План действий
        </div>
        {user && (
          <div
            onClick={addWorkflow}
            className="text-indigo-400 cursor-pointer font-bold hover:text-indigo-600 select-none ml-1 font-mono text-sm"
          >
            добавить себе
          </div>
        )}
      </div>
      {todo[0].stages.map((el, i) => {
        return (
          <>
            <div className=" flex w-max items-center font-bold border-b mt-3 pr-5 pl-1 border-gray-100 text-2xl">
              <div className="w-4 h-4 rounded-full border-4 mr-2 items-center text-gray-400"></div>
              {el.title}
            </div>
            {el.todos.map((todo, i) => (
              <div
                key={i + Math.random()}
                className="flex  pt-2 ml-3 items-center"
              >
                <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                <div className="ml-3 ">{todo.value}</div>
              </div>
            ))}
          </>
        );
      })}
      <div className="actions"></div>
    </div>
  );
}
