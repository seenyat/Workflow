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

export default function UserProfile() {
  const user = useSelector((state) => state.user);
  const prof = useSelector((state) => state.prof);

  const dispatch = useDispatch();
  // const [prof, setProf] = useState();
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    if (user) {
      dispatch(
        addSAGAProfileAnswerQuestion(process.env.REACT_APP_PROFILE + user._id)
      );
      // fetch(`http://localhost:4000/profile/${user._id}`, {
      //   method: "GET",
      //   credentials: "include",
      // }).then((data) =>
      //   data.json().then(profile => dispatch({ type: ADD_PROFILE_QA, payload: profile })
      //   )
      // );
    }
  }, [dispatch, user]);

  const handleEdit = (e) => {
    setEdit(true);
  };
  const nameInput = useRef();
  const nameInfo = useRef();
  const handle = (e) => {
    e.preventDefault();
    console.log(123);
    const login = nameInput.current.value;
    const info = nameInfo.current.value;
    console.log(process.env.REACT_APP_PROFILE + user._id);

    dispatch(
      sagaEditProfile(
        fetchCreator(`http://localhost:4000/profile/${user._id}`, "PUT", {
          login,
          info,
        })
      )
    );

    // dispatch(
    //   sagaEditProfile(
    //     fetchCreator(``, "PUT", {
    //       login,
    //       info,
    //     })
    //   )

    //     info,
    //   }),
    // })

    //   .then((data) => data.json())
    //   .then((profile) => dispatch({ type: EDIT_PROFILE, payload: profile }))
    setEdit(false);
  };

  return user ? (
    <div className="min-h-screen bg-gray-100 overflow-scroll">
      <main className="py-10">
        {/* Page header */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
          <div className="flex items-center space-x-5">
            <div className="flex-shrink-0">
              <div className="relative">
                <img
                  className="h-16 w-16 rounded-full"
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
                  {" "}
                  <input
                    className="text-2xl font-bold text-gray-900"
                    ref={nameInput}
                    placeholder="введите имя"
                    defaultValue={user.login}
                  />
                  <button onClick={handle}> отправить</button>
                </>
              ) : (
                <h1 className="text-2xl font-bold text-gray-900">
                  {user.login}
                </h1>
              )}

              <p className="text-sm font-medium text-gray-500">
                Status:{" "}
                <a href="#" className="text-gray-900">
                  {user.role}
                </a>{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
          <div className="space-y-6 lg:col-start-1 lg:col-span-2">
            {/* Description list*/}
            <section aria-labelledby="applicant-information-title">
              <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h2
                    id="applicant-information-title"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    Profile
                  </h2>
                  <button
                    onClick={handleEdit}
                    className="text-sm font-medium text-gray-500"
                  >
                    Редактировать
                  </button>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    {user.email !== null && (
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Email address
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {user.email}
                        </dd>
                      </div>
                    )}

                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        Likes
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {prof && prof.sumLikes}
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        О себе:
                      </dt>
                      {edit ? (
                        <>
                          {" "}
                          <input
                            className="mt-1 text-sm text-gray-900"
                            ref={nameInfo}
                            placeholder="введите информацию"
                            defaultValue={user.info}
                          />
                        </>
                      ) : (
                        <dd className="mt-1 text-sm text-gray-900">
                          {" "}
                          {user.info}
                        </dd>
                      )}
                    </div>
                  </dl>
                </div>
              </div>
            </section>

            {/* Answers*/}
            <section aria-labelledby="notes-title">
              <div className="bg-white shadow sm:rounded-lg sm:overflow-hidden">
                <div className="divide-y divide-gray-200">
                  <div className="px-4 py-5 sm:px-6">
                    <h2
                      id="notes-title"
                      className="text-lg font-medium text-gray-900"
                    >
                      Answers
                    </h2>
                  </div>
                  <div className="px-4 py-6 sm:px-6">
                    <ul className="space-y-8">
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
            <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
              <h2
                id="timeline-title"
                className="text-lg font-medium text-gray-900"
              >
                Questions
              </h2>

              {/* Questions */}
              <div className="mt-6 flow-root">
                <ul className="-mb-8">
                  {prof?.questions.map((el) => (
                    <ProfileQuestions item={el} key={el._id} />
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex flex-col justify-stretch">
                <button
                  type="button"
                  onClick={() => dispatch(changeHeaderModalStatus(true))}
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Add Question
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  ) : null;
}
