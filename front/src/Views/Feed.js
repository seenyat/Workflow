import { ExclamationCircleIcon } from "@heroicons/react/outline";
import { PlusIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import FormQuestion from "../Components/Question/FormQuestion";
import QuestionBody from "../Components/Question/QuestionBody";

export default function Feed({ filters, filter, questions, setPage }) {
  const user = useSelector((state) => state.user);

  return (
    <>
      <div className=" overflow-auto relative py-10 h-full flex flex-col  items-center ">
        <div className="w-full md:max-w-4xl flex flex-col space-y-5">
          <div className="bg-white pt-16 shadow relative dark:bg-gray-700 dark:text-white w-full justify-between px-5 rounded flex-wrap sm:space-x-3 flex flex-row items-center  h-min">
            <div className="absolute left-8  top-2 font-bold text-2xl py-3 text-center">
              Выберите тему
            </div>
            {filters.map((button) => (
              <div
                key={button.className}
                className={`flex flex-col ${
                  button.status ? "bg-gray-200" : ""
                }  hover:bg-gray-200 py-2 px-1 transition rounded justify-center text-center items-center   h-max w-1/3 sm:w-max text-xs `}
              >
                <i
                  onClick={() => {
                    setPage(0);
                    filter(button.theme);
                  }}
                  className={` ${button.className} transition flex p-2 rounded-md cursor-pointer sm:text-6xl text-4xl `}
                />
                <p
                  className={`${
                    button.status ? "dark:text-black" : "dark:text-gray-200"
                  }  font-mono text-sm `}
                >
                  {button.theme.length > 0 ? button.theme : "Все"}
                </p>
              </div>
            ))}
            <div className="flex h-full w-full   py-3 right-1 items-center justify-evenly  ">
              {user ? (
                <FormQuestion />
              ) : (
                <div className="flex flex-col ">
                  <FormQuestion />
                </div>
              )}
            </div>
          </div>
          {questions.length > 0
            ? questions.map((question) => (
                <QuestionBody
                  link={`/question/${question._id}`}
                  hideEdit={true}
                  question={question}
                />
              ))
            : null}
        </div>
      </div>
    </>
  );
}
