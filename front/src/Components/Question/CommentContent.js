import { sagaDeleteComment } from "../../Redux/actions/actionCreator";
import { useState } from "react";
import { useDispatch } from "react-redux";
import fetchCreator from "../../Redux/fetchCreator";
import Time from "../../Utils/Time";
import Modalforaccept from "../../Utils/Modalforaccept";
import AuthorCard from "../Partials/AuthorCard";
import Like from "../Partials/Like";

function CommentContent({ content }) {
  const dispatch = useDispatch();

  const [modalforaccept, setModalforaccept] = useState(false);

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
    <>
      {modalforaccept && (
        <Modalforaccept
          clear={deleteComment}
          setModalforaccept={setModalforaccept}
        />
      )}
      <div className="mb-4 bg-gray-50 relative w-max max-w-full px-3 py-2 rounded">
        <div className="mr-16">
          {content.author && <AuthorCard author={content.author} />}
        </div>
        <div className="py-1">
          {content.content}
          <i
            onClick={() => setModalforaccept(true)}
            className="fas transition hover:text-red-300 cursor-pointer pl-3 pt-1 fa-trash-alt text-gray-300 "
            aria-hidden="true"
          ></i>
        </div>
        <div className="text-xs text-gray-400">
          <Time time={content.date} />
          <div className="absolute text-xs top-1 right-1">
            <Like
              likeURL={process.env.REACT_APP_LIKE_COMMENT}
              content={content}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default CommentContent;
