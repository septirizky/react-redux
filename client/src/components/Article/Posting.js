import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addPosting } from "../../actions/articleAction";

const Posting = () => {
  const { addPostingResult, addPostingError } = useSelector(
    (state) => state.articleReducer
  );
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const [article, setArticle] = useState({
    title: "",
    content: "",
    post: "",
    image: "",
  });

  const [isAddArticle, setIsAddArticle] = useState(false);

  const handleSavePosting = (data) => {
    const dataJson = {
      title: data.title,
      content: data.content,
      post: data.post,
      image: data.image,
    };
    setIsAddArticle(true);
    dispatch(addPosting(dataJson));
  };

  useEffect(() => {
    if (addPostingResult || addPostingError) {
      if (isAddArticle) {
        addPostingResult
          ? Swal.fire({
              title: "Sukses",
              icon: "success",
              text: addPostingResult.message,
              confirmButtonText: "OK",
            }).then(() => {
              reset();
            })
          : Swal.fire("Gagal", addPostingError, "error");
      }
    }
    // eslint-disable-next-line
  }, [addPostingResult, addPostingError]);

  return (
    <div>
      <div>
        <div className="container">
          <h3>Create Data User</h3>
          <br></br>
          <form onSubmit={handleSubmit(handleSavePosting)}>
            <div className="form-group mb-3">
              <label>title :</label>
              <input
                type="text"
                name="title"
                className="form-control"
                placeholder="title"
                id="formTitle"
                {...register("title")}
              />
            </div>
            <div className="form-group mb-3">
              <label>content :</label>
              <input
                type="text"
                name="content"
                className="form-control"
                placeholder="content"
                id="formContent"
                {...register("content")}
              />
            </div>
            <div className="form-group mb-3">
              <label>post :</label>
              <input
                type="text"
                name="post"
                className="form-control"
                placeholder="post"
                id="formPost"
                {...register("post")}
              />
            </div>
            <div className="form-group mb-3">
              <label>image :</label>
              <input
                type="text"
                name="image"
                className="form-control"
                placeholder="image"
                id="formImage"
                {...register("image")}
              />
            </div>
            <button className="btn btn btn-primary mb-5" type="submit">
              Simpan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Posting;
