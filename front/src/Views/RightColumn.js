import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Time from "../Utils/Time";
import { Link } from "react-router-dom";



export default function RightColumn() {
  const user = useSelector((state) => state.user);
  const [prof, setProf] = useState();
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:4000/profile/${user._id}`, {
        method: "GET",
        credentials: "include",
      }).then((data) =>
        data.json().then((profile) => {
          setProf(profile);
        })
      );
    }
  }, [user]);

  return (
    <div>
      <ul className="divide-y divide-gray-200">
       
        {prof?.answers.map((answer) => (
          <li key={answer._id} className="py-4">
            <div className="flex space-x-3">
          <img className="h-6 w-6 rounded-full" src={user.avatar_url} alt="" />
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <Link to={`/question/${answer.question._id}`}>
                    <h3 className="text-sm font-medium">  Вопрос: {answer.question.title} </h3>
                  </Link>
                  <p className="text-sm text-gray-500">
                    {" "}
                    <Time time={answer.date} />
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                Ответ: {answer.comment}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
