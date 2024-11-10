const Rooms = require('../model/Room');

const createRoom = async (req, res) => {
  const {roomId, roomQty, roomType, roomNo} = req.body;

  if(!roomId || !bookingStatus || !roomType || !bookingStatus)
    res.status(400).json({ error : "bad request"});
  try{
    const room = Rooms.findOne({ roomId });
    if(room)
        return res.status()
  } catch(e){
    res.status(500).json({error : 'Internal Server Error'});
  }
}

const bookRoom = async (req, res) => {
  const { adults, children, roomsId, startDate, endDate, comment } = req.body;

  if (!adults || !children || !roomsId || !startDate || !endDate || !comment) 
    res.status(400).json({ error: "Required Values not present" });

  try {

  }
  catch {

  }
}
