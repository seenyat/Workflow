import { call, put, takeEvery } from "redux-saga/effects";
import {
  AuthCheck,
  loadQuestions,
  postQuestion,
} from "./actions/actionCreator";
import {
  SAGA_AUTH,
  SAGA_LOAD_QUESTIONS,
  SAGA_POST_QUESTION,
} from "./actions/actionTypes";

const fetchForAll = async (payload) => {
  const feedBack = await fetch(payload.url, payload.constructor);
  return feedBack.json();
};

const fetchForGet = async (payload) => {
  const feedBack = await fetch(payload, {
    method: "GET",
    credentials: "include",
  });
  return await feedBack.json();
};

function* postQuestionWorker(action) {
  const post = yield call(fetchForAll, action.payload);
  yield put(postQuestion(post));
}

function* loadQuestionsWorker(action) {
  const newInfo = yield call(fetchForGet, action.payload);
  yield put(loadQuestions(newInfo));
}

function* authWorker(action) {
  const result = yield call(fetchForGet, action.payload);
  yield console.log(result);
  yield put(AuthCheck(result));
}

export default function* watcher() {
  yield takeEvery(SAGA_POST_QUESTION, postQuestionWorker);
  yield takeEvery(SAGA_LOAD_QUESTIONS, loadQuestionsWorker);
  yield takeEvery(SAGA_AUTH, authWorker);
}
