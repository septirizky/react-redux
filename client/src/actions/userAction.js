import axios from "axios";

export const PROFILE = "PROFILE";
export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";

export const getProfile = (id) => {
  return async (dispatch) => {
    dispatch({
      type: PROFILE,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    await axios({
      method: "GET",
      url: "http://localhost:3000/user/detail/" + id,
      timeout: 120000,
    })
      .then((res) => {
        dispatch({
          type: PROFILE,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((e) => {
        dispatch({
          type: PROFILE,
          payload: {
            loading: false,
            data: false,
            errorMessage: e.response.data.message,
          },
        });
      });
  };
};

export const LoginUsers = (data) => {
  return async (dispatch) => {
    dispatch({
      type: LOGIN,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    await axios({
      method: "POST",
      url: "http://localhost:3000/user/login",
      data: data,
      timeout: 120000,
    })
      .then((res) => {
        sessionStorage.setItem("userdata", JSON.stringify(res.data));
        dispatch({
          type: LOGIN,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((e) => {
        dispatch({
          type: LOGIN,
          payload: {
            loading: false,
            data: false,
            errorMessage: e.response.data.message,
          },
        });
      });
  };
};

export const RegisterUsers = (data) => {
  return async (dispatch) => {
    dispatch({
      type: REGISTER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    await axios({
      method: "POST",
      url: "http://localhost:3000/user/register",
      data: data,
      timeout: 120000,
    })
      .then((res) => {
        dispatch({
          type: REGISTER,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((e) => {
        dispatch({
          type: REGISTER,
          payload: {
            loading: false,
            data: false,
            errorMessage: "asfs",
          },
        });
      });
  };
};
