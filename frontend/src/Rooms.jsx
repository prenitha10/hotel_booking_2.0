import React from 'react';
import './index.css'; 
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function Rooms() {
    const nav=useNavigate();
    return (
        <div>
            <div>
                <Header/>
            </div>
            <br />
            <div>
                <h1 className="pl-20 text-lex text-[30px]">Rooms Available</h1>
            </div>
            <br />
            <div className="pl-15 pr-15 grid grid-cols-2 gap-10">
                <div className="flex flex-col items-center justify-center">
                    <img className="h-70 w-50" src="/src/images/deluxe.png" alt="Deluxe Room" />
                    <p className="text-[20px] font-bold mt-4">Deluxe Room<br />Rs.2000</p>
                    <button type="button" className="text-white bg-black py-2 px-4 rounded mt-2" onClick={()=>{nav('/deluxe')}}>Book Now</button>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <img className="h-70 w-50" src="/src/images/standard.png" alt="Standard Room" />
                    <p className="text-[20px] font-bold mt-4">Standard Suite<br />Rs.2500</p>
                    <button type="button" className="text-white bg-black py-2 px-4 rounded mt-2" onClick={()=>{nav('/standard')}}>Book Now</button>
                </div>
            
                <div className="flex flex-col items-center justify-center ">
                    <img className="h-70 w-50" src="/src/images/superior.png" alt="Superior Suite" />
                    <p className="text-[20px] font-bold mt-4">Superior Suite<br />Rs.3000</p>
                    <button type="button" className="text-white bg-black py-2 px-4 rounded mt-2" onClick={()=>{nav('/superior')}}>Book Now</button>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <img className="h-70 w-50" src="/src/images/family.png" alt="Family Suite" />
                    <p className="text-[20px] font-bold mt-4">Family Suite<br />Rs.3500</p>
                    <button type="button" className="text-white bg-black py-2 px-4 rounded mt-2" onClick={()=>{nav('/family')}}>Book Now</button>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <img className="h-70 w-50" src="/src/images/business.png" alt="Business Suite" />
                    <p className="text-[20px] font-bold mt-4">Business Suite<br />Rs.5000</p>
                    <button type="button" className="text-white bg-black py-2 px-4 rounded mt-2" onClick={()=>{nav('/business')}}>Book Now</button>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <img className="h-70 w-50" src="/src/images/penthouse.png" alt="Penthouse Suite" />
                    <p className="text-[20px] font-bold mt-4">Penthouse Suite<br />Rs.10000</p>
                    <button type="button" className="text-white bg-black py-2 px-4 rounded mt-2" onClick={()=>{nav('/penthouse')}}>Book Now</button>
                </div>
            </div>
            <br />
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default Rooms;
