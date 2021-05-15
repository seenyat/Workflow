import { CheckCircleIcon, CheckIcon } from "@heroicons/react/outline";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Workflow({ todo }) {
  const user = useSelector((state) => state.user);
  useEffect(() => {}, []);
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
    <div className="flex px-4 max-w-2xl bg-white py-2 shadow rounded-md flex-col">
      <div className="flex">
        <div className="text-gray-300 select-none ml-1 font-mono text-sm">
          План действий
        </div>
      </div>
      {todo.stages.map((el) => {
        return (
          <>
            <div className=" flex w-max items-center font-bold border-b mt-3 pr-5 pl-1 border-gray-100 text-2xl">
              <div className="w-4 h-4 rounded-full border-4 mr-2 items-center text-gray-400"></div>
              {el.title}
            </div>
            {el.todos.map((todo, i) => (
              <div
                onClick={() => {
                  el.checked = !el.checked;
                }}
                className="flex transition hover:shadow pt-2 ml-3 items-center"
              >
                {el.checked ? (
                  <div className="w-8 h-8">
                    <CheckCircleIcon />
                  </div>
                ) : (
                  <div className="h-8 text-gray-100 w-8">
                    <CheckIcon />
                  </div>
                )}
                <div className=" ">{todo.value}</div>
              </div>
            ))}
          </>
        );
      })}
      <div className="actions"></div>
    </div>
  );
}
