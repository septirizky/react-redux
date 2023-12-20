import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosting } from "../../actions/articleAction";

const Home = () => {
  const {
    getPostingResult,
    getPostingLoading,
    getPostingError,
    addPostingResult,
    // updatePostingResult,
    // deletePostingResult,
  } = useSelector((state) => state.articleReducer);

  // const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosting());
  }, [dispatch, addPostingResult]);

  return (
    <div className="container pt-5">
      {getPostingResult.length > 0 ? (
        getPostingResult.map((value) => {
          const PostsDate = new Date(value.createdAt);
          return <div className="container-fluid w-50"></div>;
        })
      ) : getPostingLoading ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          {getPostingError ? (
            getPostingResult
          ) : (
            <div className="d-flex justify-content-center align-content-center py-5">
              <div className="border p-5">
                <h3>Go to Posting to Post your first Posts in this website</h3>
              </div>
            </div>
          )}
        </div>
      )}
      <p className="text-center">
        {getPostingResult.length === 0 ? "" : "End of post"}
      </p>
    </div>
  );
};

export default Home;
