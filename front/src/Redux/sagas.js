import { call, put, takeEvery } from "redux-saga/effects";
import {
  AuthCheck,
  changeRedirectStatus,
  editQuestion,
  likeAnswerAC,
  likeQuestionAC,
  loadAnswers,
  loadQuestions,
  postQuestion,
  addProfileAnswerQuestion,
  editProfile,
  toggleTodo,
} from "./actions/actionCreator";
import {
  SAGA_AUTH,
  SAGA_EDIT_QUESTION,
  SAGA_LIKE_ANSWER,
  SAGA_LIKE_QUESTION,
  SAGA_LOAD_ANSWERS,
  SAGA_LOAD_QUESTIONS,
  SAGA_POST_QUESTION,
  SAGA_ADD_PROFILE_QA,
  SAGA_EDIT_PROFILE,
  SAGA_TOGGLE_TODO,
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
  yield put(changeRedirectStatus(true));
}

function* loadQuestionsWorker(action) {
  const newInfo = yield call(fetchForGet, action.payload);
  yield console.log(newInfo);
  yield put(loadQuestions(newInfo));
}

//ANSWERS
function* loadAnswersWorker(action) {
  const answers = yield call(fetchForGet, action.payload);
  yield put(loadAnswers(answers));
}

function* authWorker(action) {
  const result = yield call(fetchForGet, action.payload);
  yield put(AuthCheck(result));
}

function* likeAnswerWorker(action) {
  const answerLikesArray = yield call(fetchForAll, action.payload);
  yield put(likeAnswerAC(answerLikesArray));
}

function* likeQuestionWorker(action) {
  const questionLikesArray = yield call(fetchForAll, action.payload);
  yield put(likeQuestionAC(questionLikesArray));
}

function* editQuestionWorker(action) {
  const updatedQuestion = yield call(fetchForAll, action.payload);
  yield put(editQuestion(updatedQuestion));
}

function* addProfileAnswerQuestionWorker(action) {
  const profileAnswerQuestion = yield call(fetchForGet, action.payload);
  yield put(addProfileAnswerQuestion(profileAnswerQuestion));
}

function* editProfileWorker(action) {
  const editProfilelog = yield call(fetchForAll, action.payload);
  yield put(editProfile(editProfilelog));
}

function* toggleTodoWorker(action) {
  const toggledTodo = yield call(fetchForAll, action.payload);
  yield put(toggleTodo(toggledTodo));
}

export default function* watcher() {
  yield takeEvery(SAGA_POST_QUESTION, postQuestionWorker);
  yield takeEvery(SAGA_LOAD_QUESTIONS, loadQuestionsWorker);
  yield takeEvery(SAGA_AUTH, authWorker);
  yield takeEvery(SAGA_LIKE_ANSWER, likeAnswerWorker);
  yield takeEvery(SAGA_LIKE_QUESTION, likeQuestionWorker);
  yield takeEvery(SAGA_LOAD_ANSWERS, loadAnswersWorker);
  yield takeEvery(SAGA_EDIT_QUESTION, editQuestionWorker);
  yield takeEvery(SAGA_ADD_PROFILE_QA, addProfileAnswerQuestionWorker);
  yield takeEvery(SAGA_EDIT_PROFILE, editProfileWorker);
  yield takeEvery(SAGA_TOGGLE_TODO, toggleTodoWorker);
}
