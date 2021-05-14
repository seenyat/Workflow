import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OneCardInFeed from "../Components/OneCardInFeed";
import FormQuestion from "../Components/Question/FormQuestion";
import FormWIndow from "../Components/Question/FormWindow";

export default function Feed() {
  const { questions } = useSelector((state) => state);
  const [questionsList, setQuestionsList] = useState(
    questions.sort((a, b) => b.likes.length - a.likes.length)
  );

  const [trans, setTrans] = useState(false);
  console.log(trans);

  useEffect(() => {
    setQuestionsList(questions);
  }, [questions]);

  const buttonsList = [
    {
      className: "fab text-blue-700 fa-6x fa-css3-alt",
      theme: "CSS",
      status: false,
    },
    {
      className: "fab text-yellow-400 fa-6x fa-js",
      theme: "JAVASCRIPT",
      status: false,
    },
    {
      className: "fab text-blue-800 fa-6x fa-python",
      theme: "Python",
      status: false,
    },
    {
      className: "fab text-blue-400 fa-6x fa-react",
      theme: "React",
      status: false,
    },
    {
      className: "fab text-red-700 fa-6x fa-html5",
      theme: "HTML",
      status: false,
    },
  ];

  const [buttonsState, setButtonsState] = useState(buttonsList);

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
          <button onClick={() => setTrans(!trans)}>formform</button>
        </div>
        {trans && <FormWIndow />}
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

        <div className=" w-1/2 ">
          {questionsList.map((question) => (
            <OneCardInFeed key={question._id} question={question} />
          ))}
        </div>
      </div>
    </>
  );
}
