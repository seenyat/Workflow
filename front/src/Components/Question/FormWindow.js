import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import {
  LinkIcon,
  PlusIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { sagaPostQuestion } from "../../Redux/actions/actionCreator";
import fetchCreator from "../../Redux/fetchCreator";
import { Listbox } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

export default function Example() {
  const [open, setOpen] = useState(true);
  const themes = [
    { id: 1, theme: "CSS" },
    { id: 2, theme: "JAVASCRIPT" },
    { id: 3, theme: "Python" },
    { id: 4, theme: "React" },
    { id: 5, theme: "HTML" },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [selected, setSelected] = useState(themes[0]);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const postNewQuestion = (e) => {
    e.preventDefault();
    const title = e.target.questionTitle.value;
    const body = e.target.questionBody.value;
    const theme = selected.theme;

    dispatch(
      sagaPostQuestion(
        fetchCreator("http://localhost:4000/question", "POST", {
          title,
          body,
          theme,
          authorid: user._id,
        })
      )
    );
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        // className="h-full pt-11 mt-14 z-20 "
        static
        className="fixed  inset-0 overflow-hidden"
        open={open}
        onClose={setOpen}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="fixed inset-y-0 pl-16 max-w-full top-16 right-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <form
                  onSubmit={postNewQuestion}
                  className="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl"
                >
                  <div className="flex-1 h-0 overflow-y-auto">
                    <div className="py-6 px-4 bg-indigo-700 sm:px-6">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-lg font-medium text-white">
                          New Project
                        </Dialog.Title>
                        <div className="ml-3 h-7 flex items-center">
                          <button
                            type="button"
                            className="bg-indigo-700 rounded-md text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-1">
                        <p className="text-sm text-indigo-300">
                          Добавление нового вопроса
                        </p>
                      </div>
                    </div>
                    <div className="space-y-6 pt-6 pb-5 m-5 ">
                      <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <div className="mt-2">
                            <Dialog.Title
                              as="h3"
                              className="font-bold my-5 text-2xl leading-6  text-gray-900"
                            >
                              Добавление нового вопроса
                            </Dialog.Title>
                            <Listbox value={selected} onChange={setSelected}>
                              {({ open }) => (
                                <>
                                  <Listbox.Label className="block font-medium text-gray-700">
                                    Выберите тему:
                                  </Listbox.Label>
                                  <div className="mt-1 relative">
                                    <Listbox.Button className="relative w-full h-10 bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
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
                                        className="absolute z-10 mt-1 h-max bg-white shadow-lg max-h-96 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
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
                            <label className="mt-2 block text-base font-medium text-gray-700">
                              Заголовок
                            </label>
                            <div className="mt-1">
                              <input
                                required
                                minLength="3"
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
                                required
                                minLength="10"
                                id="about"
                                name="questionBody"
                                rows={3}
                                className="max-w-lg shadow-sm block w-full h-28 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md mt-2 mb-4 p-3"
                                defaultValue={""}
                                placeholder="Опиши суть своего вопроса"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex-shrink-0 px-4 py-4 flex justify-end">
                        <button
                          type="button"
                          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          onClick={() => setOpen(false)}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
