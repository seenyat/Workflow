import {
  AUTH,
  CHANGE_FEED_MODAL_STATUS,
  CHANGE_HEADER_MODAL_STATUS,
  LOAD_QUESTIONS,
  LOGOUT,
  POST_QUESTION,
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

    default:
      return state;
  }
};

export default reducer;
