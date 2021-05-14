import React from "react";

export default function Workflow({ todo }) {
  return (
    <div className="flex px-4 py-2 shadow rounded-md flex-col">
      <div className="text-gray-400 mb-3 text-xl font-medium">
        План действий:
      </div>
      {todo.map((el) => {
        return (
          <>
            <div className="font-bold border-b mt-5 pr-5 pl-1 border-gray-100 text-2xl">
              {el.title}
            </div>
            {el.todos.map((todo, i) => (
              <div className="ml-3 border-b pt-2 border-gray-100">
                {String(i + 1) + ": " + todo.value}
              </div>
            ))}
          </>
        );
      })}
      <div className="actions"></div>
    </div>
  );
}
