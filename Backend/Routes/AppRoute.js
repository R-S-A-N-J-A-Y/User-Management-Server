const express = require("express");
const Route = express.Router();

Route.get("/", (req, res) => {
  console.log("Request Received...");
  res.send("Hello World !!");
});

module.exports = Route;
