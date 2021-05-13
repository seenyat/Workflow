import { PlusCircleIcon } from "@heroicons/react/outline";
import React from "react";
import ToDoGroup from "./ToDoGroup";

export default function WorkflowAdd({ todo, setTodo }) {
  return (
    <div className="bg-gray-100 pt-5 px-3 container flex flex-col items-center justify-center shadow overflow-hidden sm:rounded-lg">
      {todo.map((el) => (
        <ToDoGroup
          todoList={el.todos}
          Header={el.title}
          todo={todo}
          setTodo={setTodo}
        />
      ))}

      <button
        type="button"
        className="mx-auto my-2 p-1 text-white flex border-2 border-gray-300 bg-indigo-600 items-center justify-center w-10 h-10 rounded-full"
      >
        <PlusCircleIcon />
      </button>
    </div>
  );
}
