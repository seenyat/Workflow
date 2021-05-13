import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  avatar_url: String,
  login: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

export default User;
