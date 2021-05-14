import { useDispatch, useSelector } from "react-redux";
import { changeFeedModalStatus } from "../../Redux/actions/actionCreator";
import ModalForm from "./ModalForm";

export default function FormQuestion() {
  const dispatch = useDispatch();

  const modalStatus = useSelector((state) => state.modals[0].status);
  // console.log(modalStatus);

  // const [formStatus, editFormStatus] = useState(false);
  // const [open, setOpen] = useState(true);

  // const postNewQuestion = (e) => {
  //   e.preventDefault();
  //   const title = e.target.questionTitle.value;
  //   const body = e.target.questionBody.value;
  //   dispatch(
  //     sagaPostQuestion(
  //       fetchCreator("http://localhost:4000/question", "POST", { title, body })
  //     )
  //   );
  //   editFormStatus(false);
  // };

  return (
    <>
      {modalStatus && <ModalForm />}
      <button
        type="button"
        onClick={() => {
          dispatch(changeFeedModalStatus(true));
        }}
        className="inline-flex w-72 m-6 mb-20 justify-center px-6 py-3 border border-transparent font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Задать вопрос
      </button>
    </>
  );
}
