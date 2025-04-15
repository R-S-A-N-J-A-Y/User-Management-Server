const express = require("express");
const Route = express.Router();

// Get The User By UserName and Password

const { getByUserName } = require("../Controllers/GetUser");

Route.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await getByUserName(username, password);
    return res.send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
module.exports = Route;
