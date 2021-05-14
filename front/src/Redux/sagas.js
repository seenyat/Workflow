import { call, put, takeEvery } from "redux-saga/effects";
import {
  AuthCheck,
  likeAnswerAC,
  likeQuestionAC,
  loadQuestions,
  postQuestion,
} from "./actions/actionCreator";
import {
  SAGA_AUTH,
  SAGA_LIKE_ANSWER,
  SAGA_LIKE_QUESTION,
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
  yield put(AuthCheck(result));
}

function* likeAnswerWorker(action) {
  const likesArray = yield call(fetchForAll, action.payload);
  // yield put(likeAnswerAC(likesArray));
}

function* likeQuestionWorker(action) {
  const questionArray = yield call(fetchForAll, action.payload);
  // yield put(likeQuestionAC(questionArray));
}

export default function* watcher() {
  yield takeEvery(SAGA_POST_QUESTION, postQuestionWorker);
  yield takeEvery(SAGA_LOAD_QUESTIONS, loadQuestionsWorker);
  yield takeEvery(SAGA_AUTH, authWorker);
  yield takeEvery(SAGA_LIKE_ANSWER, likeAnswerWorker);
  yield takeEvery(SAGA_LIKE_QUESTION, likeQuestionWorker);
}
