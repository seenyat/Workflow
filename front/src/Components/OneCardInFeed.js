import { Link } from "react-router-dom";

export default function OneCardInFeed({ question }) {
  return (
    <Link to={`/question/${question._id}`} className=" cardForCss mb-20  ">
      <div className="  bg-white p-3 m-3 min-h-12 flex-col mt-12 mb-12 ">
        <div className=" cardtitle px-4 py-5 sm:px-6 text-center text-xl font-bold mb-12">
          <p>{question.title}</p>
        </div>
        <div className="px-4 py-5 sm:p-6 ">
          <p>{question.body}</p>
        </div>
        <div className=" cardtitle px-4 py-5 sm:p-3 ">
          <p>Автор: {question.author}</p>
        </div>
      </div>
    </Link>
  );
}
