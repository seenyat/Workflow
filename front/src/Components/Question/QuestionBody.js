import { HeartIcon } from "@heroicons/react/outline";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sagaLikeQuestionAC } from "../../Redux/actions/actionCreator";
import fetchCreator from "../../Redux/fetchCreator";
import useTimeAgo from "@dh-react-hooks/use-timeago";

export default function QuestionBody({ questions }) {
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
            questionID: questions._id,
          })
        )
      );
    }
  };

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
      <div className="px-4 py-5 sm:px-6">
        <p className="font-bold my-4 text-3xl">{questions.title}</p>
        <p>{questions.body}</p>
      </div>
      <div className="px-4 relative flex items-center space-x-3 py-5 text-gray-600 text-sm sm:p-6">
        <img
          className="inline-block h-8 w-8 rounded-md"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <div>{questions.author ?? "Антон"}</div>
        <HeartIcon
          onClick={likeQuestion}
          className="hover:text-red-500 cursor-pointer absolute w-6 text-gray-300 h-6 right-2 top-2"
        />
        <div>{questions.likes.length > 0 && questions.likes.length}</div>
      </div>
      <div className="px-4 relative text-sm sm:p-6 w-max text-gray-400 right-2 top-2">
        {timeAgo}
      </div>
    </div>
  );
}
