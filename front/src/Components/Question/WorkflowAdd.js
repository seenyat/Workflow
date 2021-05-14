import { PlusIcon } from "@heroicons/react/outline";
import React from "react";
import ToDoGroup from "./ToDoGroup";

export default function WorkflowAdd({ todo, setTodo }) {
  function addToDoGroup(e) {
    setTodo([
      ...todo,
      {
        title: `Этап ${todo.length + 1}`,
        todos: [{ value: ``, checked: false }],
      },
    ]);
  }
  return (
    <div className="bg-gray-400 pt-5 mt-1 px-5 container flex flex-col items-center justify-center shadow overflow-hidden sm:rounded-lg">
      {todo.map((el, index) => (
        <ToDoGroup
          key={index}
          ind={index}
          todoList={el.todos}
          Header={el.title}
          todo={todo}
          setTodo={setTodo}
        />
      ))}

      <button
        type="button"
        onClick={addToDoGroup}
        className="mx-auto mb-2 shadow p-1 text-white hover:text-gray-200 flex border-2 border-white border-opacity-30 transition bg-green-4→→00 hover:bg-green-600 items-center justify-center w-24 h-10 rounded-full"
      >
        <PlusIcon className="w-10" />
      </button>
    </div>
  );
}
