import { Transition } from "@headlessui/react";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sagaLoadAnswers } from "../../Redux/actions/actionCreator";
import CommentContent from "./CommentContent";

export default function CommentExpanded({ comments }) {
  const [expanded, setExpanded] = useState(false);
  const [commentsList, setComments] = useState(comments);
  const dispatch = useDispatch();

  return (
    <>
      <Transition
        show={expanded}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className={`${expanded ? "" : "hidden"} pl-3`}>
          {commentsList.slice(2).map((el) => (
            <CommentContent key={nanoid()} content={el} />
          ))}
        </div>
      </Transition>

      <div
        onClick={() => {
          setExpanded(!expanded);
        }}
        className="text-sm   rounded w-max px-3 py-2 mt-4 text-gray-400 hover:text-indigo-600 cursor-pointer"
      >
        {expanded ? "↑ Скрыть" : "↓ Раскрыть"} комментарии
        {!expanded && " (" + (commentsList.length - 2) + ")"}
      </div>
    </>
  );
}
