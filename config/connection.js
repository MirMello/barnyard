const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://user1234:pass1234@cluster0.a6udds5.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;