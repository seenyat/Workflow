// Для линка на эту страницу должен был родительский компонент, из которого происходит передача ID в адрес ссылки,
// Через useParams будет доставаться айди и забирать параметры из стэйта, а также направлять инфу на бэк

import { useState } from "react";
import { useSelector } from "react-redux";
import QuestionBody from "./QuestionBody";

export default function Question() {
  const id = "609c475b34dda4cd93eee2d2";

  const question = useSelector((state) =>
    state.questions.find((que) => que._id === id)
  );

  const [editStatus, setEditStatus] = useState(false);

  return question ? (
    <div>
      <QuestionBody info={question} />
      {!editStatus && (
        <button
          onClick={() => setEditStatus(true)}
          className="flex justify-center items-center p-3 h-24 w-24 border border-transparent rounded-full text-6xl shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          +
        </button>
      )}

      {editStatus && (
        <div>
          <p>TODOSHKA POLETELA SUDAAAAA</p>
          <button
            className="bg-indigo-600"
            onClick={() => setEditStatus(false)}
          >
            SAVE TODOSHKU
          </button>
        </div>
      )}
    </div>
  ) : null;
}
