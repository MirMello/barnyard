const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    barnCount: {
        type: Number
    },
    barns: {
        type: Schema.Types.ObjectId
    }
});

module.exports = UserSchema;