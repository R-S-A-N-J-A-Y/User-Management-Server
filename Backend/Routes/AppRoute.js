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
  try {
    const result = await CreateUser(req.body);
    res.send(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = Route;
