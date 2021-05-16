import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FormQuestion from "../Components/Question/FormQuestion";
import QuestionBody from "../Components/Question/QuestionBody";

export default function Feed({ filters, filter, questions }) {
  const user = useSelector((state) => state.user);

  return (
    <>
      <div className=" overflow-auto flex flex-col m-3 items-center ">
        <div className="flex justify-evenly w-full space-x-10">
          {user && <FormQuestion />}
        </div>
        <div className="w-full md:max-w-4xl flex flex-col space-y-5">
          <div className="w-full space-x-10 flex flex-row justify-center h-min">
            {filters.map((button) => (
              <div
                key={button.className}
                className="flex flex-col justify-center text-center "
              >
                <i
                  onClick={() => filter(button.theme)}
                  className={`${
                    button.className
                  } hover:bg-gray-200 transition p-2 rounded-md cursor-pointer ${
                    button.status ? "bg-gray-200" : ""
                  } `}
                />
                <p>{button.theme.length > 0 ? button.theme : "Все"}</p>
              </div>
            ))}
          </div>

          {questions.map((question) => (
            <Link key={question._id} to={`/question/${question._id}`}>
              <QuestionBody hideEdit={true} question={question} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
