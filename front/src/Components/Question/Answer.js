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
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import AuthorCard from "../Partials/AuthorCard";

export default React.memo(function Answer({ item, qId }) {
  const [textArea, setTextArea] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  item = useSelector(
    (state) => state.answers.filter((answ) => answ._id === item)[0]
  );

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

  return item ? (
    <li
      key={item._id}
      className="bg-white relative shadow overflow-hidden rounded-md px-6 py-4"
    >
      {
        <div className="flex items-center mb-3 space-x-3">
          <AuthorCard author={item.author} />
          <div className="relative    w-max text-gray-400 ">
            <Time time={item.date} />
          </div>
        </div>
      }
      <div className="absolute text-gray-300 items-center right-2 top-2 flex space-x-1">
        {user && user._id === item.author._id ? (
          <>
            <i
              onClick={() => deleteAnswer()}
              className="fas p-1.5 rounded-md transition hover:bg-red-50 hover:text-red-300 cursor-pointer   fa-trash-alt text-gray-300 "
              aria-hidden="true"
            ></i>
          </>
        ) : null}
        <Like likeURL={process.env.REACT_APP_ANSWER_LIKE} content={item} />
      </div>
      <div className="prose lg:prose-xl">
        <Output data={item.comment} />
      </div>
      <Workflow qId={qId} todo={item.workflows} id={item._id} />
      <hr />
      <Comments
        user={user}
        answer={item}
        textArea={textArea}
        setTextArea={setTextArea}
      />
    </li>
  ) : (
    ""
  );
});
