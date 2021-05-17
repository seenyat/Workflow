import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sagaDeleteAnswer,
  sagaLikeAnswerAC,
} from "../../Redux/actions/actionCreator";
import fetchCreator from "../../Redux/fetchCreator";
import Output from "editorjs-react-renderer";
import Workflow from "./Workflow";
import Time from "../../Utils/Time";
import Like from "../Partials/Like";
import { AnnotationIcon } from "@heroicons/react/solid";
import Comment from "./Comment";

export default function Answer({ item, qId }) {
  const [author, setAuthor] = useState({});
  const [textArea, setTextArea] = useState(false);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  useEffect(() => {
    fetch(process.env.REACT_APP_PROFILE + item.author).then((data) => {
      data.json().then((user) => {
        setAuthor(user);
      });
    });
  }, [item.author]);

  const likeAnswer = () => {
    if (user) {
      dispatch(
        sagaLikeAnswerAC(
          fetchCreator(process.env.REACT_APP_ANSWER_LIKE, "POST", {
            userID: user._id,
            answerID: item._id,
          })
        )
      );
    }
  };

  const deleteAnswer = () => {
    dispatch(
      sagaDeleteAnswer(
        fetchCreator(process.env.REACT_APP_ANSWER, "DELETE", {
          userID: item.author,
          answerID: item._id,
          questionID: item.question,
        })
      )
    );
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
      <div className="prose lg:prose-xl">
        <Output data={item.comment} />;
      </div>
      <Workflow qId={qId} todo={item.workflows} id={item._id} />
      <div className="px-4 relative flex flex-row text-sm sm:p-6 w-max text-gray-400 right-2 top-2">
        <Time time={item.date} />
        {author.user && user._id === author.user._id ? (
          // <div className="px-4 text-sm sm:p-6 w-max text-gray-400 ">
          <>
            <i
              onClick={() => deleteAnswer()}
              className="fas transition hover:text-red-300 cursor-pointer pl-3 pt-1 fa-trash-alt text-gray-400 "
              aria-hidden="true"
            ></i>
            <AnnotationIcon
              onClick={() => {
                setTextArea(!textArea);
              }}
              className="h-5 w-5 ml-3 cursor-pointer hover:text-indigo-300"
            />
          </>
        ) : // </div>
        null}
      </div>
      {textArea ? (
        <Comment statusTextArea={{ setTextArea }} answer={item} />
      ) : null}
    </li>
  );
}
