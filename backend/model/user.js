const mongoose = require('mongoose');

const PeopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
});

const People = mongoose.model('People', PeopleSchema);
module.exports = People;
