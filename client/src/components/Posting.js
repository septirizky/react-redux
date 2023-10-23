import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const Posting = () => {
  const [item, setItem] = useState({
    title: "",
    content: "",
    post: "",
    image: "",
  });
  const [test, setTest] = useState(false);

  const createHandler = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const insert = async () => {
    try {
      await axios({
        method: "POST",
        url: "http://localhost:3500/items/create",
        data: item,
      });
      Swal.fire("Create Data Berhasil!", "This is button handler", "success");
      setTest(!test);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    // Swal.fire("Create Data Berhasil!", "This is button handler", "success");
  }, [test]);

  console.log(item);

  return (
    <div>
      <div>
        <div className="container">
          <h3>Create Data User</h3>
          <br></br>
          <form action="" onSubmit={() => insert()}>
            <div className="form-group mb-3">
              <label>title :</label>
              <input
                type="text"
                name="title"
                className="form-control"
                placeholder="title"
                onChange={(e) => createHandler(e)}
              />
            </div>
            <div className="form-group mb-3">
              <label>content :</label>
              <input
                type="text"
                name="content"
                className="form-control"
                placeholder="content"
                onChange={(e) => createHandler(e)}
              />
            </div>
            <div className="form-group mb-3">
              <label>post :</label>
              <input
                type="text"
                name="post"
                className="form-control"
                placeholder="post"
                onChange={(e) => createHandler(e)}
              />
            </div>
            <div className="form-group mb-3">
              <label>image :</label>
              <input
                type="text"
                name="image"
                className="form-control"
                placeholder="image"
                onChange={(e) => createHandler(e)}
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
