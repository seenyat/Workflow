import Time from "../../Utils/Time";
import { Link } from "react-router-dom";
import Output from "editorjs-react-renderer";

function ProfileQuestions({ item }) {
  return (
    <li key={item._id} className="">
      <div className="flex">
        <div className="flex-1 px-5 w-full ">
          <Link
            className="flex px-2 py-2 my-1 transition hover:bg-gray-200 dark:hover:bg-gray-600  rounded flex-col overflow-hidden w-full max-w-full"
            to={`/question/${item._id}`}
          >
            <div className="flex py-1 items-center space-x-2 text-xs text-gray-400">
              <Time time={item.date} />{" "}
              <div className="flex space-x-1">
                <img
                  className="h-4 w-4 rounded-full"
                  src={item.author.avatar_url}
                  alt=""
                />
                <div>{item.author.name}</div>
              </div>
            </div>
            <div className="">
              <div className="flex text-md overflow-hidden max-w-full font-medium">
                {item.title}
              </div>
            </div>
            <div className="flex text-sm text-gray-500">{item.body}</div>
          </Link>
        </div>
      </div>
    </li>
  );
}

export default ProfileQuestions;
