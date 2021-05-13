import { Link } from "react-router-dom";

export default function OneCardInFeed({ question }) {
  return (
    <Link
      to={`/question/${question._id}`}
      className="w-1/2 shadow-xl mb-20 bg-gray-50 border "
    >
      <div className="bg-gray-50 p-3 m-3 min-h-12 flex-col mt-12 mb-12 ">
        <div className="px-4 py-5 sm:px-6 text-center text-xl font-bold shadow-xl mb-12">
          <p>{question.title}</p>
        </div>
        <div className="px-4 py-5 sm:p-6 ">
          <p>{question.body}</p>
        </div>
        <div className="px-4 py-5 sm:p-6 ">
          <p>Автор вопроса: {question.author}</p>
        </div>
      </div>
    </Link>
  );
}
