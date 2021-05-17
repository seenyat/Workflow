import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import QuestionBody from "../Components/Question/QuestionBody";
import CreateAnswer from "../Components/Question/CreateAnswer";
import AnswerList from "../Components/Question/AnswerList";
import Warning from "../Components/Partials/Warning";
import {
  changeRedirectStatus,
  sagaLoadAnswers,
} from "../Redux/actions/actionCreator";
import { PlusIcon } from "@heroicons/react/solid";
import { Transition } from "@headlessui/react";

export default function QuestionSingle() {
  const { id } = useParams();

  const user = useSelector((state) => state.user);
  const question = useSelector((state) => state.questions).filter(
    (el) => el._id === id
  )[0];
  const dispatch = useDispatch();
  const [createAnswer, setCreateAnswer] = useState(false);

  useEffect(() => {
    dispatch(changeRedirectStatus(false));

    // dispatch(sagaLoadAnswers(process.env.REACT_APP_QUESTION + id));
  }, [id, dispatch]);

  console.log(question);

  return question ? (
    <div className="overflow-scroll container py-2 mx-auto px-4 sm:px-6 lg:px-8">
      <QuestionBody question={question} />
      {user ? <CreateAnswer id={id} /> : <Warning />}

      {question.answers.length > 0 && (
        <AnswerList
          qId={id}
          answers={question.answers.sort(
            (a, b) => b.likes.length - a.likes.length
          )}
        />
      )}
      {user ? (
        <Transition
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          show={createAnswer}
        >
          <CreateAnswer setCreateAnswer={setCreateAnswer} id={id} />
        </Transition>
      ) : (
        <Warning />
      )}
      <div className="text-3xl flex items-center justify-between text-gray-700 font-bold my-5 px-2">
        <div>Ответы:</div>
        {!createAnswer && (
          <div
            onClick={() => setCreateAnswer(true)}
            className="font-normal flex items-center rounded-md bg-blue-400 text-white px-3 py-2 text-xl"
          >
            <PlusIcon className="w-8 h-8" />
            <div>Добавить ответ</div>
          </div>
        )}
      </div>
      <AnswerList
        qId={id}
        answers={question.answers.sort(
          (a, b) => b.likes.length - a.likes.length
        )}
      />
    </div>
  ) : (
    <div className="border-8 mt-24 mx-auto rounded-full w-24 h-24 border-gray-500 border-dashed animate-spin"></div>
  );
}
