import { PlusIcon } from "@heroicons/react/outline";
import React from "react";
import ToDoGroup from "../Question/ToDoGroup";

export default function WorkflowAdd({ todo, setTodo }) {
  function addToDoGroup(e) {
    setTodo({
      ...todo,
      stages: [
        ...todo.stages,
        {
          title: `Этап ${todo.stages.length + 1}`,
          todos: [{ value: ``, checked: false }],
        },
      ],
    });
  }
  return (
    <div className="bg-gray-50 text-left pt-5 mt-1 px-5 container flex flex-col items-center justify-center shadow overflow-hidden sm:rounded-lg">
      <label
        htmlFor="about"
        className="block text-xl text-left self-start font-medium text-gray-700"
      >
        Workflow
      </label>
      {todo.stages.map((el, index) => (
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
        className="mx-auto mb-2 shadow p-1 text-white hover:text-gray-200 flex border-2 border-white border-opacity-30 transition bg-green-400 hover:bg-green-600 items-center justify-center w-24 h-10 rounded-full"
      >
        <PlusIcon className="w-10" />
      </button>
    </div>
  );
}
