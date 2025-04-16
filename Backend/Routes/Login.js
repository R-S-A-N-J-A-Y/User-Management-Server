const express = require("express");
const Route = express.Router();
const { getByUserName } = require("../Controllers/GetUser");

// Validate user - Check Username is avilable in mongobd or not
Route.post("/", async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await getByUserName(username, password);
    if (!result) return res.send("No User Found");
    return res.send("User Found");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Get The User By UserName
Route.post("/login", async (req, res) => {
  const { username } = req.body;
  try {
    const result = await getByUserName(username);
    return res.send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = Route;
