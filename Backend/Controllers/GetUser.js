const { User } = require("../Models/UserModel");

const getUsers = async () => {
  try {
    return await User.find();
  } catch {
    throw new Error("Unable To Fetch Users...");
  }
};

module.exports = getUsers;
