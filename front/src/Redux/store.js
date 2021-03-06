import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import Sagas from "./sagas";

const preloadedState =
  '{"auth": false, "modals": [{"page": "feedmodal", "status": false }, {"page": "headermodal", "status": false }], "user": null, "loading": false, "questions": [] }';

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
