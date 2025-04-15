const express = require("express");
const Route = express.Router();

const getUsers = require("../Controllers/GetUser.js");

Route.get("/", async (req, res) => {
  try {
    res.send(await getUsers());
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = Route;
