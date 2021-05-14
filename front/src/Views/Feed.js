import React from "react";
import { useSelector } from "react-redux";
import OneCardInFeed from "../Components/OneCardInFeed";
import FormQuestion from "../Components/Question/FormQuestion";

// import {
//   sagaAuthCheck,
//   sagaLoadQuestions,
// } from "../Redux/actions/actionCreator";

export default function Feed() {
  const { questions } = useSelector((state) => state);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(sagaLoadQuestions("http://localhost:4000/allquestions"));
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(sagaAuthCheck("http://localhost:4000/"));
  // }, [dispatch]);

  return questions ? (
    <div className=" overflow-scroll flex flex-col m-3 items-center ">
      <div className="addQueDiv">
        <FormQuestion />
      </div>
      <div className="buttonsPanel">
        <button className="filterButtons">
          <img
            width="150"
            src="https://www.laformationchezvous.eu/public/images/logos/css3.png"
            alt=" "
          />
        </button>

        <button className="filterButtons">
          {/* <img
            width="150"
            src="https://www.brutka.com/img/javascript-logo.png"
            alt=" " */}
          {/* /> */}
          <i className="fab w-32 h-32 text-blue-700 fa-10x fa-css3-alt"></i>
        </button>

        <button>
          <img
            width="150"
            src="https://www.smactechlabs.com/wp-content/uploads/2020/01/React.png"
            alt=" "
          />
        </button>

        <button>
          <img width="150" src="" alt=" " />
        </button>

        <button>
          <img width="150" src="" alt=" " />
        </button>
      </div>
      <div className=" w-1/2 ">
        {questions.map((question) => (
          <OneCardInFeed key={question._id} question={question} />
        ))}
      </div>
    </div>
  ) : null;
}
