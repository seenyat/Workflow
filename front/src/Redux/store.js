import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import Sagas from "./sagas";

const preloadedState =
  window.localStorage.getItem("state") ||
  '{"Auth": false, "User":{"Username": "Anton", "email": "anton@mail.ru", "role": "admin" }, "loading": false, "Questions": [] }';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  JSON.parse(preloadedState),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(function* () {
  yield all([Sagas()]);
});
export default store;
