import {
  LOAD_QUESTIONS,
  POST_QUESTION,
  SAGA_LOAD_QUESTIONS,
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
