const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const axios = require("axios");
const cors = require("cors");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", function (req, res, next) {
  res.render("index");
});

app.get("/proxy/*", async function (req, res, next) {
  let apiUrl = req.originalUrl.replace("/proxy/", "");
  try {
    const response = await axios.get(apiUrl);
    res.status(response.status);
    res.set(response.headers);
    res.send(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status);
      res.set(error.response.headers);
      res.send(error.response.data);
    } else {
      res.status(500).json({ error: "Internal Error" });
    }
  }
});

module.exports = app;
