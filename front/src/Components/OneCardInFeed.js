import { Link } from "react-router-dom";

import AuthorCard from "./Partials/AuthorCard";

// import useTimeAgo from "@dh-react-hooks/use-timeago";

export default function OneCardInFeed({ question }) {
  const localDate = new Date(question.date);

  // const timeAgo = useTimeAgo(localDate, {
  //   interval: 60000,
  // });

  return (
    <Link
      to={`/question/${question._id}`}
      className="max-w-1/2 cardForCss mb-20 w-full bg-white m-10 shadow-md rounded-md"
    >
      <div className="  bg-white m-3 min-h-12 flex-col mt-12 mb-12 ">
        <div className=" cardtitle px-4 py-5 sm:px-6 text-center text-xl font-bold mb-12">
          <p>{question.title}</p>
        </div>
        <div className="px-4 py-5 sm:p-6 ">
          <p>{question.body}</p>
        </div>
        <div className=" cardtitle px-4 py-5 sm:p-3 ">
          <AuthorCard author={question.author} />
        </div>
        <div className=" cardtitle px-4 py-5 sm:p-3 ">
          <p>Тематика: {question.theme}</p>
        </div>
        <div className="px-4 relative text-sm sm:p-6 w-max text-gray-400 right-2 top-2"></div>
      </div>
    </Link>
  );
}
