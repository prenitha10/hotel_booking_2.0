const Rooms = require('../model/room');
const Booking = require('../model/booking');
const uuid4 = require('uuid4');
const moment = require('moment');
//post
const createRoom = async (req, res) => {
  const { roomNo, roomType, imageUrl, description, amenities, bookingStatus, price} = req.body;

  if (!roomNo || !amenities || !roomType || !description || !imageUrl || !bookingStatus || !price)
    return res.status(400).json({ error: "Null values are entered" });
  try {
    const existingRoom = await Rooms.findOne({ roomNo});
    if (existingRoom)
      return res.status(400).json({ error: "Room with this ID already exists" });

    const createRoom = await Rooms.create({ roomNo, roomType, description, amenities, imageUrl, bookingStatus, price});
    return res.status(200).json({ message: "Rooms created successfully "});
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllRoom = async (req, res) => {
  try {
    const room = await Rooms.find();
    return res.status(200).json(room);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: "Internal Server error" });
  }
}

const bookRoom = async (req, res) => {
  const { adults, children, roomId, startDate, endDate, comment } = req.body;

  if (!adults || !children || !roomId || !startDate || !endDate || !comment)
    return res.status(400).json({ error: "Required Values not present" });

  try {
    const parsedStartDate = moment(startDate, "DD-MM-YYYY").toDate();
    const parsedEndDate = moment(endDate, "DD-MM-YYYY").toDate();

    const verifyRoom = await Rooms.findById(roomId);

    if (!verifyRoom) {
      return res.status(404).json({ error: "Room not found" });
    }

    const overlappingBooking = await Booking.findOne({
      _id: roomId,
      $or: [
        { startDate: { $gte: parsedStartDate, $lte: parsedEndDate } },
        { endDate: { $gte: parsedStartDate, $lte: parsedEndDate } },
        { startDate: { $lt: parsedStartDate }, endDate: { $gt: parsedEndDate } }
      ]
    });

    if (overlappingBooking) {
      return res.status(400).json({ error: "Room is not available on these dates" });
    }

    const booking = await Booking.create({ adults, children, roomId, startDate: parsedStartDate, endDate: parsedEndDate, comment });

    verifyRoom.bookingStatus = "true";
    await verifyRoom.save();

    return res.status(200).json({ message: "Booking created successfully", "bookingId": booking._id });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};


//put-update
const updateRooms = async (req, res) => {
  const { roomId, bookingStatus } = req.body;
  if (!roomId || !bookingStatus) {
    return res.status(400).json({ error: "Required values are not present" });
  }
  try {
    const room = await Rooms.findOne({ roomId });
    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }
    room.bookingStatus = bookingStatus;
    await room.save();
    return res.status(404).json({ error: "Room not found" });
  }
  catch (e) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

//delete-update and cancel
const cancelBooking = async (req, res) => {
  const { bookingId } = req.body;
  if (!bookingId) {
    return res.status(400).json({ error: "BookigId is required" });

  }
  try {
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }
    await Booking.findByIdAndDelete(bookingId);

    const room = await Rooms.findOne({ roomId: booking.roomId });
    if (room) {
      room.bookingStatus = 'Available';
      await room.save();
    }

    return res.status(200).json({ message: "Booking canceled and room status updated", room });
  }
  catch (e) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }

}
module.exports = { createRoom, bookRoom, updateRooms, cancelBooking, getAllRoom };
