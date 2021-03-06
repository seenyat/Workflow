import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sagaAuthCheck,
  sagaLoadQuestions,
} from "../Redux/actions/actionCreator";
import { buttonList } from "../Utils/categories";
import Feed from "./Feed";
import Pagination from "../Components/Pagination/Pagination";
export default function MainFeed() {
  const dispatch = useDispatch();
  const { questions } = useSelector((state) => state);
  const [page, setPage] = useState(0);

  // Sort by likes
  const [questionsList, setQuestionsList] = useState(
    questions.sort((a, b) => b.likes.length - a.likes.length)
  );
  // Database renew
  useEffect(() => {
    dispatch(sagaLoadQuestions(process.env.REACT_APP_ALL_QUESTION));
    dispatch(sagaAuthCheck(process.env.REACT_APP_MAIN));
  }, [dispatch]);

  useEffect(() => {
    setQuestionsList(
      questions
        .sort((a, b) => b.likes.length - a.likes.length)
        .slice(page * 5, page * 5 + 5)
    );
    sortByTheme(buttonsState.filter((el) => el.status)[0].theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questions, page]);
  const [count, setCount] = useState(0);

  // Filtering
  const [buttonsState, setButtonsState] = useState(buttonList);
  const sortByTheme = (theme) => {
    const newList = questions.filter((que) => que.theme.includes(theme));
    setQuestionsList(newList.slice(page * 5, page * 5 + 5));
    setCount(newList.length);
    // setPage(0)
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

  return questions ? (
    <>
      <Feed
        setPage={setPage}
        filters={buttonsState}
        filter={sortByTheme}
        questions={questionsList}
      />
      <Pagination pageCount={count} setPage={setPage} page={page} />
    </>
  ) : (
    <div className="border-8 mt-24 mx-auto rounded-full w-24 h-24 border-gray-500 border-dashed animate-spin"></div>
  );
}
