const Rooms = require('../model/room');
const Booking = require('../model/booking');


//post
const createRoom = async (req, res) => {
    const { roomId, roomType, imageUrl, bookingStatus } = req.body;

    if (!roomId || !bookingStatus || !roomType || !imageUrl)
        res.status(400).json({ error: "bad request" });
    try {
        const existingRoom = await Rooms.findOne({ roomId });
        if (existingRoom)
            return res.status(400).json({ error: "Room with this ID already exists" });

        const createRoom = await Rooms.create({ roomId, roomType, imageUrl, bookingStatus });
        return res.status(201).json({ message: "Rooms created successfully ", room: createRoom });

    } catch (e) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
//Post
const bookRoom = async (req, res) => {
    const { adults, children, roomId, startDate, endDate, comment } = req.body;

    if (!adults || !children || !roomId || !startDate || !endDate || !comment)
        res.status(400).json({ error: "Required Values not present" });

    try {
        const verifyRoom = await Rooms.findById(roomId);
        if (!verifyRoom) {
            return res.status(500).json({ error: "Room not found" });
        }

        const overlappingBooking = await Booking.findOne({
            roomId, $or: [{ startDate: { $lt: new Date(endDate) }, endDate: { $gt: new Date(startDate) } }]
        })
        if (overlappingBooking) {
            return res.status(500).json({ error: "Room is not available on these dates" });
        }

        const booking = await Booking.create({ adults, children, roomId, startDate, endDate, comment });
        roomId.bookingStatus =.push(booking);
        room.bookingStatus = "Booked";
        await room.save();
        res.status(200).json({ message: "Booking created successfully ", room, bookingId: { booking._id, booking } });

    }
    catch (e) {
        res.status(500).json({ error: 'Internal Server Error' });
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
        res.status(404).json({ error: "Room not found" });
    }
    catch (e) {
        res.status(500).json({ error: "Internal server error" });
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

        res.status(200).json({ message: "Booking canceled and room status updated", room });
    } 
    catch (e) {
        res.status(500).json({ error: 'Internal Server Error' });
    }

}
