import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import QuestionBody from "../Components/Question/QuestionBody";
import CreateAnswer from "../Components/Question/CreateAnswer";
import AnswerList from "../Components/Question/AnswerList";
import Warning from "../Components/Partials/Warning";
import Error404 from "../Components/Partials/Error404";
import { sagaLoadAnswers } from "../Redux/actions/actionCreator";

export default function QuestionSingle() {
  const { id } = useParams();

  const user = useSelector((state) => state.user);
  const question = useSelector((state) => state.questions).filter(
    (el) => el._id === id
  )[0];
  const dispatch = useDispatch();

  useEffect(() => {
    if (question && question.answers.length === 0) {
      dispatch(sagaLoadAnswers(`http://localhost:4000/question/${id}`));
    }
  }, [id, dispatch, question]);

  return question ? (
    <div className="overflow-scroll container py-2 mx-auto px-4 sm:px-6 lg:px-8">
      <QuestionBody question={question} />
      {user ? <CreateAnswer id={id} /> : <Warning />}
      <AnswerList
        answers={question.answers.sort(
          (a, b) => b.likes.length - a.likes.length
        )}
      />
    </div>
  ) : (
    <div className="overflow-scroll container py-2 mx-auto px-4 sm:px-6 lg:px-8">
      <Error404 />
    </div>
  );
}
