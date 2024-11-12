import React, { useEffect, useState } from 'react';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Rooms() {
  const nav = useNavigate();
  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/room');
        if (response.status == 200) {
          setRoomData(response.data);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <Header />
      </div>
      <br />
      <div>
        <h1 className="pl-20 text-lex text-[30px]">Rooms Available</h1>
      </div>
      <br />
      <div className="pl-15 pr-15 grid grid-cols-2 gap-10">
        {roomData.length == 0 && <div>No data to display</div>}
        {roomData.map((val, index) => (
          <>
            <div key={index} className="flex flex-col items-center justify-center">
              <img className="h-70 w-50" src={"data:image/png;base64," + val.imageUrl} alt={val.roomType} />
              <p className="text-[20px] font-bold mt-4">{val.roomType + " Room"}<br />{"Rs." + val.price}</p>
              <button type="button" className="text-white bg-black py-2 px-4 rounded mt-2" onClick={() => { nav(`/${val.roomType}`, { state: { room: val } })}}>Book Now</button>
            </div>
          </>
        ))}
      </div>
      <br />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Rooms;
