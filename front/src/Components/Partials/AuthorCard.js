import React from "react";

export default function AuthorCard({ author }) {
  return (
    <div className="flex items-center space-x-2">
      <img
        className="inline-block h-8 w-8 rounded-md"
        src={author.avatar_url}
        alt=""
      />
      <div>{author.name}</div>
    </div>
  );
}
