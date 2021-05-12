import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./Views/Navigation";
import UserProfile from "./Views/UserProfile";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />

        <Switch>
          <Route path="/">
            <UserProfile />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
