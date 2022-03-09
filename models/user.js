const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    image: String,
    bio: String,
    username: String,
    password: String,
  });

module.exports = User =
mongoose.model("User", UserSchema);
