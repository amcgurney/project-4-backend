const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    body: String,
    likes: {
        type: mongoose.Types.ObjectId,
        ref: "likes",
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "user",
    },
});

module.exports = Post = mongoose.model("Post", PostSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    text: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    avatar: {
        type: String
    },
    likes: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }
    }],
    comments: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        text: {
            type: String,
            required: true
        },
        name: {
            type: String,
        },
        avatar: {
            type: String
        },
        date: {
            type: Date,
            default: Date.now
        }
    }],
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = Post = mongoose.model('post', PostSchema);