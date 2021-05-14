import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { buttonList } from "../Utils/categories";
import FormQuestion from "../Components/Question/FormQuestion";
import QuestionBody from "../Components/Question/QuestionBody";

export default function Feed() {
  const { questions } = useSelector((state) => state);
  const [questionsList, setQuestionsList] = useState(
    questions.sort((a, b) => b.likes.length - a.likes.length)
  );

  useEffect(() => {
    setQuestionsList(questions);
  }, [questions]);

  const [buttonsState, setButtonsState] = useState(buttonList);

  const sortByTheme = (theme) => {
    const newList = questions.filter((que) => que.theme === theme);
    setQuestionsList(newList);
    setButtonsState(
      buttonsState.map((bt) =>
        bt.theme !== theme
          ? {
              ...bt,
              status: false,
            }
          : {
              ...bt,
              status: true,
            }
      )
    );
  };

  return (
    <>
      <div className=" overflow-scroll flex flex-col m-3 items-center ">
        <div className="flex justify-evenly w-full space-x-10">
          <FormQuestion />
        </div>
        <div className="w-full space-x-10 flex flex-row justify-center h-min">
          {buttonsState.map((button) => (
            <div className="flex flex-col justify-center text-center ">
              <i
                key={button.className}
                onClick={() => sortByTheme(button.theme)}
                className={`${
                  button.className
                } hover:bg-gray-200 transition p-2 rounded-md cursor-pointer ${
                  button.status ? "bg-gray-200" : ""
                } `}
              />
              <p>{button.theme}</p>
            </div>
          ))}
        </div>

        <div className="w-full md:max-w-4xl flex flex-col space-y-5">
          {questionsList.map((question) => (
            <Link to={`/question/${question._id}`}>
              <QuestionBody question={question} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
