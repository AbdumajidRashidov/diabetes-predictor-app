// models/User.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  googleId: { type: String, unique: true, sparse: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String },
  password: { type: String },
  profilePicture: { type: String },
  role: { type: String, enum: ["doctor", "patient"] },
  googleAccessToken: { type: String, unique: true, sparse: true },
  googleRefreshToken: { type: String, unique: true, sparse: true },
});

module.exports = mongoose.model("User", UserSchema);
