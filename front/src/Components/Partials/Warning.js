import { UserIcon } from "@heroicons/react/outline";
import React from "react";

export default function Warning() {
  return (
    <div className="flex items-center bg-red-100 text-gray-700 rounded-md p-5 text-xl my-5">
      <UserIcon className="h-8 w-8 text-gray-500 opacity-50 mr-3" /> Для ответа
      присоеденитесь к сообществу Workflow
    </div>
  );
}
