import React, { useState } from 'react';
import './index.css';
import Header from './Header';

function Book() {
    const [number, setNumber] = useState(''); 
    const [date, setDate] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted number of people:", number);
        console.log("Submitted date:", date);
        console.log("Customer requests:", message);
    };

    return (   
        <div>
            <Header />
            <div className="bg-book h-screen w-full flex items-center justify-center bg-cover bg-center">
                <div className="bg-black/70 text-white p-8 rounded-md w-2/4 sm:w-96">
                    <form className="mx-auto space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="text-white font-bold text-lg">Number of People</label>
                            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} className="w-full p-3 mt-2 rounded text-black" />
                        </div>
                        <div>
                            <label className="text-white font-bold text-lg">Date</label>
                            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-3 mt-2 rounded text-black" />
                        </div>
                        <div>
                            <label className="text-white font-bold text-lg">Customer Requests</label>
                            <textarea id="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} className="p-2.5 w-full text-black text-sm rounded-lg "  placeholder="Preferred seats ..." ></textarea>
                        </div>
                        <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"  >
                            Book Table
                        </button>
                    </form>
                </div>
            </div>            
        </div>
    );
}

export default Book;
