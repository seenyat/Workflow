import React from "react";
import { useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFeedModalStatus,
  changeHeaderModalStatus,
  sagaPostQuestion,
} from "../../Redux/actions/actionCreator";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Listbox } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import fetchCreator from "../../Redux/fetchCreator";
import { Redirect } from "react-router";

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

export default function ModalForm() {
  const [open, setOpen] = useState(true);
  const user = useSelector((state) => state.user);
  const headerModalStatus = useSelector((state) => state.modals[1].status);

  const [selected, setSelected] = useState(themes[0]);

  const dispatch = useDispatch();
  const [redirectStatus, setRedirectStatus] = useState(false);
  const [adress, setAdress] = useState("");

  const postNewQuestion = (e) => {
    e.preventDefault();
    const title = e.target.questionTitle.value;
    const body = e.target.questionBody.value;
    const theme = selected.theme;
    console.log(123);

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
  };

  return (
    <>
      <Transition.Root
        onBlur={() => changeHeaderModalStatus(false)}
        show={headerModalStatus}
        as={Fragment}
      >
        <Dialog
          as="div"
          static
          className="fixed z-10 inset-0 overflow-y-auto"
          open={open}
          onClose={() => {
            dispatch(changeHeaderModalStatus(false));
            dispatch(changeFeedModalStatus(false));
            setOpen();
          }}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white dark:bg-gray-700 dark:text-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    className="bg-white dark:bg-gray-700 dark:text-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => {
                      dispatch(changeHeaderModalStatus(false));
                    }}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <div className="mt-2">
                      <form
                        className=" flex flex-col w-full mx-auto my-2"
                        onSubmit={postNewQuestion}
                      >
                        <Dialog.Title
                          as="h3"
                          className="font-bold my-5 text-2xl leading-6 dark:text-gray-200 text-gray-900"
                        >
                          Добавление нового вопроса
                        </Dialog.Title>
                        <Listbox value={selected} onChange={setSelected}>
                          {({ open }) => (
                            <>
                              <Listbox.Label className="block font-medium dark:text-gray-200 text-gray-700">
                                Выберите тему:
                              </Listbox.Label>
                              <div className="mt-1 relative">
                                <Listbox.Button className="relative w-full h-10 bg-white dark:bg-gray-500 dark:text-white border border-gray-300 dark:border-gray-500 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                  <span className="block truncate">
                                    {selected.theme}
                                  </span>
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
                                    className="absolute z-10 mt-1 h-max bg-white dark:bg-gray-700 dark:text-white shadow-lg max-h-96 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                                  >
                                    {themes.map((person) => (
                                      <Listbox.Option
                                        key={person.id}
                                        className={({ active }) =>
                                          classNames(
                                            active
                                              ? "text-white bg-indigo-600"
                                              : "text-gray-900",
                                            "cursor-default w-96 select-none relative py-2 pl-8 pr-4"
                                          )
                                        }
                                        value={person}
                                      >
                                        {({ selected, active }) => (
                                          <>
                                            <span
                                              className={classNames(
                                                selected
                                                  ? "font-semibold"
                                                  : "font-normal",
                                                "block truncate"
                                              )}
                                            >
                                              {person.theme}
                                            </span>

                                            {selected ? (
                                              <span
                                                className={classNames(
                                                  active
                                                    ? "text-white"
                                                    : "text-indigo-600",
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
                        <label className="mt-2 dark:text-gray-200 block text-base font-medium text-gray-700">
                          Заголовок
                        </label>
                        <div className="mt-1">
                          <input
                            required
                            minLength="3"
                            type="text"
                            name="questionTitle"
                            id="questionTitle"
                            className="shadow-sm dark:bg-gray-500 dark:placeholder-gray-100  dark:border-gray-500 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md mt-2 mb-4 p-3 "
                            placeholder="Заголовок"
                          />
                        </div>
                        <label
                          htmlFor="email"
                          className="font-medium dark:text-gray-200 text-gray-700 block text-base "
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
                            className="max-w-lg shadow-sm dark:bg-gray-500 dark:placeholder-gray-100 dark:border-gray-500 darkblock w-full h-28 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md mt-2 mb-4 p-3"
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
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      {redirectStatus ? <Redirect to={`/question/${adress}`} /> : null}
    </>
  );
}
