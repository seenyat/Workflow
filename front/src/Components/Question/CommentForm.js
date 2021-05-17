import { useRef } from "react";
import { useDispatch } from "react-redux";
import { sagaAddCommentAC } from "../../Redux/actions/actionCreator";
import fetchCreator from "../../Redux/fetchCreator";

function CommentForm({ answer, statusTextArea }) {
  const commentText = useRef();
  const dispatch = useDispatch();

  const addComment = (event) => {
    event.preventDefault();
    statusTextArea.setTextArea(false);
    dispatch(
      sagaAddCommentAC(
        fetchCreator(process.env.REACT_APP_ADD_COMMENT, "POST", {
          authorId: answer.author,
          answerId: answer._id,
          content: commentText.current.value,
        })
      )
    );
  };

  return (
    <form className="flex flex-col py-3 px-5 space-y-3 w-full rounded max-w-3xl shadow my-5" onSubmit={addComment}>
      <textarea className="rounded text-sm" ref={commentText} placeholder="Ваш комментарий..."></textarea>
      <button className="rounded bg-indigo-400 hower:bg-indigo-600 text-white py-2 w-max px-3" type="submit">Отправить</button>
    </form>
  );
}

export default CommentForm;
