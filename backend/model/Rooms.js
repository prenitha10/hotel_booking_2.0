const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    adults: { 
        type: Number,
        required: true 
        },
    children: { 
        type: Number 
    },
    rooms: { 
        type: Number, 
        required: true, default: 1 
    },
    startDate: { 
        type: Date,
        required: true
    },
    endDate: { type: Date,
         required: true 
        },
    comment: { type: String },
});

const Room = mongoose.model('Room', RoomSchema);
module.exports = Room;