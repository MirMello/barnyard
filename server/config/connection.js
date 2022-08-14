const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || '', //put mongoose db here in the ''
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;