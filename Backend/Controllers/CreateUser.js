const { User } = require("../Models/UserModel");

const CreateUser = async (user) => {
  const newUser = new User(user);
  try {
    await newUser.save();
    return newUser;
  } catch (err) {
    throw { code: err.code, keyValue: err.keyValue, message: err.message };
  }
};

module.exports = CreateUser;
