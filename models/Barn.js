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
        type: subSchema
    },
    posts: {
        type: subSchema
    }
});

module.exports = BarnSchema;