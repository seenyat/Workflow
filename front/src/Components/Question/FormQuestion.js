import { Listbox, Transition } from "@headlessui/react";
import { useState, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sagaPostQuestion } from "../../Redux/actions/actionCreator";
import fetchCreator from "../../Redux/fetchCreator";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Link, Redirect } from "react-router-dom";

export default function FormQuestion() {
  const themes = [
    { id: 1, theme: "CSS" },
    { id: 2, theme: "JavaScript" },
    { id: 3, theme: "Python" },
    { id: 4, theme: "React" },
    { id: 5, theme: "HTML" },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const dispatch = useDispatch();

  const [formStatus, editFormStatus] = useState(false);

  const user = useSelector((state) => state.user);

  const [redirectStatus, setRedirectStatus] = useState(false);

  const [adress, setAdress] = useState("");

  const [selected, setSelected] = useState(themes[0]);

  const postNewQuestion = async (e) => {
    e.preventDefault();
    const title = e.target.questionTitle.value;
    const body = e.target.questionBody.value;
    const theme = selected.theme;
    dispatch(
      sagaPostQuestion({
        pay: fetchCreator(process.env.REACT_APP_QUESTION, "POST", {
          title,
          body,
          theme,
          authorid: user._id,
        }),
        setRedirectStatus,
        setAdress,
      })
    );
    editFormStatus(false);
  };

  return !user ? (
    <Link to="/login">
      <button
        type="button"
        onClick={() => editFormStatus(true)}
        className="inline-flex w-72 m-6 mb-20 justify-center px-6 py-3 border border-transparent font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Авторизоваться
      </button>
    </Link>
  ) : (
    <>
      {!formStatus ? (
        <button
          type="button"
          onClick={() => editFormStatus(true)}
          className="inline-flex w-72 m-6 mb-20 justify-center px-6 py-3 border border-transparent font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Задать вопрос
        </button>
      ) : (
        <form
          className=" bg-white dark:bg-gray-700 dark:text-white shadow-md rounded-md flex flex-col mx-auto my-2 mb-24 p-6 w-full md:max-w-4xl "
          onSubmit={postNewQuestion}
        >
          <label className="mt-1 w-full dark:text-white text-2xl block font-medium text-gray-700">
            Создание нового вопроса
          </label>

          <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
              <>
                <Listbox.Label className="block font-medium text-gray-700">
                  Выберите тему:
                </Listbox.Label>
                <div className="mt-1 relative">
                  <Listbox.Button className="relative w-64 h-10 bg-white dark:bg-gray-500 dark:border-gray-500 border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <span className="block truncate">{selected.theme}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <SelectorIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options
                      static
                      className="absolute z-10 mt-1 h-max dark:bg-gray-500 dark:border-gray-500 dark:text-white bg-white shadow-lg max-h-96 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                    >
                      {themes.map((person) => (
                        <Listbox.Option
                          key={person.id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "text-white dark:bg-opacity-50 bg-indigo-600"
                                : "text-gray-900 dark:text-white",
                              "cursor-pointer w-96 select-none relative py-2 pl-8 pr-4"
                            )
                          }
                          value={person}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "block truncate"
                                )}
                              >
                                {person.theme}
                              </span>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? "text-white" : "text-indigo-600",
                                    "absolute inset-y-0 left-0 flex items-center pl-1.5"
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
          <label className="mt-2 block text-base font-medium dark:text-white text-gray-700">
            Заголовок
          </label>
          <div className="mt-1">
            <input
              required
              minLength="3"
              type="text"
              name="questionTitle"
              id="questionTitle"
              className="shadow-sm dark:placeholder-gray-100 dark:text-white dark:bg-gray-500 dark:border-gray-500 focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 sm:text-sm border border-gray-300 rounded-md mt-2 mb-4 p-3 "
              placeholder="Заголовок"
            />
          </div>
          <label
            htmlFor="email"
            className="font-medium text-gray-700 dark:text-white block text-base "
          >
            Вопрос
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2 ">
            <textarea
              required
              minLength="10"
              id="about"
              name="questionBody"
              rows={3}
              className="max-w-lg dark:placeholder-gray-100 dark:text-white shadow-sm dark:bg-gray-500 dark:border-gray-500 block w-full h-28 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md mt-2 mb-4 p-3"
              defaultValue={""}
              placeholder="Опиши суть своего вопроса"
            />
          </div>
          <button
            type="submit"
            className="inline-flex dark:bg-opacity-50 items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 outline-none w-min "
          >
            Отправить
          </button>
        </form>
      )}
      {redirectStatus ? <Redirect to={`/question/${adress}`} /> : null}
    </>
  );
}
