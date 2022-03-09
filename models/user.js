const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    image: String,
    bio: String,
    username: String,
    password: String,
  });

module.exports = User =
mongoose.model("User", UserSchema);
