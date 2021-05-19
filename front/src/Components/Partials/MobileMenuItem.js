import { Link } from "react-router-dom/cjs/react-router-dom.min";
import classNames from "../../Utils/classNames";

export default function MobileMenuItem({ item, setNav, nav }) {
  return (
    <Link
      key={item.name}
      to={item.href}
      className={classNames(
        item.current
          ? "bg-gray-800 text-white"
          : "text-indigo-100 hover:bg-gray-800 hover:text-white",
        "group py-2 px-3 rounded-md flex items-center text-sm font-medium"
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
          "mr-3 h-6 w-6"
        )}
        aria-hidden="true"
      />
      <span>{item.name}</span>
    </Link>
  );
}
