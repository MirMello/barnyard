const { Schema, model } = require('mongoose');

const AnimalSchema = new Schema({
    _animalId: {
        type: Schema.Types.ObjectId
    },
    name: {
        type: String
    },
    gender: {
        type: String
    },
    posts: {
        type: Schema.Types.ObjectId
    }
});

module.exports = AnimalSchema;