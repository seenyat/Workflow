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
        className="px-3 outline-none focus:bg-gray-200 transition dark:bg-gray-700 dark:focus:bg-gray-900  font-bold text-2xl border-gray-300  w-full py-2"
      />
      {todoList.map((el, todoInd) => (
        <input
          key={ind + "" + todoInd}
          autoFocus
          placeholder={todoInd + 1 + "."}
          value={el.value}
          onChange={(e) => {
            e.target.style.height = "inherit";
            e.target.style.height = `${e.target.scrollHeight}px`;
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
          className="outline-none py-3 focus:bg-gray-200 resize-none dark:bg-gray-700  transition dark:focus:bg-gray-900 px-3 border-t dark:border-gray-600 border-gray-100 w-full "
        />
      ))}
    </div>
  );
}
