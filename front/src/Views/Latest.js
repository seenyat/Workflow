import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sagaAuthCheck,
  sagaLoadQuestions,
} from "../Redux/actions/actionCreator";
import { buttonList } from "../Utils/categories";
import Feed from "./Feed";
import Pagination from "../Components/Pagination/Pagination";
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import FormQuestion from "../Components/Question/FormQuestion";
function Latest(props) {
  const dispatch = useDispatch();
  const { questions } = useSelector((state) => state);
  const [page, setPage] = useState(0);
  const [questionsList, setQuestionsList] = useState(
    questions.sort((a, b) => new Date(b.date) - new Date(a.date))
  );
  const { user } = useSelector((state) => state);

  // Database renew
  useEffect(() => {
    dispatch(sagaLoadQuestions(process.env.REACT_APP_ALL_QUESTION));
    dispatch(sagaAuthCheck(process.env.REACT_APP_MAIN));
  }, [dispatch]);

  const [count, setCount] = useState(0);
  // Filtering
  const [buttonsState, setButtonsState] = useState(buttonList);
  const sortByTheme = (theme) => {
    const newList = questions.filter((que) => que.theme.includes(theme));
    
    setQuestionsList(newList.slice(page * 5, page * 5 + 5));
    setCount(newList.length);
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
    useEffect(() => {
      setQuestionsList(
        questions
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(page * 5, page * 5 + 5)
      );
      sortByTheme(buttonsState.filter((el) => el.status)[0].theme);
    }, [questions, page, buttonsState, sortByTheme]);
    
    return !user ? (
      <>
      {questions.length > 0 ? (
        <>
          <Feed
            setPage={setPage}
            filters={buttonsState}
            questions={questionsList}
            filter={sortByTheme}
          />
          <Pagination pageCount={count} setPage={setPage} page={page} />
        </>
      ) : (
        <div className="flex flex-col items-center ">
          <div className="flex items-center bg-red-100 w-full text-gray-700 justify-center rounded-md p-5 text-xl my-5">
            <ExclamationCircleIcon className="h-8 w-8 text-gray-500 opacity-50 mr-3" />{" "}
            На текущий момент вопросов нет!
          </div>
        </div>
      )}
    </>
  ) : questions.length > 0 ? (
    <>
      <Feed
        setPage={setPage}
        filters={buttonsState}
        questions={questionsList}
        filter={sortByTheme}
      />
      <Pagination pageCount={count} setPage={setPage} page={page} />
    </>
  ) : (
    <div className="flex flex-col items-center ">
      <div className="flex items-center bg-red-100 w-full text-gray-700 justify-center rounded-md p-5 text-xl my-5">
        <ExclamationCircleIcon className="h-8 w-8 text-gray-500 opacity-50 mr-3" />{" "}
        На текущий момент вопросов нет!
      </div>
      <FormQuestion />
    </div>
  );
}

export default Latest;
