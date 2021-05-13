import {
  CHANGE_FEED_MODAL_STATUS,
  CHANGE_HEADER_MODAL_STATUS,
  LOAD_QUESTIONS,
  POST_QUESTION,
} from "./actions/actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case POST_QUESTION:
      return {
        ...state,
        questions: [...state.questions, action.payload],
      };

    case LOAD_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };

    case CHANGE_FEED_MODAL_STATUS:
      return {
        ...state,
        modals: state.modals.map((modal) =>
          modal.page != "feedmodal"
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
          modal.page != "headermodal"
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
