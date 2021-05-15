import React from "react";
import { Route } from "react-router";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import About from "../../Views/About";
import Feed from "../../Views/Feed";
import Latest from "../../Views/Latest";
import Login from "../../Views/Login";
import Logout from "../../Views/Logout";
import QuestionSingle from "../../Views/QuestionSingle";
import UserProfile from "../../Views/UserProfile";

export default function ContentRouter() {
  return (
    <Switch>
      <Route exact path="/">
        <Feed />
      </Route>
      <Route path="/profile">
        <UserProfile />
      </Route>
      <Route path="/latest">
        <Latest />
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
      <Route path="/logout">
        <Logout />
      </Route>
    </Switch>
  );
}
