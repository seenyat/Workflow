import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { changeHeaderModalStatus } from "../Redux/actions/actionCreator";
import {
  addSAGAProfileAnswerQuestion,
  sagaEditProfile,
} from "../Redux/actions/actionCreator";
import ProfileQuestions from "../Components/Profile/ProfileQuestions";
import ProfileAnswers from "../Components/Profile/ProfileAnswers";
import fetchCreator from "../Redux/fetchCreator";
import { PencilAltIcon } from "@heroicons/react/solid";

export default function UserProfile() {
  const user = useSelector((state) => state.user);
  const prof = useSelector((state) => state.prof);
  const state = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    if (user) {
      dispatch(
        addSAGAProfileAnswerQuestion(process.env.REACT_APP_PROFILE + user._id)
      );
    }
  }, [dispatch, user]);

  const handleEdit = (e) => {
    setEdit(true);
  };
  const nameInput = useRef();
  const nameInfo = useRef();
  const handle = (e) => {
    e.preventDefault();

    const name = nameInput.current.value;
    const info = nameInfo.current.value;

    dispatch(
      sagaEditProfile(
        fetchCreator(process.env.REACT_APP_PROFILE + user._id, "PUT", {
          name,
          info,
        })
      )
    );
    setEdit(false);
  };

  return user ? (
    <div className="min-h-screen  bg-gray-100 dark:bg-gray-900 overflow-scroll">
      <main className="py-10">
        {/* Page header */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8"></div>

        <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
          <div className="space-y-6 lg:col-start-1 lg:col-span-2">
            {/* Description list*/}
            <section aria-labelledby="applicant-information-title">
              <div className="bg-white dark:bg-gray-700 dark:text-white relative shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h2
                    id="applicant-information-title"
                    className="text-lg leading-6 font-medium dark:text-gray-200 text-gray-900"
                  >
                    <div className="flex items-center space-x-5">
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={user?.avatar_url}
                            alt=""
                          />
                          <span
                            className="absolute inset-0 shadow-inner rounded-full"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                      <div>
                        {edit ? (
                          <>
                            <input
                              className="text-2xl shadow  px-3 py-2 rounded-md font-bold text-gray-900"
                              ref={nameInput}
                              placeholder="введите имя"
                              defaultValue={user.name}
                            />
                          </>
                        ) : (
                          <div className="text-2xl dark:text-gray-100 font-bold text-gray-900">
                            {user.name}
                          </div>
                        )}
                      </div>
                    </div>
                  </h2>
                  <dt className="text-sm font-medium dark:text-gray-200 text-gray-500"></dt>
                  {edit ? (
                    <>
                      <input
                        className="mt-5 rounded px-2 py-2 text-md border border-gray-300 text-gray-900"
                        ref={nameInfo}
                        autoFocus
                        placeholder="введите информацию"
                        defaultValue={user.info}
                      />
                    </>
                  ) : (
                    <dd className="mt-5 text-md text-gray-700">{user.info}</dd>
                  )}
                  {!edit ? (
                    <button
                      onClick={handleEdit}
                      className="text-sm flex items-center absolute bg-indigo-500 hover:bg-indigo-800 transition px-5 py-3 rounded text-white top-4 right-4 font-medium "
                    >
                      <PencilAltIcon className="w-5 h-5 mr-3" />
                      <div>Редактировать</div>
                    </button>
                  ) : (
                    <button
                      onClick={handle}
                      className="text-sm flex items-center absolute bg-green-500 hover:bg-green-800 transition px-5 py-3 rounded text-white top-4 right-4 font-medium "
                    >
                      <PencilAltIcon className="w-5 h-5 mr-3" />
                      <div>Сохранить</div>
                    </button>
                  )}
                </div>
                <div className="border-t border-gray-200 dark:border-gray-600 px-4 py-5 sm:px-6">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    {user.email !== null && (
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Email
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {user.email}
                        </dd>
                      </div>
                    )}
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium dark:text-white text-gray-500">
                        GitHub
                      </dt>
                      <a
                        href={`https://github.com/${user.login}`}
                        alt=""
                        className="mt-1 hover:text-indigo-300 text-sm dark:text-gray-200 text-gray-900"
                      >
                        @{user.login}
                      </a>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium dark:text-white text-gray-500">
                        Likes
                      </dt>
                      <dd className="mt-1 text-sm dark:text-gray-200  text-gray-900">
                        {prof && prof.sumLikes}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </section>

            {/* Answers*/}
            <section aria-labelledby="notes-title">
              <div className="bg-white dark:bg-gray-700 dark:text-white shadow sm:rounded-lg sm:overflow-hidden">
                <div className="divide-y divide-gray-200 dark:divide-gray-600">
                  <div className="px-4 py-5 sm:px-6">
                    <h2
                      id="notes-title"
                      className="text-lg pl-2 font-medium dark:text-gray-200 text-gray-900"
                    >
                      Ответы
                    </h2>
                  </div>
                  <div className="px-2 ">
                    <ul className="divide-y dark:divide-gray-600">
                      {prof?.answers.map((el) => (
                        <ProfileAnswers answer={el} key={el._id} />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section
            aria-labelledby="timeline-title"
            className="lg:col-start-3 lg:col-span-1"
          >
            <div className="bg-white dark:bg-gray-700 dark:text-white py-5 shadow sm:rounded-lg ">
              <div
                id="timeline-title"
                className="text-lg flex pl-5 font-medium dark:text-gray-200 text-gray-900"
              >
                Вопросы
              </div>

              {/* Questions */}
              <div className="flow-root">
                <ul className="divide-y dark:divide-gray-600 space-y-2">
                  {prof?.questions.length > 8
                    ? prof?.questions
                        .slice(0, 8)
                        .map((el) => (
                          <ProfileQuestions item={el} key={el._id} />
                        ))
                    : prof?.questions.map((el) => {
                        return <ProfileQuestions item={el} key={el._id} />;
                      })}
                </ul>
              </div>
              <div className="mt-6 flex flex-col justify-stretch">
                <button
                  type="button"
                  onClick={() => dispatch(changeHeaderModalStatus(true))}
                  className="inline-flex items-center justify-center mx-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Добавить вопрос
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  ) : null;
}
