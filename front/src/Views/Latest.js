import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sagaAuthCheck,
  sagaLoadQuestions,
} from "../Redux/actions/actionCreator";
import { buttonList } from "../Utils/categories";
import Feed from "./Feed";

function Latest(props) {
  const dispatch = useDispatch();
  const { questions } = useSelector((state) => state);

  const [questionsList, setQuestionsList] = useState(
    questions.sort((a, b) => new Date(b.date) - new Date(a.date))
  );

  // Database renew
  useEffect(() => {
    dispatch(sagaLoadQuestions(process.env.REACT_APP_ALL_QUESTION));
    dispatch(sagaAuthCheck(process.env.REACT_APP_MAIN));
  }, [dispatch]);

  useEffect(() => {
    setQuestionsList(
      questions.sort((a, b) => new Date(b.date) - new Date(a.date))
    );
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
      questions={questionsList}
      filter={sortByTheme}
    />
  ) : (
    <div className="border-8 mt-24 mx-auto rounded-full w-24 h-24 border-gray-500 border-dashed animate-spin"></div>
  );
}

export default Latest;
