import { Route } from "react-router";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Viewpager from "../../Views/About";
import About from "../../Views/About";
import Latest from "../../Views/Latest";
import Login from "../../Views/Login";
import MainFeed from "../../Views/MainFeed";
import QuestionSingle from "../../Views/QuestionSingle";
import UserProfile from "../../Views/UserProfile";
import Workflows from "../../Views/Workflows/Workflows";
import UsersProfile from "../../Components/UsersProfile";
export default function ContentRouter() {
  console.log("router");
  return (
    <Switch>
      <Route exact path="/">
        <MainFeed />
      </Route>
      <Route path="/latest">
        <Latest />
      </Route>
      <Route path="/workflows">
        <Workflows />
      </Route>
      <Route path="/profile" exact>
        <UserProfile />
      </Route>
      <Route path="/profile/:id">
        <UsersProfile />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/question/:id">
        <QuestionSingle />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
}
