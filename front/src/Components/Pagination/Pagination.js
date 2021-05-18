/* This example requires Tailwind CSS v2.0+ */
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Pagination({ page, questions, pageCount, pageNumber }) {
  let arr = [];
  let count = Math.ceil(pageCount / 5);
  for (let i = 0; i < count; i++) {
    arr.push(i);
  }

  return arr ? (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden"></div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{pageNumber * 5 + 1}</span> to{" "}
            <span className="font-medium">
              {pageNumber * 5 + 5 > pageCount
                ? pageCount
                : pageNumber * 5 + 5}
            </span>{" "}
            of <span className="font-medium">{pageCount}</span> results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            {arr.map((el) => (
              <Link
                key={el}
                onClick={() => {
                  page(el);
                }}
                aria-current="page"
                className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
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
