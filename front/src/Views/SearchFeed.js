import { useSelector } from "react-redux";
import { useParams } from "react-router";
import FormQuestion from "../Components/Question/FormQuestion";
import QuestionBody from "../Components/Question/QuestionBody";

export default function SearchFeed() {
  const user = useSelector((state) => state.user);
  const { search } = useParams();
  const questions = useSelector((state) => state.questions).filter((el) =>
    el.title.includes(search)
  );

  return (
    <>
      <div className="text-3xl text-center my-6">
        Результаты поиска по запросу <b>{search}</b>
      </div>
      <div className="px-10 overflow-auto relative pb-10 pt-2 h-full flex flex-col  items-center ">
        <div className="w-full md:max-w-4xl flex flex-col space-y-5">
          {questions.length > 0 ? (
            questions.map((question) => (
              <QuestionBody
                link={`/question/${question._id}`}
                hideEdit={true}
                question={question}
              />
            ))
          ) : (
            <div>Ничего не найдено</div>
          )}
        </div>
      </div>
    </>
  );
}
