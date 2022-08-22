const { Schema, model } = require('mongoose');

const BarnSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    username: {
        type: Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    animals: {
        type: [Schema.Types.ObjectId],
        default: []
    },
    posts: {
        type: [Schema.Types.ObjectId],
        default: []
    }
});

const Barn = model('Barn', BarnSchema);

module.exports = Barn;