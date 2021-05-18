import { UserIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import WorkflowTodo from "../../Components/Question/WorkflowTodo";

export default function Workflows() {
  const { user } = useSelector((state) => state);

  const loading = useSelector((state) => state.loading);

  const [workflows, setWorkflows] = useState(null);
  useEffect(() => {
    if (user) {
      setWorkflows(user.workflows);
    }
  }, [user]);
  return loading ? (
    <div className="border-8 mt-24 mx-auto rounded-full w-24 h-24 border-gray-500 border-dashed animate-spin"></div>
  ) : workflows ? (
    <div className="w-full overflow-auto  px-5 py-7 flex flex-col space-y-5">
      {workflows.map((w) => {
        return <WorkflowTodo key={w.id} todo={w} />;
      })}
    </div>
  ) : (
    <div className="flex items-center bg-red-100 text-gray-700 rounded-md p-5 text-xl my-5">
      <UserIcon className="h-8 w-8 text-gray-500 opacity-50 mr-3" /> Для
      просмотра записей присоеденитесь к сообществу Workflow{" "}
      <Link className="text-black  p-3 ml-6" to="/login">
        <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Авторизоваться
        </button>
      </Link>
    </div>
  );
}
