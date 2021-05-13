import { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import { sagaPostQuestion } from "../../Redux/actions/actionCreator";
import fetchCreator from "../../Redux/fetchCreator";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon, XIcon } from "@heroicons/react/outline";

export default function FormQuestion() {
  const dispatch = useDispatch();

  const [formStatus, editFormStatus] = useState(false);
  const [open, setOpen] = useState(true);

  const postNewQuestion = (e) => {
    e.preventDefault();
    const title = e.target.questionTitle.value;
    const body = e.target.questionBody.value;
    dispatch(
      sagaPostQuestion(
        fetchCreator("http://localhost:4000/question", "POST", { title, body })
      )
    );
    editFormStatus(false);
  };

  return (
    <>
      {formStatus && (
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            static
            className="fixed z-10 inset-0 overflow-y-auto"
            open={open}
            onClose={setOpen}
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

              {/* This element is to trick the browser into centering the modal contents. */}
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
                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                  <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                    <button
                      type="button"
                      className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => {
                        editFormStatus(false);
                        setOpen(false);
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        Добавление нового вопроса
                      </Dialog.Title>
                      <div className="mt-2">
                        <form
                          className=" flex flex-col w-96 m-10 "
                          onSubmit={postNewQuestion}
                        >
                          <label className="block text-base font-medium text-gray-700">
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
                          <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 outline-none w-min "
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
      )}
      <button
        type="button"
        onClick={() => {
          editFormStatus(true);
          setOpen(true);
        }}
        className="inline-flex w-72 m-3 justify-center px-6 py-3 border border-transparent font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Задать вопрос
      </button>
    </>
  );
}
