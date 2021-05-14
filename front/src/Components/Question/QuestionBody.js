import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sagaLikeQuestionAC } from "../../Redux/actions/actionCreator";
import fetchCreator from "../../Redux/fetchCreator";

import AuthorCard from "../Partials/AuthorCard";
import Like from "../Partials/Like";

import useTimeAgo from "@dh-react-hooks/use-timeago";


export default function QuestionBody({ question }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const localDate = new Date(questions.date);

  const timeAgo = useTimeAgo(localDate, {
    interval: 60000,
  });

  const likeQuestion = () => {
    if (user) {
      dispatch(
        sagaLikeQuestionAC(
          fetchCreator("http://localhost:4000/question/like", "POST", {
            userID: user._id,
            questionID: question._id,
          })
        )
      );
    }
  };

  return (
    <div className="bg-white relative overflow-hidden shadow rounded-lg divide-y divide-gray-200">
      <div className=" pl-4 sm:px-6 py-2 font-mono font-bold text-gray-400">
        {question.theme}
      </div>
      <div className="px-4 py-5 sm:px-6">
        <p className="font-bold my-4 text-3xl">{question.title}</p>
        <p>{question.body}</p>
      </div>
      <div className="px-4 relative flex items-center space-x-3 py-5 text-gray-600 text-sm sm:p-6">
        <Like like={likeQuestion} likeCount={question.likes.length} />
        <AuthorCard author={question.author} />
      </div>
      <div className="px-4 relative text-sm sm:p-6 w-max text-gray-400 right-2 top-2">
        {timeAgo}
      </div>
    </div>
  );
}
