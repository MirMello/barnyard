const { Schema, model } = require('mongoose');

const BarnSchema = new Schema({
    _barnId: {
        type: Schema.Types.ObjectId
    },
    name: {
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