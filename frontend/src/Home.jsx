import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './index.css'; 
import Header from './Header';
import Footer from './Footer';

function Home(){
    return(
        <div>  
            <div>
                <Header />
            </div>

            <div> 
                <Carousel fade > 
                    <Carousel.Item>
                        <img className="h-150 w-full object-cover" src="\src\images\sildeshow1.png" alt="First slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="h-150 w-full object-cover" src="\src\images\slideshow2.png" alt="Second slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="h-150 w-full object-cover" src="\src\images\slideshow3.png" alt="Third slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="h-150 w-full object-cover" src="\src\images\slideshow4.png" alt="Fourth slide"/>
                    </Carousel.Item>
                </Carousel>
            </div>        
            <div className="p-4"> 
                <div className="font-lex text-[30px] font-bold mb-6">
                    About Us
                </div>
                <div className="pl-10 pr-10 font-lex_sm text-black"> 
                    Welcome to Casa Le Grand Hotel, your serene retreat in Chennai. Since 2004, we’ve been dedicated to providing exceptional hospitality and unforgettable experiences. Enjoy our comfortable accommodations, modern amenities, and personalized service. Committed to sustainability, we prioritize eco-friendly practices to make your stay enjoyable and responsible. We look forward to welcoming you!
                </div>
            </div>
            <div className="p-4">
                <div className="font-lex text-[30px] font-bold mb-6">
                    Our Facilities
                </div>
                <div className="flex flex-row font-lex_sm text-black space-x-8">
                    <div className="flex flex-col rounded-lg">
                        <img className="h-50 w-400 rounded-lg" src="\src\images\fitness.png"></img>
                        <h3 className='m-2'>Fitness Facilities</h3>
                        <p className="text-[15px]">A well-equipped gym or fitness center allows guests to maintain their workout routines including cardio machines, weights, and group classes.</p>
                    </div>
                    <div className="flex flex-col">
                        <img className="h-50 w-400 rounded-lg" src="\src\images\spa.png"></img>
                        <h3 className='m-2'>Spa and Wellness</h3>
                        <p className="text-[15px]">Spa services provide a range of treatments, from massages to facials, ensuring relaxation and rejuvenation including amenities like saunas and hot tubs.</p>
                    </div>
                    <div className="flex flex-col">
                        <img className="h-50 w-400 rounded-lg" src="\src\images\swimming.png"></img>
                        <h3 className='m-2'>Recreational Activities</h3>
                        <p className="text-[15px]">Swimming pools, both indoor and outdoor, offer relaxation and leisure for all ages. Sports facilities like tennis or basketball courts cater to active guests.</p>
                    </div>
                    <div className="flex flex-col rounded-lg">
                        <img className="h-50 w-400" src="\src\images\pet_friendly.jpg"></img>
                        <h3 className='m-2'>Pet Friendly</h3>
                        <p className="text-[15px]">Pet amenities cater to travelers with furry companions, ensuring they feel welcome. Services may include pet-sitting and designated play areas.</p>
                    </div>
                    <div className="flex flex-col">
                        <img className="h-50 w-400 rounded-lg" src="\src\images\meetings.jpg"></img>
                        <h3 className='m-2'>Meeting Spaces</h3>
                        <p className="text-[15px]">Banquet halls and outdoor venues provide versatile options for weddings and events. Customized setups make each gathering special and memorable.</p>
                    </div>
                    <div className="flex flex-col">
                        <img className="h-50 w-400 rounded-lg" src="\src\images\gardens.jpg"></img>
                        <h3 className='my-2'>Gardens</h3>
                        <p className="text-[15px]">Experience serene garden spaces at our hotel, where lush greenery and peaceful surroundings offer a perfect escape amidst nature.</p>
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}
export default Home;


  
