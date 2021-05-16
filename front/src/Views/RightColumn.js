import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Time from "../Utils/Time";
import { Link } from "react-router-dom";
import { addSAGAProfileAnswerQuestion } from "../Redux/actions/actionCreator";

export default function RightColumn() {
  const user = useSelector((state) => state.user);
  const prof = useSelector((state) => state.prof);

  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      dispatch(
        addSAGAProfileAnswerQuestion(process.env.REACT_APP_PROFILE + user._id)
      );
    }
  }, [dispatch, user]);

  return (
    <div>
      <ul className="divide-y divide-gray-200">
        {prof?.answers.map((answer) => (
          <li key={answer._id} className="py-4">
            <div className="flex space-x-3">
              <img
                className="h-6 w-6 rounded-full"
                src={user.avatar_url}
                alt=""
              />
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <Link to={`/question/${answer.question._id}`}>
                    <h3 className="text-sm font-medium">
                      {" "}
                      Вопрос: {answer.question.title}{" "}
                    </h3>
                  </Link>
                  <p className="text-sm text-gray-500">
                    {" "}
                    <Time time={answer.date} />
                  </p>
                </div>
                <p className="text-sm text-gray-500">Ответ: {answer.comment}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
