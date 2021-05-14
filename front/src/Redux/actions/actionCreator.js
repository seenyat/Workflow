import {
  AUTH,
  CHANGE_FEED_MODAL_STATUS,
  CHANGE_HEADER_MODAL_STATUS,
  LIKE_ANSWER,
  LIKE_QUESTION,
  LOAD_QUESTIONS,
  LOGOUT,
  POST_QUESTION,
  SAGA_AUTH,
  SAGA_LIKE_ANSWER,
  SAGA_LIKE_QUESTION,
  SAGA_LOAD_QUESTIONS,
  SAGA_LOGOUT,
  SAGA_POST_QUESTION,
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
})

export const likeQuestionAC = (payload) => ({
  type: LIKE_QUESTION,
  payload,
})
