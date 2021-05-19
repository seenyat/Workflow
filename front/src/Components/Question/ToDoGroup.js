import { nanoid } from "nanoid";

export default function ToDoGroup({ Header, setTodo, todo, todoList, ind }) {
  function expandTodoGroup(e) {
    if (e.key === "Enter") {
      setTodo({
        ...todo,
        stages: todo.stages.map((el, i) => {
          if (i !== ind) {
            return el;
          }
          console.log(el);
          return el.title === Header
            ? { ...el, todos: [...el.todos, { value: "", checked: false }] }
            : el;
        }),
      });
    }
  }
  return (
    <div className="shadow rounded-xl overflow-hidden my-2 w-full">
      <input
        value={Header}
        onChange={(e) => {
          setTodo({
            ...todo,
            stages: todo.stages.map((el, i) => {
              if (i !== ind) {
                return el;
              }
              return { ...el, title: e.target.value };
            }),
          });
        }}
        onKeyPress={expandTodoGroup}
        className="px-3 focus:bg-gray-50 transition dark:bg-gray-700 dark:focus:bg-gray-900 focus:ring-indigo-500 font-bold text-2xl border-gray-300  w-full  py-2"
      />
      {todoList.map((el, todoInd) => (
        <input
          key={nanoid()}
          placeholder={todoInd + 1 + "."}
          autoFocus
          value={el.value}
          onChange={(e) => {
            setTodo({
              ...todo,
              stages: todo.stages.map((todoGroup, i) => {
                if (i !== ind) {
                  return todoGroup;
                }
                return {
                  ...todoGroup,
                  todos: todoGroup.todos.map((todoItem, todoGroupInd) => {
                    if (todoInd !== todoGroupInd) {
                      return todoItem;
                    }
                    return { ...todoItem, value: e.target.value };
                  }),
                };
              }),
            });
          }}
          onKeyPress={expandTodoGroup}
          className="outline-none focus:bg-gray-50 dark:bg-gray-700 transition dark:focus:bg-gray-900 px-3 border-t dark:border-gray-600 border-gray-100 w-full  py-2"
        />
      ))}
    </div>
  );
}
