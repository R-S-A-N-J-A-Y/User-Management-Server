const express = require("express");
const Route = express.Router();

// Get All the User from MongoDB
const { getUsers } = require("../Controllers/GetUser.js");

Route.get("/users", async (req, res) => {
  try {
    res.send(await getUsers());
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new User
const CreateUser = require("../Controllers/CreateUser.js");

Route.post("/createuser", async (req, res) => {
  console.log("Request");
  try {
    const result = await CreateUser(req.body);
    console.log(result);
    res.send(result);
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json(err);
    } else {
      console.log(err.message);
      res.status(400).json({ message: err.message });
    }
  }
});

module.exports = Route;
