import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import First from "./First";
import Rooms from "./Rooms";
import Login from "./Login";
import Signup from "./Signup";
import Restaurant from "./Restaurant";
import Book from "./Book";
import AxiosSetup from "./AxiosSetup";
import RoomPage from "./Deluxe";

export default function App() {
  return (
    <BrowserRouter>
    <AxiosSetup/>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path=":roomType" element={<RoomPage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </BrowserRouter>
  );
}
