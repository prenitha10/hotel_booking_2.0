import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBed, faWifi, faTv, faShower, faConciergeBell, faUtensils, faBroom } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import Footer from './Footer';
import Datepicker from "react-tailwindcss-datepicker";
import moment from 'moment';
import axios from 'axios';

const guestOptions = [
  { label: "Adults", key: "adults" },
  { label: "Children", key: "children" },
  { label: "Rooms", key: "rooms" }
];

function RoomPage() {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: moment().add(1, 'days').toDate()
  });
  const location = useLocation();
  const { room } = location.state || {};
  const [counts, setCounts] = useState({ adults: 0, children: 0, rooms: 1 });
  const [comment, setComment] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);

  const increment = (key) => {
    setCounts(prev => ({ ...prev, [key]: prev[key] + 1 }));
  };

  const decrement = (key) => {
    if (counts[key] > 0) {
      setCounts(next => ({ ...next, [key]: next[key] - 1 }));
    }
  };

  const handleDateChange = (newValue) => {
    if (newValue && newValue.startDate && newValue.endDate) {
      setValue({
        startDate: new Date(newValue.startDate), 
        endDate: new Date(newValue.endDate)
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/bookRoom', {
        adults: counts.adults,
        children: counts.children,
        roomId: room._id,
        rooms: counts.rooms,
        startDate: moment(value.startDate).format("DD-MM-YYYY"),
        endDate: moment(value.endDate).format("DD-MM-YYYY"),
        comment: comment
      });

      if (response.status === 200) {
        setSuccessMessage(true); // Show success message

        // Hide success message after 2 seconds
        setTimeout(() => {
          setSuccessMessage(false);
        }, 2000);
      }
    } catch (error) {
      console.error("Error during booking:", error);
    }
  };


  return (
    <div>
      <Header />
      <div>
        <p className="p-2 text-[30px] font-bold text-center">{room.roomType + " Room"}</p>
      </div>
      <div className="pl-10 pr-10 grid grid-cols-2 gap-10">
        <div className="flex flex-col items-center justify-center border p-4 rounded-lg">
          <img className="h-80 w-120" src={"data:image/png;base64," + room.imageUrl} alt="Deluxe Room" />
          <p className="text-[15px] text-center mt-3">
            {room.description}
          </p>
          <p className="text-[20px] text-center font-bold">Amenities</p>
          <div>
            {room.amenities.map((val, index) => (
              <div key={index} className="flex justify-center space-x-5">
                <ul>{val}</ul>
              </div>
            ))}
          </div>
          <p className="font-bold">{"Rs. " + room.price + " only with taxes"}</p>
        </div>
        <div className="flex flex-col items-center justify-center border p-4 rounded-lg bg-booking">
          <div className="flex items-center justify-center bg-black text-white opacity-70 p-4 rounded-md w-7/8 h-4/5">
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
              <h1 className="text-center font-bold">BOOKING</h1>
              <label className="text-lex text-white mb-2 text-2xl">Guests</label><br></br>
              <div className="space-y-4">
                {guestOptions.map((option) => (
                  <div key={option.key} className="justify-center items-center space-x-4">
                    <label className="text-white">{option.label}:</label>
                    <button onClick={() => decrement(option.key)} type="button" className="px-2 bg-gray-500 text-white">-</button>
                    <span className="px-4">{counts[option.key]}</span>
                    <button onClick={() => increment(option.key)} type="button" className="px-2 bg-gray-500 text-white">+</button>
                  </div>
                ))}
              </div>
              <br />
              <label className="text-lex text-white font-bold">Start Date to End Date</label>
              <Datepicker id="datepicker" toggle className="w-4/5 text-black bg-gray-700" displayFormat="DD/MM/YYYY" useRange={false} onChange={newValue => setValue(newValue)} showFooter={true} showShortcuts={true} configs={{ shortcuts: { today: "Today", currentMonth: "CurrentMonth" }, footer: { cancel: "Cancel", apply: "Apply" } }} />
              <br />
              <label className="text-lex text-white font-bold">Customer Requests and Inquiries</label>
              <textarea id="message" rows="5" value={comment} className="p-2.5 w-full text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" onChange={(e) => setComment(e.target.value)} placeholder="Leave a Comment...."></textarea>
              <br />
              <button type="submit" className="w-full bg-red-600 text-white mt-4 p-2 rounded-lg font-bold">Submit</button>
            </form>
      {successMessage && (
        <div className="success-message">
          Booking Successful!
        </div>
      )}
      
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default RoomPage;
