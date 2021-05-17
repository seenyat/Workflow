import { useRef } from "react";
import { useDispatch } from "react-redux";
import { sagaAddCommentAC } from "../../Redux/actions/actionCreator";
import fetchCreator from "../../Redux/fetchCreator";

function Comment({ answer, statusTextArea }) {
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
    <form onSubmit={addComment}>
      <textarea ref={commentText} placeholder="Ваш комментарий..."></textarea>
      <button type="submit">Отправить</button>
    </form>
  );
}

export default Comment;
