import { HeartIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import Workflow from "./Workflow";

export default function Answer({ item }) {
  const [author, setAuthor] = useState({});

  function getAuthorName() {
    fetch(`http://localhost:4000/profile/${item.author}`).then((data) => {
      data.json().then((user) => {
        setAuthor(user);
      });
    });
  }
  getAuthorName();
  return (
    <li
      key={item._id}
      className="bg-white relative shadow overflow-hidden rounded-md px-6 py-4"
    >
      {author.user && (
        <div className="flex items-center mb-3 space-x-3">
          <img
            src={author.user.avatar_url}
            alt="avatar"
            className="w-8 h-8 shadow rounded-md text-gray-600"
          />
          <div className="text-gray-600">{author.user.name}</div>
        </div>
      )}
      <HeartIcon className="hover:text-red-500 cursor-pointer absolute w-6 text-gray-300 h-6 right-2 top-2" />
      <h1 className="font-bold text-2xl">{item.comment}</h1>
      <Workflow todo={item.workflows} />
    </li>
  );
}
