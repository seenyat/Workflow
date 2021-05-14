import "./App.css";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { sagaLoadQuestions } from "./Redux/actions/actionCreator";
// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import {
//   CogIcon,
//   CollectionIcon,
//   HomeIcon,
//   MenuAlt2Icon,
//   PhotographIcon,
//   PlusIcon,
//   UserIcon,
//   PlayIcon,
//   ViewGridIcon,
//   XIcon,
// } from "@heroicons/react/outline";
import Navigation from "./Views/Navigation";

import Content from "./Views/Content";
import { useEffect, useState } from "react";
// import Question from "./Components/Question/Question";
import classNames from "./Utils/classNames";
import "./App.css";
import { useDispatch } from "react-redux";
import {
  sagaAuthCheck,
  sagaLoadQuestions,
} from "./Redux/actions/actionCreator";

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Sign out", href: "#" },
];
function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sagaLoadQuestions("http://localhost:4000/allquestions"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(sagaAuthCheck("http://localhost:4000/"));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="h-screen bg-gray-50 flex overflow-hidden">
        <Navigation
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          userNavigation={userNavigation}
          classNames={classNames}
        />
        <Content
          classNames
          userNavigation={userNavigation}
          mobileMenuOpen
          setMobileMenuOpen
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
