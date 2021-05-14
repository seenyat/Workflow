import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OneCardInFeed from "../Components/OneCardInFeed";
import FormQuestion from "../Components/Question/FormQuestion";
import {
  sagaAuthCheck,
  sagaLoadQuestions,
} from "../Redux/actions/actionCreator";

function Latest(props) {

  const questions = useSelector((state) => state.questions.sort((a, b) => new Date(b.date) - new Date(a.date)))

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sagaLoadQuestions("http://localhost:4000/allquestions"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(sagaAuthCheck("http://localhost:4000/"));
  }, [dispatch]);

  return questions ? (
    <div className=" overflow-scroll flex flex-col m-3 items-center ">
      <div className="addQueDiv">
        <FormQuestion />
      </div>
      <div className='w-1/2'>
      {questions.map((question) => (
        <OneCardInFeed key={question._id} question={question} />
      ))}
      </div>
    </div>
  ) : null;
}

export default Latest;
