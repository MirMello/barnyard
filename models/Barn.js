const { Schema, model } = require('mongoose');

const BarnSchema = new Schema({
    barnId: {
        type: Schema.Types.ObjectId
    },
    userId: {
        type: Number
    },
    barnName: {
        type: String
    },
    animals: {
        type: Schema.Types.ObjectId
    },
    posts: {
        type: Schema.Types.ObjectId
    }
});

module.exports = BarnSchema;