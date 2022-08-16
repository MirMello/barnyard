const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    name: {
        type: String
    },
    profilePicture: {
        type: String
    },
    barns: {
        type: Schema.Types.ObjectId
    }
});

module.exports = UserSchema;