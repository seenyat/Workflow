import { sagaDeleteComment } from "../../Redux/actions/actionCreator";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sagaLikeCommentAC } from "../../Redux/actions/actionCreator";
import fetchCreator from "../../Redux/fetchCreator";
import Time from "../../Utils/Time";
import AuthorCard from "../Partials/AuthorCard";
import Like from "../Partials/Like";
import { TrashIcon } from "@heroicons/react/solid";

function CommentContent({ content }) {
  const dispatch = useDispatch();

  const deleteComment = () => {
    dispatch(
      sagaDeleteComment(
        fetchCreator(process.env.REACT_APP_ADD_COMMENT, "DELETE", {
          content,
        })
      )
    );
  };

  const user = useSelector((state) => state.user);

  return (
    <div className="mb-4 bg-gray-50 dark:bg-gray-600 relative w-max max-w-full px-3 py-2 rounded">
      <div className="mr-16">
        {content.author && <AuthorCard author={content.author} />}
      </div>
      <div className="py-1">{content.content}</div>
      <div className="text-xs text-gray-400">
        <Time time={content.date} />
        <div className="absolute items-center flex text-xs top-1 right-1">
          <div
            onClick={() => deleteComment()}
            className="p-1 cursor-pointer transition mr-1 hover:bg-opacity-50 dark:hover:bg-opacity-30 hover:bg-red-100 hover:text-red-300 text-gray-300  flex overflow-hidden rounded"
          >
            <TrashIcon className=" w-5 h-5      fa-trash-alt " />
          </div>
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
