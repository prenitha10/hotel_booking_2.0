const mongoose = require('mongoose');

const Booking = new mongoose.Schema({
  adults: {
    type: Number,
    required: true
  },
  children: {
    type: Number
  },
  roomsId: {
    type: String,
    required: true, default: 1
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  comment: { type: String },
});

const Booking = mongoose.model('Booking', Booking);
module.exports = Room;
