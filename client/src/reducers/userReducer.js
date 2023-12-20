import { LOGIN, PROFILE, REGISTER } from "../actions/userAction";

const initialState = {
  getProfileResult: false,
  getProfileLoading: false,
  getProfileError: false,

  loginUsersResult: false,
  loginUsersLoading: false,
  loginUsersError: false,

  registerUsersResult: false,
  registerUsersLoading: false,
  registerUsersError: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE:
      console.log("4. Masuk Reducer : ", action);
      return {
        ...state,
        getProfileResult: action.payload.data,
        getProfileLoading: action.payload.loading,
        getProfileError: action.payload.errorMessage,
      };

    case LOGIN:
      console.log("4. Masuk Reducer : ", action);
      return {
        ...state,
        loginUsersResult: action.payload.data,
        loginUsersLoading: action.payload.loading,
        loginUsersError: action.payload.errorMessage,
      };

    case REGISTER:
      return {
        ...state,
        registerUsersResult: action.payload.data,
        registerUsersLoading: action.payload.loading,
        registerUsersError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default userReducer;
