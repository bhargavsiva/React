import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  useEffect(() => {
    console.log("useEffect called");
  }, []);

  const onlineStatus = useOnlineStatus();

  const { loggedInUser, setUserName } = useContext(UserContext);

  // Subscribing to store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50 ">
      {/** coloring based on size of it */}
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className=" px-4 ">
            Online Status : {onlineStatus ? "✅" : "🛑"}
          </li>
          <li className=" px-4 ">
            <Link to="/">Home</Link>
          </li>
          <li className=" px-4 ">
            <Link to="/about">About Us</Link>
          </li>
          <li className=" px-4 ">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className=" px-4 ">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className=" px-4 text-xl font-bold">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className=" px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
