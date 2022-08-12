const { Schema, model } = require('mongoose');
const User = require('./User');

const BarnSchema = new Schema({
    barnId: {
        type: Schema.Types.ObjectId
    },
    userId: {
        type: User.userId
    },
    barnName: {
        type: String
    },
    animals: {
        type: subSchema
    },
    posts: {
        type: subSchema
    }
});

module.exports = BarnSchema;