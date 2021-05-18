import { useDispatch } from "react-redux";
import { sagaDeleteComment } from "../../Redux/actions/actionCreator";
import fetchCreator from "../../Redux/fetchCreator";
import Time from "../../Utils/Time";
import AuthorCard from "../Partials/AuthorCard";

function CommentContent({ content }) {
  const dispatch = useDispatch();

  console.log(content);

  const deleteComment = () => {
    dispatch(
      sagaDeleteComment(
        fetchCreator(process.env.REACT_APP_ADD_COMMENT, "DELETE", {
          content,
        })
      )
    );
  };

  return (
    <div className="mt-2">
      <AuthorCard author={content.author}></AuthorCard>
      <div className="py-1 flex flex-row justify-between ">
        {content.content}
        <i
          onClick={() => deleteComment()}
          className="fas transition hover:text-red-300 cursor-pointer pl-3 pt-1 fa-trash-alt text-gray-300 "
          aria-hidden="true"
        ></i>
      </div>
      <div className="text-xs text-gray-400">
        <Time time={content.date} />
      </div>
    </div>
  );
}

export default CommentContent;
