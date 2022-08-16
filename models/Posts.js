const { Schema, model } = require('mongoose');
const Comment = require('./Comment.js')

const PostsSchema = new Schema({
    postId: {
        type: Schema.Types.ObjectId
    },
    animalId: {
        type: Number
    },
    picture: {
        type: String
    },
    caption: {
        type: String
    },
    likes: {
        type: Number
    },
    comments: {
        type: Schema.Types.ObjectId,
        default: Comment
    }
});

module.exports = PostsSchema;