import { Link } from "react-router-dom";

export default function OneCardInFeed({ question }) {
  return (
    <Link to={`/question/${question._id}`} className="w-3/6">
      <div className="bg-white p-3 m-3 min-h-12 border flex-col shadow rounded-lg divide-y divide-gray-200 mt-6 mb-6 ">
        <div className="px-4 py-5 sm:px-6 border text-center text-xl font-bold ">
          <p>{question.title}</p>
        </div>
        <div className="px-4 py-5 sm:p-6 ">
          <p>{question.body}</p>
        </div>
      </div>
    </Link>
  );
}
