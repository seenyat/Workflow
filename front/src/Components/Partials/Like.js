import { HeartIcon } from "@heroicons/react/outline";
import React from "react";

export default function Like({ like, likeCount }) {
  return (
    <div
      onClick={like}
      className="flex hover:text-red-500 text-gray-300 p-1 rounded-md  cursor-pointer hover:bg-red-100 items-center space-x-2"
    >
      <HeartIcon className="w-5 h-5" />
      <div className="pr-1 text-xl">{likeCount > 0 && likeCount}</div>
    </div>
  );
}
