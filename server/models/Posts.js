const { Schema, model } = require('mongoose');

const PostsSchema = new Schema({
    id: {
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
        type: [Schema.Types.ObjectId],
        default: []
    }
});

const Post = model('Post', PostsSchema);

module.exports = Post;