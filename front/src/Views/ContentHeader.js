import { Menu, Transition } from "@headlessui/react";
import { MenuAlt2Icon, PlusIcon, SearchIcon } from "@heroicons/react/outline";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalForm from "../Components/Question/ModalForm";
import {
  changeHeaderModalStatus,
  logout,
} from "../Redux/actions/actionCreator";
import { useHistory } from "react-router-dom";
import classNames from "../Utils/classNames";
import { Link } from "react-router-dom";

export default function ContentHeader({ setMobileMenuOpen }) {
  const modalStatus = useSelector((state) => state.modals[1].status);
  const auth = useSelector((state) => state.auth);
  let history = useHistory();
  const user = useSelector((state) => state.user);
  const [userNavigation] = useState([
    { id: 1, name: "Профиль", href: "/profile" },
    { id: 2, name: "Выйти", href: "" },
  ]);
  const dispatch = useDispatch();

  return (
    <>
      {modalStatus && <ModalForm />}
      <header className="w-full">
        <div className="relative z-10 flex-shrink-0 h-16 bg-white dark:bg-gray-700 border-b dark:border-gray-600 border-gray-200 shadow-sm flex">
          <button
            type="button"
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 flex justify-between px-4 sm:px-6">
            <div className="flex-1 flex">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="w-full flex md:ml-0"
                action="#"
                method="GET"
              >
                <label htmlFor="search_field" className="sr-only">
                  Search all files
                </label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                    <SearchIcon
                      className="flex-shrink-0 h-5 w-5"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    name="search_field"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        history.push(`/search/${e.target.value}`);
                      }
                    }}
                    id="search_field"
                    className="h-full w-full dark:bg-gray-700 dark:text-white border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </form>
            </div>
            <div className="ml-2 flex items-center  space-x-4 sm:ml-6 sm:space-x-6">
              {/* Profile dropdown */}
              {auth && (
                <>
                  <Menu as="div" className="relative  flex-shrink-0">
                    {({ open }) => (
                      <>
                        <div>
                          <Menu.Button className="bg-white dark:bg-gray-600 dark:text-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={
                                user
                                  ? user.avatar_url
                                  : "http://media.fatalgame.com/hero/0k/59/ver_ico.jpg"
                              }
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            static
                            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none"
                          >
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <Link
                                    onClick={() => {
                                      console.log(item);
                                      if (item.id === 2) {
                                        window.open(
                                          process.env.REACT_APP_PROFILE_LOGOUT,
                                          "_self"
                                        );
                                        dispatch(logout());
                                      }
                                    }}
                                    to={item.id !== 2 && item.href}
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 dark:bg-gray-900"
                                        : "",
                                      "block  dark:text-white px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                  <button
                    type="button"
                    onClick={() => dispatch(changeHeaderModalStatus(true))}
                    className="flex bg-gray-600 p-1 rounded-full items-center justify-center text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <PlusIcon className="h-6 w-6" aria-hidden="true" />
                    <span className="sr-only">Add file</span>
                  </button>{" "}
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
