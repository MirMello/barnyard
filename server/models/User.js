const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    barns: {
        type: [Schema.Types.ObjectId],
        default: []
    }
});

const User = model('User', UserSchema); 

module.exports = User;