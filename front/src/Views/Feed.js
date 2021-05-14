import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OneCardInFeed from "../Components/OneCardInFeed";
import FormQuestion from "../Components/Question/FormQuestion";
import {
  sagaAuthCheck,
  sagaLoadQuestions,
} from "../Redux/actions/actionCreator";

export default function Feed() {
  const { questions } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sagaLoadQuestions("http://localhost:4000/allquestions"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(sagaAuthCheck("http://localhost:4000/"));
  }, [dispatch]);

  return questions ? (
    <div className=" overflow-scroll flex flex-col m-3 items-center ">
      <div className="addQueDiv" >
      <FormQuestion />
      </div>
      {questions.map((question) => (
        <OneCardInFeed key={question._id} question={question} />
      ))}
    </div>
  ) : null;
}
