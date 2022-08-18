const { Schema, model } = require('mongoose');
const Comment = require('./Comment.js')

const PostsSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    postText: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    },
    comments: {
        type: [Comment],
        default: []
    }
});

const Post = model('Post', PostsSchema);

module.exports = Post;