import { useRef, useState } from "react";
import EditorJs from "react-editor-js";
import { useDispatch, useSelector } from "react-redux";
import WorkflowAdd from "../Routes/WorkflowAdd";
import { nanoid } from "nanoid";
import { ADD_ANSWER } from "../../Redux/actions/actionTypes";
import { EDITOR_JS_TOOLS } from "../../Utils/editorTools";
import { XIcon } from "@heroicons/react/solid";

export default function CreateAnswer({ id, setCreateAnswer, authorId }) {
  const comment = useRef(null);
  const [todo, setTodo] = useState({
    comment: comment.value,
    stages: [{ title: "Этап 1", todos: [{ value: "", checked: false }] }],
    id: nanoid(),
  });
  const state = useSelector((state) => state.user);

  const dispatch = useDispatch();
  async function addAnswer(e) {
    e.preventDefault();
    const savedComment = await comment.current.save();

    fetch(process.env.REACT_APP_ANSWER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        workflows: todo,
        comment: savedComment,
        id: id,
        authorId: state._id,
        questionAuthor: authorId,
      }),
    }).then((e) => {
      e.json().then((answ) => dispatch({ type: ADD_ANSWER, payload: answ }));
    });
    setCreateAnswer(false);
  }
  return (
    <div className="my-3 relative max-w-full w-max">
      <form
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
        onSubmit={addAnswer}
        action="#"
        method="POST"
      >
        <div className="shadow  sm:rounded-md sm:overflow-hidden">
          <XIcon
            onClick={() => setCreateAnswer(false)}
            className="absolute w-10 h-10 right-2 top-2 text-gray-400 cursor-pointer hover:text-gray-700"
          />
          <div className="bg-white dark:bg-gray-700 dark:text-white  p-6 space-y-6 sm:p-6">
            <div>
              <h3 className="text-2xl mb-2 font-bold leading-6  dark:text-white text-gray-900">
                Добавить ответ
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                Распишите подробный план действий
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3">
                <div className="mt-1 prose lg:prose-xl shadow-md max-w-4xl text-left dark:text-white dark:bg-gray-800 rounded-md bg-gray-50 border-gray-300">
                  <EditorJs
                    tools={EDITOR_JS_TOOLS}
                    placeholder="Описание"
                    autofocus={true}
                    instanceRef={(instance) => (comment.current = instance)}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3">
                <div className="mt-1 max-w-3xl rounded-md shadow-md flex">
                  <WorkflowAdd todo={todo} setTodo={setTodo} />
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 text-right sm:px-6">
            <button
              type="submit"
              className="bg-indigo-600 dark:bg-opacity-50 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-md font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Отправить
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
