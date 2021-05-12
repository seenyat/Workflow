import React from "react";
import { useDispatch } from "react-redux";
import { sagaPostQuestion } from "../Redux/actions/actionCreator";
import fetchCreator from "../Redux/fetchCreator";

export default function UserProfile() {
  const dispatch = useDispatch();

  const postNewQuestion = (e) => {
    e.preventDefault();
    const title = e.target.questionTitle.value;
    const body = e.target.questionBody.value;
    dispatch(
      sagaPostQuestion(fetchCreator("/postQuestion", "POST", { title, body }))
    );
  };

  return (
    <form className=" flex flex-col w-96 m-10 " onSubmit={postNewQuestion}>
      <label className="block text-base font-medium text-gray-700">
        Заголовок
      </label>
      <div className="mt-1">
        <input
          type="text"
          name="questionTitle"
          id="questionTitle"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md mt-2 mb-4 p-3 "
          placeholder="Заголовок"
        />
      </div>
      <label
        htmlFor="email"
        className="font-medium text-gray-700 block text-base "
      >
        Вопрос
      </label>
      <div className="mt-1 sm:mt-0 sm:col-span-2 ">
        <textarea
          id="about"
          name="questionBody"
          rows={3}
          className="max-w-lg shadow-sm block w-full h-28 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md mt-2 mb-4 p-3"
          defaultValue={""}
          placeholder="Опиши суть своего вопроса"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 outline-none w-min "
      >
        Отправить
      </button>
    </form>
  );
}
