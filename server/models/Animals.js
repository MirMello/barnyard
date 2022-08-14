const { Schema, model } = require('mongoose');

const AnimalSchema = new Schema({
    animalId: {
        type: Schema.Types.ObjectId
    },
    barnId: {
        type: Number
    },
    name: {
        type: String
    },
    gender: {
        type: String
    },
    picture: {
        type: String
    },
    posts: {
        type: subSchema
    }
});

module.exports = AnimalSchema;