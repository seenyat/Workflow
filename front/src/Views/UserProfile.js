import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { changeHeaderModalStatus } from "../Redux/actions/actionCreator";

export default function UserProfile() {
  const user = useSelector((state) => state.user);
  const state = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  const [prof, setProf] = useState();
  useEffect(() => {
    fetch(`http://localhost:4000/profile/${user._id}`, {
      method: "GET",
      credentials: "include",
    }).then((data) =>
      data.json().then((profile) => {
        // setAnswer(profile)
        console.log(profile);
        setProf(profile);
      })
    );
  }, [state]);

  return user ? (
    <div className="min-h-screen bg-gray-100">
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
              <h1 className="text-2xl font-bold text-gray-900">{user.login}</h1>
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
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        Email address
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {user.email}
                      </dd>
                    </div>

                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        Likes
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">120,000</dd>
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
                      {prof?.answers.map((answer) => (
                        <li key={answer._id}>
                          <div className="flex space-x-3">
                            <div className="flex-shrink-0"></div>
                            <div>
                              <div className="text-sm">
                                <a
                                  href="#"
                                  className="font-medium text-gray-900"
                                >
                                  {answer.comment}
                                </a>
                              </div>
                              <div className="mt-1 text-sm text-gray-700">
                                <p>{answer.comment}</p>
                              </div>
                              <div className="mt-2 text-sm space-x-2">
                                <span className="text-gray-500 font-medium">
                                  {answer.date}
                                </span>{" "}
                                <span className="text-gray-500 font-medium">
                                  &middot;
                                </span>{" "}
                              </div>
                            </div>
                          </div>
                        </li>
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
                  {prof?.questions.map((item) => (
                    <li key={item._id}>
                      <div className="relative pb-8">
                        <div className="relative flex space-x-3">
                          <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                            <div>
                              <p className="text-sm text-gray-500">
                                {item.title}:{" "}
                                <a
                                  href="#"
                                  className="font-medium text-gray-900"
                                >
                                  {item.body}
                                </a>
                              </p>
                            </div>
                            <div className="text-right text-sm whitespace-nowrap text-gray-500">
                              <time dateTime={item.datetime}>{item.date}</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
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
