import { XIcon } from "@heroicons/react/outline";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sagaAddCommentAC } from "../../Redux/actions/actionCreator";
import fetchCreator from "../../Redux/fetchCreator";

function CommentForm({ answer, statusTextArea }) {
  const commentText = useRef();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const addComment = (event) => {
    event.preventDefault();
    statusTextArea.setTextArea(false);
    dispatch(
      sagaAddCommentAC(
        fetchCreator(process.env.REACT_APP_ADD_COMMENT, "POST", {
          authorId: user._id,
          answerId: answer._id,
          content: commentText.current.value,
        })
      )
    );
  };

  return (
    <form
      className="flex dark:bg-gray-600 flex-col py-3  px-5 space-y-3 relative w-full rounded max-w-3xl shadow my-5"
      onSubmit={addComment}
    >
      <div className="font-bold">
        <XIcon
          onClick={() => statusTextArea.setTextArea(false)}
          className="w-8 h-8 text-gray-300 hover:text-black cursor-pointer transition absolute right-2 top-2"
        />
        Добавить комментарий
      </div>
      <textarea
        className="rounded-md sm:mr-32 h-24 dark:bg-gray-400  dark:border-gray-400 dark:text-white dark:placeholder-white placeholder-gray-300 border-gray-200 resize-none text-sm"
        ref={commentText}
        placeholder="Ваш комментарий..."
      ></textarea>

      <button
        className="rounded hover:bg-indigo-700 transition bg-indigo-400 hower:bg-indigo-600 text-white py-2 w-max px-3"
        type="submit"
      >
        Отправить
      </button>
    </form>
  );
}

export default CommentForm;
