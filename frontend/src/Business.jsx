import React, { useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBed, faWifi, faTv, faCoffee, faShower, faConciergeBell, faBriefcase, faUtensils, faBroom ,faLock,faWindowMaximize} from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import Footer from './Footer';
import Datepicker from "react-tailwindcss-datepicker";


const profile = [
    {
        label: "4-5 People",
        icon: <FontAwesomeIcon icon={faUsers} size="1x" />,
    },
    {
        label: "2 King Size Bed",
        icon: <FontAwesomeIcon icon={faBed} size="1x" />,
    },
    {
        label: "Complimentary high-speed Wi-Fi",
        icon: <FontAwesomeIcon icon={faWifi} size="1x" />,
    },
    {
        label: "Flat-screen TV",
        icon: <FontAwesomeIcon icon={faTv} size="1x" />,
    },
    {
        label: "Mini-bar and coffee/tea maker",
        icon: <FontAwesomeIcon icon={faCoffee} size="1x" />,
    },
    {
        label: "En-suite bathroom with luxury toiletries",
        icon: <FontAwesomeIcon icon={faShower} size="1x" />,
    },
    {
        label: "24/7 room service",
        icon: <FontAwesomeIcon icon={faConciergeBell} size="1x" />,
    },
    {
        label: "Work desk and comfortable seating area ",
        icon: <FontAwesomeIcon icon={faBriefcase} size="1x" />,
    },
    {
        label: "Complimentary breakfast",
        icon: <FontAwesomeIcon icon={faUtensils} size="1x" />,
    },
    {
        label: "Daily housekeeping",
        icon: <FontAwesomeIcon icon={faBroom} size="1x" />,
    },
    {
        label: "In-room safe",
        icon: <FontAwesomeIcon icon={faLock} size="1x" />,
    },
    {
        label: "Private Balcony",
        icon: <FontAwesomeIcon icon={faWindowMaximize} size="1x" />,
    }
];
const guestOptions = [
    { label: "Adults", key: "adults" },
    { label: "Children", key: "children" },
    { label: "Rooms", key: "rooms" }
];

function Business() {
    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });
    const[counts,setCounts]=useState({adults:0,children:0,rooms:1})
    const increment =(key)=>{
        setCounts((prev=>({...prev,[key]:prev[key]+1})));
    }
    const decrement=(key)=>{
        if(counts[key]>0){
            setCounts((next=>({...next,[key]:next[key]-1})));
        }
    }

    return (
        <div>
            <Header />

            <div>
                <p className="p-2 text-[30px] font-bold text-center">Business Suite</p>
            </div>
            <div className="pl-10 pr-10 grid grid-cols-2 gap-10">
                <div className="flex flex-col items-center justify-center border-2 border p-4 rounded-lg">
                    <img className="h-80 w-120" src="/src/images/business.png" alt="Business Suite" />
                    <p className="text-[15px] text-center mt-3">
                        Stay productive and comfortable in our Business Suite, featuring a spacious work area, high-speed internet, modern amenities, and sleek design for your convenience.</p>
                    <p className="text-[20px] text-center font-bold">Amenities</p>
                    <div>
                        {profile.map((val, index) => (
                            <div key={index} className="flex justify-center space-x-5">
                                {val.icon}<span>{val.label}</span>
                            </div>
                        ))}
                    </div>
                    <p className="font-bold">Rs.5000/- only with taxes</p>
                </div>
                <div className="flex flex-col items-center justify-center border-2 border p-4 rounded-lg bg-booking">
                    <div className="flex items-center justify-center bg-black text-white opacity-70 p-4 rounded-md w-7/8 h-4/5">
                    
                        <form className="max-w-sm mx-auto">
                            <h1 className="text-center font-bold">BOOKING</h1>
                            <label className="text-lex text-white font-medium font-bold">Guests</label><br></br>
                            <div className="space-y-4">
                                {guestOptions.map((option) => (
                                <div key={option.key} className="space-x-4">
                                    <label className="text-white">{option.label}:</label>
                                    <button onClick={() => decrement(option.key)} type="button" className="px-2 bg-gray-500 text-white">-</button>
                                    <span className="px-4">{counts[option.key]}</span>
                                    <button onClick={() => increment(option.key)} type="button" className="px-2 bg-gray-500 text-white">+</button>
                                </div>
                                ))}
                            </div>
                            <br></br>
                            <label className="text-lex text-white font-medium font-bold">Start Date to End Date</label>
                            <Datepicker id="datepicker" toggle className="w-4/5 text-black bg-gray-700" displayFormat="DD/MM/YYYY" useRange={false} value={value} onChange={newValue => setValue(newValue)} showFooter={true} showShortcuts={true} configs={{shortcuts: {today: "Today",  currentMonth: "CurrentMonth"}, footer: { cancel: "Cancel",   apply: "Apply"  }}} />
                            <br></br>
                            <label className="text-lex text-white font-medium font-bold">Customer Requests and Inquiries</label>
                            <textarea id="message" rows="5" className="p-2.5 w-full text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a Comment...." ></textarea>
                            <br></br>
                            <button type="submit" className="w-full bg-red-600 text-white mt-4 p-2 rounded-lg font-bold"> Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <br />
            <Footer />
        </div>
    );
}

export default Business;