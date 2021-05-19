
import { PlusIcon } from "@heroicons/react/solid";
import { nanoid } from "nanoid";
import CommentContent from "./CommentContent";
import CommentExpanded from "./CommentExpanded";
import CommentForm from "./CommentForm";

function Comments({ answer, setTextArea, textArea, user }) {
  return (
    <>
      {answer.comments.length > 0 && (
        <>
          <div className="py-5 pl-3 font-bold text-3xl w-max">Комментарии</div>
          <div className="pl-3">
            {answer?.comments.slice(0, 2).map((el) => (
              <CommentContent key={nanoid()} content={el} />
            ))}
          </div>
        </>
      )}
      {answer.comments.length > 2 ? (
        <CommentExpanded comments={answer.comments} />
      ) : (
        ""
      )}
      {!textArea && user && (
        <div
          onClick={() => {
            setTextArea(!textArea);
          }}
          className="my-2 pr-2 text-gray-400 hover:bg-indigo-100 cursor-pointer bg-gray-100 px-0 pl-1 py-1 rounded w-max flex items-center text-xs"
        >
          <PlusIcon className="h-5 w-5 mr-2 cursor-pointer  hover:text-indigo-300" />
          Добавить комментарий
        </div>
      )}
      {textArea ? (
        <CommentForm statusTextArea={{ setTextArea }} answer={answer} />
      ) : null}
    </>
  );
}

export default Comments;
