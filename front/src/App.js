import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { sagaLoadQuestions } from "./Redux/actions/actionCreator";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  CogIcon,
  CollectionIcon,
  HomeIcon,
  MenuAlt2Icon,
  PhotographIcon,
  PlusIcon,
  UserIcon,
  PlayIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import Navigation from "./Views/Navigation";

import Content from "./Views/Content";
import { useState } from "react";
import Question from "./Components/Question/Question";
const sidebarNavigation = [
  { name: "Feed", href: "feed", icon: CollectionIcon, current: false },
  { name: "Latest", href: "latest", icon: ViewGridIcon, current: false },
  { name: "Profile", href: "profile", icon: UserIcon, current: true },
  { name: "About Us", href: "about", icon: PlayIcon, current: false },
];

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Sign out", href: "#" },
];
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sagaLoadQuestions("/allquestions"));
  }, [dispatch]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <BrowserRouter>
      <div className="h-screen bg-gray-50 flex overflow-hidden">
        <Navigation
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          sidebarNavigation={sidebarNavigation}
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

      <Route path="/questiontest">
        <Question />
      </Route>
    </BrowserRouter>
  );
}

export default App;
