import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Warning from "../Components/Partials/Warning";
import {
  sagaAuthCheck,
  sagaLoadQuestions,
} from "../Redux/actions/actionCreator";
import { buttonList } from "../Utils/categories";
import Feed from "./Feed";

export default function MainFeed() {
  const dispatch = useDispatch();
  const { questions } = useSelector((state) => state);

  // Sort by likes
  const [questionsList, setQuestionsList] = useState(
    questions.sort((a, b) => b.likes.length - a.likes.length)
  );

  // Database renew
  useEffect(() => {
    dispatch(sagaLoadQuestions("http://localhost:4000/allquestions"));
    dispatch(sagaAuthCheck("http://localhost:4000/"));
  }, [dispatch]);

  useEffect(() => {
    setQuestionsList(questions.sort((a, b) => b.likes.length - a.likes.length));
  }, [questions]);

  // Filtering
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
  return questions.length > 0 ? (
    <Feed
      filters={buttonsState}
      filter={sortByTheme}
      questions={questionsList}
    />
  ) : (
    <div className="border-8 mt-24 mx-auto rounded-full w-24 h-24 border-gray-500 border-dashed animate-spin"></div>
  );
}
