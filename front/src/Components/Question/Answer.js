import { HeartIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sagaLikeAnswerAC } from "../../Redux/actions/actionCreator";
import fetchCreator from "../../Redux/fetchCreator";
import Workflow from "./Workflow";
import Time from "../../Utils/Time";
import Like from "../Partials/Like";

export default function Answer({ item }) {
  const [author, setAuthor] = useState({});

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  useEffect(() => {
    fetch(`http://localhost:4000/profile/${item.author}`).then((data) => {
      data.json().then((user) => {
        setAuthor(user);
      });
    });
  }, [item.author]);

  const likeAnswer = () => {
    if (user) {
      dispatch(
        sagaLikeAnswerAC(
          fetchCreator("http://localhost:4000/answer/like", "POST", {
            userID: user._id,
            answerID: item._id,
          })
        )
      );
    }
  };

  return (
    <li
      key={item._id}
      className="bg-white relative shadow overflow-hidden rounded-md px-6 py-4"
    >
      {author.user && (
        <div className="flex items-center mb-3 space-x-3">
          <img
            src={author.user.avatar_url}
            alt="avatar"
            className="w-8 h-8 shadow rounded-md text-gray-600"
          />
          <div className="text-gray-600">{author.user.name}</div>
        </div>
      )}

      <div className="absolute text-gray-300 right-2 top-2 flex space-x-1">
        <Like like={likeAnswer} likeCount={item.likes.length} />
      </div>
      <h1 className="font-bold text-2xl">{item.comment}</h1>
      <Workflow todo={item.workflows} id={item._id} />
      <div className="px-4 relative text-sm sm:p-6 w-max text-gray-400 right-2 top-2">
        <Time time={item.date} />
      </div>
    </li>
  );
}
