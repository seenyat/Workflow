import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Pagination({ setPage, pageCount, page }) {
  let arr = [];
  let count = Math.ceil(pageCount / 5);
  for (let i = 0; i < count; i++) {
    arr.push(i);
  }

  return count > 2 && arr ? (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex flex-col justify-between sm:hidden"></div>
      <div className="hidden sm:flex-1 sm:flex flex-col space-y-2 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            <span className="font-medium">{page * 5 + 1}</span> —{" "}
            <span className="font-medium">
              {page * 5 + 5 > pageCount ? pageCount : page * 5 + 5}
            </span>{" "}
            из <span className="font-medium">{pageCount}</span>
          </p>
        </div>
        <div>
          <nav
            className="relative overflow-hidden border border-indigo-500 border-opacity-25 z-0 inline-flex rounded-md divide-x -space-x-px"
            aria-label="Pagination"
          >
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            {arr.map((el, i) => (
              <Link
                key={el}
                onClick={() => {
                  setPage(el);
                }}
                aria-current="page"
                className={`z-10 ${
                  page === i
                    ? "bg-indigo-600 cursor-default text-white"
                    : "hover:bg-indigo-200  text-black"
                } bg-indigo-50  transition  relative inline-flex items-center px-4 py-2  border-opacity-25 text-sm font-medium`}
              >
                {el + 1}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  ) : null;
}
