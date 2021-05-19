import { ExclamationCircleIcon } from "@heroicons/react/outline";

export default function Error404() {
  return (
    <div className="flex items-center bg-red-100 text-gray-700 rounded-md p-5 text-xl my-5">
      <ExclamationCircleIcon className="h-8 w-8 text-gray-500 opacity-50 mr-3" />{" "}
      Ошибка. Вопрос не найден.
    </div>
  );
}
