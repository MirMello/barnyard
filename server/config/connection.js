const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://barnyardproject:H6OT8OiMG94XsLs2@cluster0.zwpj7dp.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;