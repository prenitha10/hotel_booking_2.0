const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  adults: {
    type: Number,
    required: true
  },
  children: {
    type: Number
  },
  roomId: {
    type: String,
    required: true, 
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  comment: 
  { 
    type: String
   },
  bookingId:{
    type:String,
    required:true
  },
});

const Booking = mongoose.model('Booking', BookingSchema);
module.exports = Booking;
