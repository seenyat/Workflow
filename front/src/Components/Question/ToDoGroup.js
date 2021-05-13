import React from "react";

export default function ToDoGroup({ Header }) {
  return (
    <div className="w-full space-y-3">
      <input
        value={Header}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
          }
        }}
        className="px-3 border-4 border-gray-300  w-full rounded-lg py-2"
      />
      <input
        placeholder="1."
        value=""
        onKeyPress={(e) => {
          if (e.key === "Enter") {
          }
        }}
        className="border px-3 border-gray-300 w-full rounded-lg py-2"
      />
    </div>
  );
}
