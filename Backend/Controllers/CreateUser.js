const { User } = require("../Models/UserModel");

const CreateUser = async (user) => {
  const newUser = new User(user);
  try {
    await newUser.save();
    return newUser;
  } catch (err) {
    throw new Error(`Cannot create new user: ${err.message}`);
  }
};

module.exports = CreateUser;
