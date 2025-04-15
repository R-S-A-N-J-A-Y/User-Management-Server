const express = require("express");
const app = express();
const ConnectDB = require("./Backend/Config/DbConfig");

ConnectDB();

app.get("/", (req, res) => {
  res.send("Hello World.");
});

app.listen(3000, () => console.log("Server is Running on Port 3000..."));
