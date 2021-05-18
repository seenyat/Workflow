import { UserIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    </>
  );
}
