import { CheckIcon } from "@heroicons/react/outline";

import { TrashIcon } from "@heroicons/react/solid";


import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  sagaDeleteToDo,
  sagaToggleTodo,
} from "../../Redux/actions/actionCreator";
import fetchCreator from "../../Redux/fetchCreator";
import Modalforaccept from "../../Utils/Modalforaccept";

export default function Workflow({ todo }) {
  const [modalforaccept, setModalforaccept] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {}, []);

  const deleteThisToDo = () => {
    dispatch(
      sagaDeleteToDo(
        fetchCreator(process.env.REACT_APP_PROFILE_ADD_WORKFLOW, "DELETE", {
          id: todo.id,
          userId: user._id,
        })
      )
    );
  };

  return (
    <div className="flex px-4 max-w-2xl bg-white dark:bg-gray-800 dark:text-white py-2 shadow rounded-md flex-col">
      <div className="flex justify-between">
        <div className="text-gray-300 select-none ml-1 font-mono text-sm">
          План действий
        </div>
        <div
          onClick={() => setModalforaccept(true)}
          className="p-1 cursor-pointer transition mr-1 hover:bg-opacity-50 dark:hover:bg-opacity-30 hover:bg-red-100 hover:text-red-300 text-gray-300  flex overflow-hidden rounded"
        >
          <TrashIcon className=" w-5 h-5      fa-trash-alt " />
        </div>
{modalforaccept && (
        <Modalforaccept
          clear={deleteThisToDo}
          setModalforaccept={setModalforaccept}
        />
      )}
      </div>
      {todo.stages.map((el, stageI) => {
        return (
          <>
            <div className=" flex w-max items-center font-bold border-b mt-3 pr-5 pl-1 dark:border-gray-700 border-gray-100 text-2xl">
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
                className="flex transition hover:shadow hover:bg-gray-300 hover:bg-opacity-50 dark:hover:bg-gray-900 select-none cursor-pointer rounded mt-2 py-1 ml-1 items-center"
              >
                <div className={`w-9  h-9 mx-2`}>
                  <CheckIcon
                    className={`transition ${
                      todoItem.checked
                        ? " text-black  dark:text-white font-bold"
                        : "text-gray-300 dark:text-gray-700"
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
    </>
  );
}
