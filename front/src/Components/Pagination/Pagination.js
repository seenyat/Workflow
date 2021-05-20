import { Link } from "react-router-dom";
export default function Pagination({ setPage, pageCount, page }) {
  let arr = [];
  let count = Math.ceil(pageCount / 5);
  for (let i = 0; i < count; i++) {
    arr.push(i);
  }

  return count > 1 && arr ? (
    <div className="bg-white dark:bg-gray-600 px-4 py-3 flex items-center justify-between border-t dark:border-gray-500 dark:text-white text-gray-700 border-gray-200 sm:px-6">
      <div className=" flex flex-1 flex-col space-y-2 items-center justify-between">
        <div>
          <p className="text-sm ">
            <span className="font-medium">{page * 5 + 1}</span> —{" "}
            <span className="font-medium">
              {page * 5 + 5 > pageCount ? pageCount : page * 5 + 5}
            </span>{" "}
            из <span className="font-medium">{pageCount}</span>
          </p>
        </div>
        <div>
          <nav
            className="relative overflow-hidden border border-indigo-500 dark:border-gray-800 border-opacity-25 z-0 inline-flex rounded-md divide-x dark:divide-gray-500  -space-x-px"
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
                    ? "bg-indigo-600 dark:bg-blue-900 cursor-default text-white"
                    : "hover:bg-indigo-200 bg-opacity-20 dark:hover:bg-gray-800 dark:text-white text-black"
                } bg-indigo-300  transition  relative inline-flex items-center px-4 py-2  border-opacity-25 text-sm font-medium`}
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
