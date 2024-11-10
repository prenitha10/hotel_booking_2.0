const mongoose = require('mongoose');

const roomType = {
  deluxe : 'deluxe',
  familySuite : 'familySuite',
  standard : 'standard',
  superior : 'superior',
  penthouse : 'penthouse',
  business : 'business'
}

const Room = new mongoose.Schema({
  roomId: {
    type: String,
    required: true
  },
  roomType: {
    type: String,
    enum: Object.values(roomType),
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  bookingStatus: {
    type: Boolean,
    required: true
  }
});

const RoomSchema = mongoose.model('Room', Room);
module.exports = RoomSchema;
