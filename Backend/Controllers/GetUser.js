const { User } = require("../Models/UserModel");

const getUsers = async () => {
  try {
    return await User.find();
  } catch {
    throw new Error("Unable To Fetch Users...");
  }
};

const getByUserName = async (username, password) => {
  try {
    return await User.findOne({
      "credential.username": username,
      "credential.password": password,
    });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports.getUsers = getUsers;
module.exports.getByUserName = getByUserName;
