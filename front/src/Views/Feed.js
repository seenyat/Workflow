import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OneCardInFeed from "../Components/OneCardInFeed";
import FormQuestion from "../Components/Question/FormQuestion";

// import {
//   sagaAuthCheck,
//   sagaLoadQuestions,
// } from "../Redux/actions/actionCreator";

export default function Feed() {
  const { questions } = useSelector((state) => state);
  
  const [questionsList, setQuestionsList] = useState(questions);

  useEffect(() => {
    setQuestionsList(questions);
  }, [questions]);

  const themes = {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  };

  return (
    <div className=" overflow-scroll flex flex-col m-3 items-center ">
      <div className="flex justify-evenly w-full space-x-10">
        <FormQuestion />
      </div>
      <div className="w-full space-x-10 flex flex-row justify-center h-min">
        <i
          onClick={() => {}}
          className="fab text-blue-700 fa-6x fa-css3-alt hover:bg-gray-200 transition p-2 rounded-md cursor-pointer"
        ></i>
        <i
          onClick={() => {}}
          className="fab text-yellow-400 fa-6x fa-js hover:bg-gray-200 transition p-2 rounded-md cursor-pointer"
        ></i>
        <i
          onClick={() => {}}
          className="fab text-blue-800 fa-6x fa-python hover:bg-gray-200 transition p-2 rounded-md cursor-pointer"
        ></i>
        <i
          onClick={() => {}}
          className="fab text-blue-400 fa-6x fa-react hover:bg-gray-200 transition p-2 rounded-md cursor-pointer"
        ></i>
        <i
          onClick={() => {}}
          className="fab text-red-700 fa-6x fa-html5 hover:bg-gray-200 transition p-2 rounded-md cursor-pointer"
        ></i>
      </div>
      <div className=" w-1/2 ">
        {questionsList.map((question) => (
          <OneCardInFeed key={question._id} question={question} />
        ))}
      </div>
    </div>
  );
}
