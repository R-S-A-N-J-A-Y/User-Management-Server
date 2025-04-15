const mongoose = require("mongoose");

const PersonalSchema = mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  phone: { type: String, required: true, unique: true },
  date: { type: Date, required: true },
  gender: { type: String, enum: ["male", "female", "other"], required: true },
});

const AddressSchema = mongoose.Schema({
  doorno: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  pincode: { type: String, required: true },
});

const CredentialSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
});

const UserSchema = mongoose.Schema({
  personal: PersonalSchema,
  address: AddressSchema,
  credential: CredentialSchema,
});

const User = mongoose.model("User", UserSchema);

module.exports.User = User;
