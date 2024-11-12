import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faUtensils, faHome, faSignInAlt, faCreditCard} from '@fortawesome/free-solid-svg-icons';
const profile = [
  {
    label: "Home",
    
    icon: <Link to="/home"> <FontAwesomeIcon icon={faHome} size="2x" transform="shrink-4 left-2" color="black" /></Link>
  },
  {
    label: "Rooms",
    icon: <Link to="/rooms"><FontAwesomeIcon icon={faBed} size="2x" transform="shrink-4 left-2" color="black"/></Link>,
  },
  {
    label: "Restaurant",
    icon: <Link to="/restaurant"><FontAwesomeIcon icon={faUtensils} size="2x" transform="shrink-4 left-2" color="black"/></Link>,
  },
  {
    label: "Login",
    icon: <Link to="/login"><FontAwesomeIcon icon={faSignInAlt} size="2x" transform="shrink-4 left-2" color="black"/></Link>,
  },
  {
    label: "Payment",
    icon: <Link to="/#"><FontAwesomeIcon icon={faCreditCard} size="2x" transform="shrink-4 left-2" color="black"/></Link>,
  },

];

function Header() {
  return (
    <>
      <div className="flex flex-row items-center justify-between row-span-5 grid-flow-col bg-gray-50 text-10 p-3">
        {
          profile.map((val, index) => (
            <div className="flex justify-end space-x-2 text-xl font-semibold">
              {val.icon}
              {val.label}
            </div>
          ))
        }
      </div>
    </>
  );
}
export default Header;
