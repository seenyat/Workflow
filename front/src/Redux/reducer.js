import {
  AUTH,
  CHANGE_FEED_MODAL_STATUS,
  CHANGE_HEADER_MODAL_STATUS,
  LOAD_QUESTIONS,
  LOGOUT,
  POST_QUESTION,
  EDIT_PROFILE,
  TOGGLE_TODO,
  LOAD_ANSWERS,
  EDIT_QUESTION,
  LIKE_QUESTION,
  LIKE_ANSWER,
  CHANGE_REDIRECT_STATUS,
  ADD_PROFILE_QA,
  DELETE_QUESTION,
  DELETE_ANSWER,
} from "./actions/actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case POST_QUESTION:
      return {
        ...state,
        questions: [...state.questions, action.payload],
      };

    case LOGOUT:
      return {
        ...state,
        auth: false,
        user: null,
      };

    case AUTH:
      return {
        ...state,
        auth: action.payload.authenticated,
        user: action.payload.authenticated ? action.payload.user : null,
      };

    case LOAD_QUESTIONS:
      return {
        ...state,
        questions: action.payload.questionsList,
      };

    case LOAD_ANSWERS:
      return {
        ...state,
        questions: state.questions.map((que) =>
          que._id === action.payload.question._id
            ? { ...que, answers: action.payload.answers }
            : que
        ),
      };

    case TOGGLE_TODO:
      return {
        ...state,
        user: { ...state.user, workflows: action.payload },
      };

    case CHANGE_FEED_MODAL_STATUS:
      return {
        ...state,
        modals: state.modals.map((modal) =>
          modal.page !== "feedmodal"
            ? {
                ...modal,
                status: false,
              }
            : {
                ...modal,
                status: action.payload,
              }
        ),
      };

    case CHANGE_HEADER_MODAL_STATUS:
      return {
        ...state,
        modals: state.modals.map((modal) =>
          modal.page !== "headermodal"
            ? {
                ...modal,
                status: false,
              }
            : {
                ...modal,
                status: action.payload,
              }
        ),
      };
    case EDIT_PROFILE:
      return {
        ...state,
        user: {
          ...state.user,
          login: action.payload.login,
          info: action.payload.info,
        },
      };

    case EDIT_QUESTION:
      return {
        ...state,
        questions: state.questions.map((que) =>
          que._id !== action.payload._id ? que : action.payload
        ),
      };

    case LIKE_QUESTION:
      return {
        ...state,
        questions: state.questions.map((que) =>
          que._id === action.payload._id
            ? { ...que, likes: action.payload.likes }
            : que
        ),
      };

    case LIKE_ANSWER:
      return {
        ...state,
        questions: state.questions.map((que) =>
          que._id === action.payload.question
            ? {
                ...que,
                answers: que.answers.map((answ) =>
                  answ._id === action.payload._id
                    ? { ...answ, likes: action.payload.likes }
                    : answ
                ),
              }
            : que
        ),
      };

    case CHANGE_REDIRECT_STATUS:
      return {
        ...state,
        redirect: action.payload,
      };

    case ADD_PROFILE_QA:
      return {
        ...state,
        prof: action.payload,
      };

    case DELETE_QUESTION:
      return {
        ...state,
        questions: state.questions.filter((que) => que._id !== action.payload),
      };

    case DELETE_ANSWER:
      console.log(action.payload);
      return {
        ...state,
        questions: state.questions.map((que) =>
          que._id !== action.payload.questionID
            ? que
            : {
                ...que,
                answers: que.answers.filter(
                  (ans) => String(ans._id) !== String(action.payload.answerID)
                ),
              }
        ),
      };

    default:
      return state;
  }
};

export default reducer;
