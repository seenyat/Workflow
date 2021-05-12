import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./Redux/store";

store.subscribe(() => {
  const state = store.getState()
  window.localStorage.setItem('state', JSON.stringify(state))
})

ReactDOM.render(

  <App />,

  document.getElementById("root")
);
