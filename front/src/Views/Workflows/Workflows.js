import { ExclamationCircleIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import WorkflowTodo from "../../Components/Question/WorkflowTodo";

export default function Workflows() {
  const { user } = useSelector((state) => state);

  const [workflows, setWorkflows] = useState(null);
  useEffect(() => {
    if (user) {
      setWorkflows(user.workflows);
    }
  }, [user]);

  return (
    <>
      {!user && (
        <div className="border-8 mt-24 mx-auto rounded-full w-24 h-24 border-gray-500 border-dashed animate-spin"></div>
      )}
      {user && workflows && (
        <div className="w-full overflow-auto  px-5 py-7 flex flex-col space-y-5">
          {workflows.map((w) => {
            return <WorkflowTodo key={w.id} todo={w} />;
          })}
        </div>
      )}
      {user && workflows && workflows.length < 1 && (
        <div className="flex flex-col items-center ">
          <div className="flex items-center bg-red-100 w-full text-gray-700 justify-center rounded-md p-5 text-xl my-5">
            <ExclamationCircleIcon className="h-8 w-8 text-gray-500 opacity-50 mr-3" />{" "}
            На текущий момент ничего не добавлено
          </div>
        </div>
      )}
    </>
  );
}
