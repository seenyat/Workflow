import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sagaDeleteQuestion,
  sagaEditQuestion,
  sagaLikeQuestionAC,
} from "../../Redux/actions/actionCreator";
import fetchCreator from "../../Redux/fetchCreator";

import AuthorCard from "../Partials/AuthorCard";
import Like from "../Partials/Like";
import Time from "../../Utils/Time";
import { themeIcons } from "../../Utils/themeIcons";
import { Link, Redirect } from "react-router-dom";
import EditAndDelete from "../Partials/editAndDelete";

export default function QuestionBody({ question, hideEdit, link }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [editStatus, setEditStatus] = useState(false);

  const [secondRedirect, setSecondRedirect] = useState(false);


  const likeQuestion = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (user) {
      dispatch(
        sagaLikeQuestionAC(
          fetchCreator(process.env.REACT_APP_QUESTION_LIKE, "POST", {
            userID: user._id,
            questionID: question._id,
          })
        )
      );
    }
  };

  const changeQuestion = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    dispatch(
      sagaEditQuestion(
        fetchCreator(process.env.REACT_APP_QUESTION + question._id, "PUT", {
          title,
          body,
        })
      )
    );
    setEditStatus(false);
  };

  const deleteQuestion = () => {
    dispatch(
      sagaDeleteQuestion(
        fetchCreator(
          process.env.REACT_APP_QUESTION + question._id,
          "DELETE",
          {}
        )
      )
    );
    setSecondRedirect(true);
  };

  return (
    <div className="bg-white text-xl w-full relative overflow-hidden shadow rounded-lg divide-y divide-gray-200">
      <div className=" pl-4 flex sm:px-6 py-2 font-mono lowercase text-gray-400">
        <i className={`fab mr-2 ${themeIcons[question.theme]}`} />
        {question.theme}
        <EditAndDelete
          question={question}
          user={user}
          hideEdit={hideEdit}
          deleteQuestion={deleteQuestion}
          editStatus={editStatus}
          setEditStatus={setEditStatus}
        />
      </div>

      {!editStatus && (
        <div className="px-4 text-base py-5 sm:px-6">
          {link ? (
            <Link
              to={link}
              className="font-bold hover:text-indigo-600 transition my-4 text-3xl"
            >
              {question.title}
            </Link>
          ) : (
            <div className="font-bold my-4 text-3xl">{question.title}</div>
          )}
          <div className="py-2">{question.body}</div>
        </div>
      )}

      {editStatus && (
        <div className="px-4 py-5 sm:px-6">
          <form
            className="flex flex-col justify-center items-center"
            onSubmit={changeQuestion}
          >
            <input
              className="border border-gray-300 w-1/2 h-10 p-3 mb-3"
              name="title"
              defaultValue={question.title}
            />
            <textarea
              className="border border-gray-300 w-1/2 h-40 p-3 mb-3"
              name="body"
              defaultValue={question.body}
            />
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Сохранить изменения
            </button>
          </form>
        </div>
      )}

      <div className="px-4 py-3 relative flex items-center space-x-1  text-gray-600 text-sm sm:px-6">
        <Like like={likeQuestion} likeCount={question.likes.length} />
        <AuthorCard author={question.author} />
        <div className="px-2 text-sm  w-max text-gray-400 ">
          <Time time={question.date} />
        </div>
        <div className="px-2 text-sm  w-max text-gray-400 ">
          Ответов: {question.answers.length}
        </div>

        {secondRedirect && <Redirect to="/" />}
      </div>
    </div>
  );
}
