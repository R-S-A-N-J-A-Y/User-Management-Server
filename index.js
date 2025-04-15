const express = require("express");
const app = express();
const ConnectDB = require("./Backend/Config/DbConfig");

ConnectDB();

app.use(express.json());

app.use("/api", require("./Backend/Routes/AppRoute.js"));
app.use("/auth", require("./Backend/Routes/Login.js"));

app.get("/", (req, res) => {
  res.send("Hello World.");
});

app.listen(3000, () => console.log("Server is Running on Port 3000..."));
