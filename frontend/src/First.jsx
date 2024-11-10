import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

function First(){  
        const nav=useNavigate();  
        return (
            
            <div className="flex flex-col items-center justify-center bg-cover bg-center h-screen bg-main_image " >
                <div className="font-lex text-[90px] text-white">
                    Welcome to Casa <br /> 
                        Le Grand Hotel
                </div>                
                <div className='font-lex_sm text-[25px] text-white'>A Place to Experience and Enjoy Life</div><br></br>
                <button className=" bg-white text-black text-[30px] font-bold py-3 px-6 rounded" onClick={()=>{nav('/home')}}>
                    EXPLORE
                </button>
            </div>
        );    
}

export default First;
