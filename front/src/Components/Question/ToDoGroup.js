import React from "react";

export default function ToDoGroup({ Header, setTodo, todo, todoList }) {
  function expandTodoGroup(e) {
    if (e.key === "Enter") {
      setTodo(
        todo.map((el) => {
          console.log(el);
          return el.title === Header
            ? { ...el, todos: [...el.todos, "1"] }
            : el;
        })
      );
    }
  }
  return (
    <div className="w-full space-y-3">
      <input
        value={Header}
        onKeyPress={expandTodoGroup}
        className="px-3 border-4 border-gray-300  w-full rounded-lg py-2"
      />
      {todoList.map((el) => (
        <input
          placeholder="1."
          autoFocus
          value=""
          onKeyPress={expandTodoGroup}
          className="border px-3 border-gray-300 w-full rounded-lg py-2"
        />
      ))}
    </div>
  );
}
