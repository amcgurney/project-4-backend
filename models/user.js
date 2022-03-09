const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    bio: {
        type: String,
    },
    username: {
        type: String,
    },
    password: {
        type: String,
    }
  });

module.exports = User =
mongoose.model("User", UserSchema);
