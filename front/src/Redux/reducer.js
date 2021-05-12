import { LOAD_QUESTIONS, POST_QUESTION } from "./actions/actionTypes";

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

    default:
      return state;
  }
};

export default reducer;
