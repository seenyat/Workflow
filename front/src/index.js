import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./Redux/store";

// store.subscribe(() => {
//   const state = store.getState();
//   window.localStorage.setItem("state", JSON.stringify(state));
// });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
