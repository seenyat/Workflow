import React from "react";

export default function CreateAnswer({ id, edit, count }) {
  function addAnswer(e) {
    e.preventDefault();
    fetch("http://localhost:4000/answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        workflows: e.target.todo.value,
        comment: e.target.title.value,
        id: id,
      }),
    });
    edit(count + 1);
  }
  return (
    <form
      onSubmit={addAnswer}
      className="flex flex-col space-y-3 m-5"
      action=""
    >
      <input type="text" required placeholder="title" name="title" />
      <input type="text" required placeholder="todo" name="todo" />
      <button
        type="submit"
        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </form>
  );
}
