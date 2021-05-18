import React from "react";

export default function EditAndDelete({
  user,
  question,
  setEditStatus,
  hideEdit,
  deleteQuestion,
  editStatus,
}) {
  return (
    <div className="flex items-center ml-auto text-gray-400">
      {user && user._id === question.author._id && !hideEdit ? (
        <div className="px-2 text-sm  w-max text-gray-400 ">
          <i
            onClick={() => deleteQuestion()}
            className="fas transition cursor-pointer hover:text-red-300  fa-trash-alt  "
            aria-hidden="true"
          ></i>
        </div>
      ) : null}
      {user && user._id === question.author._id && !hideEdit ? (
        <div className="px-2 text-sm  w-max text-gray-400 ">
          <i
            onClick={() => setEditStatus(!editStatus)}
            className="fa transition cursor-pointer hover:text-indigo-700 fa-pencil  "
            aria-hidden="true"
          ></i>
        </div>
      ) : null}
    </div>
  );
}