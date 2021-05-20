import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Time from "../Utils/Time";
import Output from "editorjs-react-renderer";
import { Link } from "react-router-dom";

export default function RightColumn() {
  const user = useSelector((state) => state.user);
  let answersList = useSelector((state) => state.answers);

  const [answers, setAnswers] = useState(answersList);
  useEffect(() => {
    console.log(user, answersList);
    if (user && answersList) {
      setAnswers(
        [...answersList]
          .filter((el) => {
            return el.question.author === user._id;
          })
          .sort((a, b) => new Date(b.date) - new Date(a.date))
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answersList, user]);

  return user ? (
    <div>
      <ul className="divide-y  overflow-hidden divide-gray-200 dark:divide-gray-800">
        {answers?.map((answer) => (
          <li key={answer._id} className="">
            <div className="flex space-x-3">
              <div className="flex-1 px-2 w-full ">
                <Link
                  className="flex py-2 my-1 dark:hover:bg-gray-600 hover:bg-gray-200 px-3 rounded flex-col overflow-hidden w-full max-w-full"
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
                    <div className="flex text-md overflow-hidden  font-medium">
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
