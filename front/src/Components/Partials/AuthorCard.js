import userEvent from "@testing-library/user-event";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function AuthorCard({ author }) {
  const user = useSelector((state) => state.user);
  return user && author ? (
    <Link
      className="flex hover:bg-indigo-50 transition rounded py-1 px-1 items-center space-x-2"
      to={`/profile/${author._id == user._id ? "" : author._id}`}
    >
      <img className=" h-6 w-6 rounded-md" src={author.avatar_url} alt="" />
      <div>{author.name}</div>
    </Link>
  ) : (
    <Link className="flex items-center space-x-2" to={`/profile/${author._id}`}>
      {" "}
      <img className="h-6 w-6 rounded-md" src={author.avatar_url} alt="" />
      <div>{author.name}</div>
    </Link>
  );
}
