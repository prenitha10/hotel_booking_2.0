const express = require('express')
const {createRoom,bookRoom,updateRooms,cancelBooking}=require('../controller/rooms')
const room=express.Router();

room.post('/createRoom',createRoom);
room.post('/bookRoom',bookRoom);
room.put('/updateRooms',updateRooms);
room.delete('/cancelBooking',cancelBooking);

module.exports=room;