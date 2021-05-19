import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import classNames from "../../Utils/classNames";

export default function MenuItem({ item, nav, setNav }) {
  return (
    <Link
      key={item.name}
      to={item.href}
      className={classNames(
        item.current
          ? "bg-gray-800 text-white"
          : "text-indigo-100 hover:bg-gray-800 dark:hover:bg-black hover:text-white",
        "group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium"
      )}
      onClick={(e) => {
        setNav(
          nav.map((el) => {
            return {
              ...el,
              current: el.name === item.name ? true : false,
            };
          })
        );
      }}
      aria-current={item.current ? "page" : undefined}
    >
      <item.icon
        className={classNames(
          item.current
            ? "text-white"
            : "text-indigo-300 group-hover:text-white",
          "h-6 w-6"
        )}
        aria-hidden="true"
      />
      <span className="mt-2">{item.name}</span>
    </Link>
  );
}
