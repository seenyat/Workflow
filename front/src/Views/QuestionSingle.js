import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import QuestionBody from "../Components/Question/QuestionBody";
import CreateAnswer from "../Components/Question/CreateAnswer";
import AnswerList from "../Components/Question/AnswerList";
import Warning from "../Components/Partials/Warning";
import Error404 from "../Components/Partials/Error404";
import {
  changeRedirectStatus,
  sagaLoadAnswers,
} from "../Redux/actions/actionCreator";

export default function QuestionSingle() {
  const { id } = useParams();

  const user = useSelector((state) => state.user);
  const question = useSelector((state) => state.questions).filter(
    (el) => el._id === id
  )[0];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeRedirectStatus(false));

    dispatch(sagaLoadAnswers(process.env.REACT_APP_QUESTION + id));
  }, [id, dispatch]);

  return question ? (
    <div className="overflow-scroll container py-2 mx-auto px-4 sm:px-6 lg:px-8">
      <QuestionBody question={question} />
      {user ? <CreateAnswer id={id} /> : <Warning />}
      <AnswerList
        qId={id}
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
