import { CheckCircleIcon, CheckIcon } from "@heroicons/react/outline";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sagaToggleTodo } from "../../Redux/actions/actionCreator";
import fetchCreator from "../../Redux/fetchCreator";

export default function Workflow({ todo }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {}, []);
  function addWorkflow() {
    fetch(process.env.REACT_APP_PROFILE_ADD_WORKFLOW, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo, userID: user._id }),
    });
  }
  return (
    <div className="flex px-4 max-w-2xl bg-white py-2 shadow rounded-md flex-col">
      <div className="flex">
        <div className="text-gray-300 select-none ml-1 font-mono text-sm">
          План действий
        </div>
      </div>
      {todo.stages.map((el, stageI) => {
        return (
          <>
            <div className=" flex w-max items-center font-bold border-b mt-3 pr-5 pl-1 border-gray-100 text-2xl">
              <div className="w-4 h-4 rounded-full border-4 mr-2 items-center text-gray-400"></div>
              {el.title} {}
            </div>
            {el.todos.map((todoItem, i) => (
              <div
                onClick={() => {
                  dispatch(
                    sagaToggleTodo(
                      fetchCreator(process.env.REACT_APP_TOGGLE_TODO, "PUT", {
                        id: todo.id,
                        index: i,
                        stage: stageI,
                        userId: user._id,
                      })
                    )
                  );
                }}
                className="flex transition hover:shadow select-none cursor-pointer rounded mt-2 py-1 ml-1 items-center"
              >
                <div className={`w-9  h-9 mx-2`}>
                  <CheckIcon
                    className={`transition ${
                      todoItem.checked
                        ? " text-black font-bold"
                        : "text-gray-100"
                    }`}
                  />
                </div>

                <div className=" ">{todoItem.value}</div>
              </div>
            ))}
          </>
        );
      })}
      <div className="actions"></div>
    </div>
  );
}
