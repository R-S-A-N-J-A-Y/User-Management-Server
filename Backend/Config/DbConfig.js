require("dotenv").config();
const mongoose = require("mongoose");

const userName = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const URL = process.env.MONGO_CLUSTER_URL;

console.log("Connecting with:", {
  userName,
  password,
  URL,
});

const ConnectDB = () => {
  mongoose
    .connect(
      `mongodb+srv://${userName}:${password}@${URL}.mongodb.net/User-Management`
    )
    .then(() => console.log("conneted to Db..."))
    .catch((err) => console.log("Error Connecting to DB ", err));
};

module.exports = ConnectDB;
