import { nanoid } from "nanoid";
import { useState } from "react";
import CommentContent from "./CommentContent";

function Comments({ answer }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
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
      <div
        onClick={() => {
          setExpanded(!expanded);
        }}
        className="text-sm mt-4 text-gray-600 hover:text-indigo-600 cursor-pointer"
      >
        {expanded ? "↑ Скрыть" : "↓ Показать"} все комментарии
      </div>
    </>
  );
}

export default Comments;
