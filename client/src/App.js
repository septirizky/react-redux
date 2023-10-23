import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Login } from "./components/Login";
import Home from "./components/Home";
import { Users } from "./components/Users";
import Posting from "./components/Posting";

function App() {
  // const setToken = (data) => {
  //   sessionStorage.setItem("token", JSON.stringify(data.token));
  //   sessionStorage.setItem("username", JSON.stringify(data.username));
  //   sessionStorage.setItem("image", JSON.stringify(data.image));
  //   sessionStorage.setItem("iduser", JSON.stringify(data.iduser));
  //   sessionStorage.setItem("userdata", JSON.stringify(data.data));
  // };
  // const getToken = () => {
  //   const tokenString = sessionStorage.getItem("token");
  //   const userToken = JSON.parse(tokenString);
  //   return userToken?.toString();
  // };
  // const token = getToken();
  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/items" element={<Posting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
