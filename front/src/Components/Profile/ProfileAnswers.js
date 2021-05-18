import React from "react";
import Time from "../../Utils/Time";
import { Link } from "react-router-dom";

function ProfileAnswers({ answer }) {
  return (
    <div>
      <li key={answer._id}>
        <div className="flex space-x-3">
          <div className="flex-shrink-0"></div>
          <div>
            <div className="text-sm">
              <Link
                to={`/question/${answer.question._id}`}
                className="font-medium text-gray-900"
              >
                {/* {answer.comment} */}
              </Link>
            </div>

            <div className="mt-2 text-sm space-x-2">
              <span className="text-gray-500 font-medium">
                <Time time={answer.date} />
              </span>{" "}
              <span className="text-gray-500 font-medium">&middot;</span>{" "}
            </div>
          </div>
        </div>
      </li>
    </div>
  );
}

export default ProfileAnswers;
