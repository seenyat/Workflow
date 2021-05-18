import { AnnotationIcon } from "@heroicons/react/outline";
import { nanoid } from "nanoid";
import { useState } from "react";
import CommentContent from "./CommentContent";

function Comments({ answer, setTextArea, textArea }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <AnnotationIcon
        onClick={() => {
          setTextArea(!textArea);
        }}
        className="h-5 w-5 ml-3 cursor-pointer hover:text-indigo-300"
      />
      {expanded ? (
        <div className="pl-3">
          {answer?.comments.map((el) => (
            <CommentContent key={nanoid()} content={el} />
          ))}
        </div>
      ) : (
        <div className="pl-3">
          {answer?.comments.slice(0, 2).map((el) => (
            <CommentContent key={nanoid()} content={el} />
          ))}
        </div>
      )}
      {answer.comments.length > 0 && (
        <div
          onClick={() => {
            setExpanded(!expanded);
          }}
          className="text-sm  bg-gray-50 rounded w-max px-3 py-2 mt-4 text-gray-400 hover:text-indigo-600 cursor-pointer"
        >
          {expanded ? "↑ Скрыть" : "↓ Показать"} все комментарии
        </div>
      )}
    </>
  );
}

export default Comments;
