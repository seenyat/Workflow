import {
  AUTH,
  CHANGE_FEED_MODAL_STATUS,
  CHANGE_HEADER_MODAL_STATUS,
  CHANGE_REDIRECT_STATUS,
  EDIT_QUESTION,
  LIKE_ANSWER,
  LIKE_QUESTION,
  LOAD_ANSWERS,
  LOAD_QUESTIONS,
  LOGOUT,
  POST_QUESTION,
  SAGA_AUTH,
  SAGA_EDIT_QUESTION,
  SAGA_LIKE_ANSWER,
  SAGA_LIKE_QUESTION,
  SAGA_LOAD_ANSWERS,
  SAGA_LOAD_QUESTIONS,
  SAGA_LOGOUT,
  SAGA_POST_QUESTION,
  ADD_PROFILE_QA,
  SAGA_ADD_PROFILE_QA,
  EDIT_PROFILE,
  SAGA_EDIT_PROFILE,
  SAGA_DELETE_QUESTION,
  DELETE_QUESTION,
  SAGA_TOGGLE_TODO,
  TOGGLE_TODO,
} from "./actionTypes";

export const sagaPostQuestion = (payload) => ({
  type: SAGA_POST_QUESTION,
  payload,
});

export const postQuestion = (payload) => ({
  type: POST_QUESTION,
  payload,
});

export const sagaLoadQuestions = (payload) => ({
  type: SAGA_LOAD_QUESTIONS,
  payload,
});

export const loadQuestions = (payload) => ({
  type: LOAD_QUESTIONS,
  payload,
});

export const sagaLoadAnswers = (payload) => ({
  type: SAGA_LOAD_ANSWERS,
  payload,
});

export const loadAnswers = (payload) => ({
  type: LOAD_ANSWERS,
  payload,
});

export const changeFeedModalStatus = (payload) => ({
  type: CHANGE_FEED_MODAL_STATUS,
  payload,
});

export const changeHeaderModalStatus = (payload) => ({
  type: CHANGE_HEADER_MODAL_STATUS,
  payload,
});

export const sagaAuthCheck = (payload) => ({
  type: SAGA_AUTH,
  payload,
});

export const AuthCheck = (payload) => ({
  type: AUTH,
  payload,
});

export const sagaLogout = (payload) => ({
  type: SAGA_LOGOUT,
});

export const logout = () => ({
  type: LOGOUT,
});

export const sagaLikeAnswerAC = (payload) => ({
  type: SAGA_LIKE_ANSWER,
  payload,
});

export const likeAnswerAC = (payload) => ({
  type: LIKE_ANSWER,
  payload,
});

export const sagaLikeQuestionAC = (payload) => ({
  type: SAGA_LIKE_QUESTION,
  payload,
});

export const likeQuestionAC = (payload) => ({
  type: LIKE_QUESTION,
  payload,
});

export const sagaEditQuestion = (payload) => ({
  type: SAGA_EDIT_QUESTION,
  payload,
});

export const editQuestion = (payload) => ({
  type: EDIT_QUESTION,
  payload,
});

export const changeRedirectStatus = (payload) => ({
  type: CHANGE_REDIRECT_STATUS,
  payload,
});

export const addProfileAnswerQuestion = (payload) => ({
  type: ADD_PROFILE_QA,
  payload,
});

export const addSAGAProfileAnswerQuestion = (payload) => ({
  type: SAGA_ADD_PROFILE_QA,
  payload,
});

export const editProfile = (payload) => ({
  type: EDIT_PROFILE,
  payload,
});

export const sagaEditProfile = (payload) => ({
  type: SAGA_EDIT_PROFILE,
  payload,
});

export const sagaDeleteQuestion = (payload) => ({
  type: SAGA_DELETE_QUESTION,
  payload,
});

export const deleteQuestion = (payload) => ({
  type: DELETE_QUESTION,
export const sagaToggleTodo = (payload) => ({
  type: SAGA_TOGGLE_TODO,
  payload,
});

export const toggleTodo = (payload) => ({
  type: TOGGLE_TODO,
  payload,
});
