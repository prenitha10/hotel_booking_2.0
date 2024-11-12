
const mongoose = require('mongoose');

const roomType = {
  deluxe: 'Deluxe',
  familySuite: 'Family Suite',
  standard: 'Standard',
  superior: 'Superior',
  penthouse: 'Penthouse',
  business: 'Business'
}

const RoomSchema = new mongoose.Schema({
  roomNo: {
    type: String,
    required: true
  },
  roomType: {
    type: String,
    enum: Object.values(roomType),
    required: true
  },
  description: {
    type: String,
    required: true
  },
  amenities: {
    type: [String],
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  bookingStatus: {
    type: Boolean,
    required: true,
    default: false
  },
  price: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

const Room = mongoose.model('Room', RoomSchema);
module.exports = Room;

