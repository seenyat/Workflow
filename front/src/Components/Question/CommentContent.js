import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sagaLikeCommentAC } from "../../Redux/actions/actionCreator";
import fetchCreator from "../../Redux/fetchCreator";
import Time from "../../Utils/Time";
import AuthorCard from "../Partials/AuthorCard";
import Like from "../Partials/Like";

function CommentContent({ content }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="mb-4 bg-gray-50 relative w-max max-w-full px-3 py-2 rounded">
      <div className="mr-16">
        {content.author && <AuthorCard author={content.author} />}
      </div>
      <div className="py-1">{content.content}</div>
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
  );
}

export default CommentContent;
