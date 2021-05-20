import React, { useEffect } from "react";

export default function Login() {
  useEffect(() => {}, []);
  function logIn(e) {
    e.preventDefault();
    window.open(e.currentTarget.href, "_self");
  }
  return (
    <div className="min-h-screen overflow-auto px-12 py-24  dark:text-white dark:bg-gray-800 bg-gray-50 flex flex-col justify-center sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-max w-max py-6"
          src="/workflow_logo.png"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold dark:text-white text-gray-900">
          Войдите в Ваш аккаунт
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white rounded dark:bg-gray-600 dark:text-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="">
            <div className=" grid  gap-3">
              <div>
                <a
                  href={process.env.REACT_APP_PROFILE_LOGIN}
                  onClick={logIn}
                  className="w-full flex items-center justify-center py-3 px-5 border dark:hover:bg-gray-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white border-gray-300 rounded-md shadow-sm bg-white text-xl font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="pr-4">Sign in with GitHub </span>
                  <svg
                    className="w-7 h-7"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
