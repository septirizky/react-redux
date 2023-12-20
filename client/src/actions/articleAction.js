import axios from "axios";

export const GET_POSTING = "GET_POSTING";
export const ADD_POSTING = "ADD_POSTING";
export const SEARCH = "SEARCH";

export const getPosting = () => {
  console.log("2. Masuk action");
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_POSTING,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get API
    axios({
      method: "GET",
      url: "http://localhost:3000/post",
      timeout: 120000,
    })
      .then((response) => {
        console.log("3. Berhasil dapat data : ", response);
        //berhasil get API
        dispatch({
          type: GET_POSTING,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("3. Gagal dapat data : ", error);
        //gagal get API
        dispatch({
          type: GET_POSTING,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const addPosting = (data) => {
  // console.log("2. Masuk action");
  return (dispatch) => {
    //loading
    dispatch({
      type: ADD_POSTING,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get API
    axios({
      method: "POST",
      url: "http://localhost:3000/post/create",
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        // console.log("3. Berhasil dapat data : ", response);
        //berhasil get API
        dispatch({
          type: ADD_POSTING,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("3. Gagal dapat data : ", error);
        //gagal get API
        dispatch({
          type: ADD_POSTING,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const searching = (caption, auth) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: SEARCH,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get API
    axios({
      method: "GET",
      url: "http://localhost:3000/posting/search/" + caption,
      headers: { Authorization: auth },
      timeout: 120000,
    })
      .then((response) => {
        // console.log("3. Berhasil dapat data : ", response);
        //berhasil get API
        dispatch({
          type: SEARCH,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // console.log("3. Gagal dapat data : ", error);
        //gagal get API
        dispatch({
          type: SEARCH,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
