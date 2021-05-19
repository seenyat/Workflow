import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sagaDeleteQuestion,
  sagaEditQuestion,
} from "../../Redux/actions/actionCreator";
import fetchCreator from "../../Redux/fetchCreator";

import AuthorCard from "../Partials/AuthorCard";
import Like from "../Partials/Like";
import Time from "../../Utils/Time";
import { themeIcons } from "../../Utils/themeIcons";
import { Link, Redirect } from "react-router-dom";
import EditAndDelete from "../Partials/editAndDelete";
import { ChatIcon } from "@heroicons/react/solid";

export default function QuestionBody({ question, hideEdit, link }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [editStatus, setEditStatus] = useState(false);

  const [secondRedirect, setSecondRedirect] = useState(false);

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
    <div className="bg-white dark:bg-gray-700 text-xl w-full dark:text-white relative overflow-hidden shadow rounded-lg divide-y dark:divide-gray-600 divide-gray-200">
      <div className=" pl-4 flex sm:px-6 py-2 font-mono lowercase text-gray-400 dark:text-gray-200">
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
          <div className=" pb-1 space-y-2 text-sm  w-max text-gray-400 dark:text-gray-200">
            <AuthorCard author={question.author} />
            <Time time={question.date} />
          </div>
          {link ? (
            <Link
              to={link}
              className="font-bold hover:text-indigo-600 dark:hover:text-indigo-300 transition my-4 text-3xl"
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
            className="flex space-y-3 flex-col justify-center"
            onSubmit={changeQuestion}
          >
            <div>Заголовок</div>
            <input
              className="border rounded dark:bg-gray-500 border-gray-300 w-1/2 h-10 p-3 mb-3"
              name="title"
              defaultValue={question.title}
            />
            <div>Вопрос</div>
            <textarea
              className="border rounded dark:bg-gray-500  border-gray-300 w-1/2 h-40 p-3 mb-3"
              name="body"
              defaultValue={question.body}
            />
            <button className="w-max items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Сохранить изменения
            </button>
          </form>
        </div>
      )}

      <div className="px-4 py-3 relative flex items-center space-x-2  text-gray-600 text-sm sm:px-6">
        <Like
          likeURL={process.env.REACT_APP_QUESTION_LIKE}
          content={question}
        />

        <div className=" flex space-x-1 text-sm  w-max text-gray-300 ">
          <ChatIcon className="h-5 w-5" /> <div>{question.answers.length}</div>
        </div>

        {secondRedirect && <Redirect to="/" />}
      </div>
    </div>
  );
}
