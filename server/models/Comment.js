const { Schema, model } = require('mongoose');

const CommentSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId
  },
  commentBody: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  username: {
    type: String
  }
});

module.exports = CommentSchema;