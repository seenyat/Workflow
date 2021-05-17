import { HeartIcon } from "@heroicons/react/outline";
import React from "react";
import { useSelector } from "react-redux";

export default function Like({ like, likeCount }) {
  const user = useSelector((state) => state.user);
  return (
    <div
      onClick={like}
      className={`flex  ${
        user && "hover:text-red-500 hover:bg-red-100 cursor-pointer"
      } text-gray-300 p-1 rounded-md    items-center `}
    >
      <HeartIcon className="w-5 h-5" />
      <div className={`pl-1 ${likeCount > 0 ? "" : "hidden"} font-mono`}>
        {likeCount}
      </div>
    </div>
  );
}
