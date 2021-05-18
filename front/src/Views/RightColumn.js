import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Time from "../Utils/Time";
import Output from "editorjs-react-renderer";

import { Link } from "react-router-dom";
import { addSAGAProfileAnswerQuestion } from "../Redux/actions/actionCreator";

export default function RightColumn() {
  const user = useSelector((state) => state.user);
  // const prof = useSelector((state) => state.prof);
  let answers = useSelector((state) => state.answers);
  useEffect(() => {
    if (user && answers) {
      answers = answers.filter((el) => {
        return el.author._id === user._id;
      });
    }
  }, [answers]);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (user) {
  //     dispatch(
  //       addSAGAProfileAnswerQuestion(process.env.REACT_APP_PROFILE + user._id)
  //     );
  //   }
  // }, [dispatch, user]);

  return user ? (
    <div>
      <ul className="divide-y  divide-gray-200">
        {answers?.map((answer) => (
          <li key={answer._id} className="">
            <div className="flex space-x-3">
              <div className="flex-1 w-full ">
                <Link
                  className="flex mx-1 py-2 my-1 hover:bg-gray-200 px-5 rounded flex-col overflow-hidden w-full max-w-full"
                  to={`/question/${answer.question._id}`}
                >
                  <div className="flex py-1 items-center space-x-2 text-xs text-gray-400">
                    <Time time={answer.date} />{" "}
                    <div className="flex space-x-1">
                      <img
                        className="h-4 w-4 rounded-full"
                        src={answer.author.avatar_url}
                        alt=""
                      />
                      <div>{answer.author.name}</div>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex text-md overflow-hidden max-w-full font-medium">
                      {answer.question.title}
                    </div>
                  </div>
                  <div className="flex text-sm -my-1 text-gray-500">
                    <Output
                      data={{
                        ...answer.comment,
                        blocks:
                          answer.comment.blocks.length > 0
                            ? [answer.comment.blocks[0]]
                            : [],
                      }}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
}
