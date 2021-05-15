import { HeartIcon } from "@heroicons/react/outline";
import React from "react";

export default function Like({ like, likeCount }) {
  return (
    <div
      onClick={like}
      className="flex  hover:text-red-500 text-gray-300 p-1 rounded-md  cursor-pointer hover:bg-red-100 items-center "
    >
      <HeartIcon className="w-5 h-5" />
      <div className={`pl-1 ${likeCount > 0 ? "" : "hidden"} font-mono`}>
        {likeCount}
      </div>
    </div>
  );
}
