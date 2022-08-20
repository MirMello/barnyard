const { Schema, model } = require('mongoose');

const BarnSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId
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
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    }
});

const Barn = model('Barn', BarnSchema);

module.exports = Barn;