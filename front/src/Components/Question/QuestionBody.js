import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sagaLikeQuestionAC } from "../../Redux/actions/actionCreator";
import fetchCreator from "../../Redux/fetchCreator";

import AuthorCard from "../Partials/AuthorCard";
import Like from "../Partials/Like";
import Time from "../../Utils/Time";
import { themeIcons } from "../../Utils/themeIcons";

export default function QuestionBody({ question }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

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
    <div className="bg-white w-full relative overflow-hidden shadow rounded-lg divide-y divide-gray-200">
      <div className=" pl-4 sm:px-6 py-2 font-mono font-bold text-gray-400">
        <i className={`fab mr-2 ${themeIcons[question.theme]}`} />
        {question.theme}
      </div>
      <div className="px-4 py-5 sm:px-6">
        <p className="font-bold my-4 text-3xl">{question.title}</p>
        <p>{question.body}</p>
      </div>
      <div className="px-4 relative flex items-center space-x-3  text-gray-600 text-sm sm:px-6">
        <Like like={likeQuestion} likeCount={question.likes.length} />
        <AuthorCard author={question.author} />
        <div className="px-4 text-sm sm:p-6 w-max text-gray-400 ">
          <Time time={question.date} />
        </div>
      </div>
    </div>
  );
}
