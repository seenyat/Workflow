import { MailOpenIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { sagaLoadAnswers } from "../../Redux/actions/actionCreator";
import { nanoid } from "nanoid";

export default function Workflow({ todo, id, qId }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  function addWorkflow() {
    fetch(process.env.REACT_APP_PROFILE_ADD_WORKFLOW, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo: todo[0], userID: user._id }),
    }).then((data) => {
      data.json().then((user) => {
        console.log(user);
        dispatch({ type: "TOGGLE_TODO", payload: user.workflows });
      });
    });
  }
  function checkIfTodoAdded(user, id) {
    let exists = false;
    user.workflows.forEach((w, i) => {
      if (w.id === id) {
        exists = true;
      }
    });
    return exists;
  }
  return (
    <div className="flex px-4 py-2 shadow rounded-md flex-col">
      <div className="flex">
        <div className="text-indigo-400 flex space-x-1 items-center cursor-pointer font-bold hover:text-indigo-600 select-none ml-1 font-mono text-sm">
          {user && !checkIfTodoAdded(user, todo[0].id) ? (
            <>
              <div className="text-gray-300 select-none ml-1 font-mono text-sm">
                План действий
              </div>
              <div onClick={addWorkflow}>Добавить в Workflow</div>
            </>
          ) : (
            <div className="text-green-400 opacity-50 text-md flex items-center">
              <MailOpenIcon className="relative  w-5 h-5 mr-0.5" />
              <div>Сохранено в Workflows</div>
            </div>
          )}
        </div>
      </div>
      {todo[0].stages.map((el, i) => {
        return (
          <>
            {/* <div> */}
            <div
              key={nanoid()}
              className=" flex w-max items-center font-bold border-b mt-3 pr-5 pl-1 border-gray-100 text-2xl"
            >
              <div className="w-4 h-4 rounded-full border-4 mr-2 items-center text-gray-400"></div>
              {el.title}
            </div>
            {el.todos.map((todo, i) => (
              <div key={nanoid()} className="flex  pt-2 ml-3 items-center">
                <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                <div className="ml-3 ">{todo.value}</div>
              </div>
            ))}
            {/* </div> */}
          </>
        );
      })}
      <div className="actions"></div>
    </div>
  );
}
