const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/:url(*)", async function (req, res, next) {
  const apiUrl = req.params.url;
  try {
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    res.json(error);
  }
});

module.exports = app;
