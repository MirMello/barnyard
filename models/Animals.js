const { Schema, model } = require('mongoose');
const Barn = require('./Barn');

const AnimalSchema = new Schema({
    animalId: {
        type: Schema.Types.ObjectId
    },
    barnId: {
        type: Barn.barnId
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