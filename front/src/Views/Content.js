import { Route, Switch } from "react-router-dom";
import React from "react";
import UserProfile from "./UserProfile";
import Feed from "./Feed";
import About from "./About";
import ContentHeader from "./ContentHeader";
import QuestionSingle from "./QuestionSingle";
import Login from "./Login";
import Logout from "./Logout";
import Latest from "./Latest";

export default function Content({
  setMobileMenuOpen,
  mobileMenuOpen,
  classNames,
  userNavigation,
}) {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <ContentHeader
        userNavigation={userNavigation}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      {/* Main content */}
      <div className="flex-1 flex items-stretch overflow-hidden">
        <main className="flex-1 overflow-y-auto">
          {/* Primary column */}
          <section
            aria-labelledby="primary-heading"
            className="min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last"
          >
            <h1 id="primary-heading" className="sr-only">
              Content
            </h1>
            <Switch>
              <Route exact path="/">
                <Feed />
              </Route>
              <Route path="/new">
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
          </section>
        </main>

        {/* Secondary column (hidden on smaller screens) */}
        <aside className="hidden w-96 bg-white border-l border-gray-200 overflow-y-auto lg:block">
          {/* Your content */}
        </aside>
      </div>
    </div>
  );
}
