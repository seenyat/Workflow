import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FormQuestion from "../Components/Question/FormQuestion";
import QuestionBody from "../Components/Question/QuestionBody";

export default function Feed({ filters, filter, questions, setPage }) {
  const user = useSelector((state) => state.user);

  return (
    <>
      <div className=" overflow-auto pb-10 h-full flex flex-col m-3 items-center ">
        <div className="flex justify-evenly w-full space-x-10">
          {user ? <FormQuestion /> : null}
        </div>
        <div className="w-full md:max-w-4xl flex flex-col space-y-5">
          <div className="w-full flex-wrap sm:space-x-3 flex flex-row justify-center h-min">
            {filters.map((button) => (
              <div
                key={button.className}
                className="flex flex-col justify-center text-center items-center  mb-4 h-max w-1/3 sm:w-max text-xs "
              >
                <i
                  onClick={() => {
                    setPage(0);
                    filter(button.theme);
                  }}
                  className={`${
                    button.className
                  } hover:bg-gray-200 transition flex p-2 rounded-md cursor-pointer sm:text-6xl text-4xl ${
                    button.status ? "bg-gray-200" : ""
                  } `}
                />
                <p>{button.theme.length > 0 ? button.theme : "Все"}</p>
              </div>
            ))}
          </div>
          {questions.length > 0
            ? questions.map((question) => (
                <Link key={question._id} to={`/question/${question._id}`}>
                  <QuestionBody hideEdit={true} question={question} />
                </Link>
              ))
            : null}
        </div>
      </div>
    </>
  );
}
