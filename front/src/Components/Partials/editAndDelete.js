import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
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
          <div
            onClick={() => deleteQuestion()}
            className="p-1 cursor-pointer transition mr-1 hover:bg-opacity-50 dark:hover:bg-opacity-30 hover:bg-red-100 hover:text-red-300 text-gray-300  flex overflow-hidden rounded"
          >
            <TrashIcon className=" w-5 h-5      fa-trash-alt " />
          </div>
        </div>
      ) : null}
      {user && user._id === question.author._id && !hideEdit ? (
        <div
          onClick={() => setEditStatus(!editStatus)}
          className="p-1 cursor-pointer text-sm rounded transition hover:bg-indigo-300 hover:bg-transparency-50 hover:text-indigo-900 w-max text-gray-300 "
        >
          <PencilAltIcon className="w-5 h-5" />
        </div>
      ) : null}
    </div>
  );
}
