import React from "react";
import { Link } from "react-router-dom";

export default function QuestionBody({ info }) {
  return (
    <Link to="/" >
    <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
      <div className="px-4 py-5 sm:px-6">
        <p>{info.title}</p>
        <p>{info.body}</p>
      </div>
      <div className="px-4 py-5 sm:p-6"></div>
    </div>
    </Link>
  );
}
