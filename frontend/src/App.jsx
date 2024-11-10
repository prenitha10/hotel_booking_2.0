import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import First from "./First";
import Rooms from "./Rooms";
import Deluxe from "./Deluxe";
import Login from "./Login";
import Signup from "./Signup";
import Standard from "./Standard";
import Superior from "./Superior";
import Family from "./Family";
import Business from "./Business";
import Penthouse from "./Penthouse";
import Restaurant from "./Restaurant";
import Book from "./Book";

export default function App(){
    return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<First/>}/>
            <Route path="/home" element={<Home/>}/>  
            <Route path="/rooms" element={<Rooms/>}/>   
            <Route path="/deluxe" element={<Deluxe/>}/>
            <Route path="/standard" element={<Standard/>}/>
            <Route path="/superior" element={<Superior/>}/>
            <Route path="/family" element={<Family/>}/>
            <Route path="/business" element={<Business/>}/>
            <Route path="/penthouse" element={<Penthouse/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/restaurant" element={<Restaurant/>}/> 
            <Route path="/book" element={<Book/>}/>         
      </Routes>
    </BrowserRouter>
    );
}