const cors = require("cors");
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3500;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE");
  next();
});
const route = require("./routes");
app.use(route);
app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
