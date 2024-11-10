import React from 'react';
import './index.css'; 
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils} from '@fortawesome/free-solid-svg-icons';
function Restaurant(){
    const nav=useNavigate();
    return(
    <>
        <div >
            <Header/>
        </div>
        <div className="bg-restaurant bg-cover h-[600px] object-cover text-center p-6 flex justify-center items-center">
            <div className="text-white font-bold text-[25px]">
                <div className="flex items-center justify-center mb-4">
                    <FontAwesomeIcon icon={faUtensils} size="4x" className="mr-2" />
                    <h1 className="text-4xl font-bold">RESTAURANT</h1>
                </div>
                <span className="block text-xl mb-4">Enjoy Our Delicious Meals</span>
                <button type="submit" className="text-white rounded-lg font-bold bg-red-500 hover:bg-red-600 py-3 px-8" onClick={() => { nav('/book') }}        >
                    Book Now
                </button>
             </div>
        </div>
        <br></br>


        <div className="text-black text-[25px]">
            <h1>About Us</h1>
            <p className="p-4">Welcome to the Grand Hotel, where luxury meets comfort in the heart of Chennai. With a legacy of excellence since 2004, we offer personalized service and elegantly appointed accommodations. Enjoy our exceptional dining, state-of-the-art amenities, and breathtaking views. At the Grand Hotel, your unforgettable experience awaits. We look forward to welcoming you!</p>
        </div>
        <div>
            <Footer/>
        </div>
    </>   
    );
}
export default Restaurant;