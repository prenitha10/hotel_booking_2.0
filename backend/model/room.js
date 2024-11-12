const mongoose = require('mongoose');

const roomType = {
  deluxe : 'deluxe',
  familySuite : 'familySuite',
  standard : 'standard',
  superior : 'superior',
  penthouse : 'penthouse',
  business : 'business'
}

const RoomSchema = new mongoose.Schema({
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

const Room = mongoose.model('Room', RoomSchema);
module.exports = Room;
