import { ADD_POSTING, GET_POSTING, SEARCH } from "../actions/articleAction";

const initialState = {
  getPostingResult: false,
  getPostingLoading: false,
  getPostingError: false,

  addPostingResult: false,
  addPostingLoading: false,
  addPostingError: false,

  searchingResult: false,
  searchingLoading: false,
  searchingError: false,
};

const postingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTING:
      console.log("4. Masuk Reducer : ", action);
      return {
        ...state,
        getPostingResult: action.payload.data,
        getPostingLoading: action.payload.loading,
        getPostingError: action.payload.errorMessage,
      };

    case ADD_POSTING:
      console.log("4. Masuk Reducer : ", action);
      return {
        ...state,
        addPostingResult: action.payload.data,
        addPostingLoading: action.payload.loading,
        addPostingError: action.payload.errorMessage,
      };

    case SEARCH:
      return {
        ...state,
        searchingResult: action.payload.data,
        searchingLoading: action.payload.loading,
        searchingError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default postingReducer;
