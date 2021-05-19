import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <img
        className="text-indigo-100 hover:bg-gray-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium"
        src="/workflow_logo_1.png"
        alt="Workflow"
      />
    </Link>
  );
}
