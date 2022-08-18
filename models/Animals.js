const { Schema, model } = require('mongoose');

const AnimalSchema = new Schema({
    _id: {
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

<<<<<<< HEAD

module.exports = AnimalSchema;

=======
const Animal = model('Animal', AnimalSchema);

module.exports = Animal;
>>>>>>> main
