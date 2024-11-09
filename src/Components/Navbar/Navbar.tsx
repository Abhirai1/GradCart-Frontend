import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBell } from "react-icons/fa";
import Avatar from "../../Utils/Avatar";

const Navbar: React.FC = () => {
  const userName = "John Doe";
  const firstLetter = userName.charAt(0).toUpperCase();

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-lg font-bold">
          Gradcart
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
      </div>

      <div className="flex items-center max-w-md flex-grow mx-4 w-full">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 pl-10 rounded-md text-gray-800"
          />
          <FaSearch className="w-6 h-6 text-gray-500" />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative">
          <FaBell className="w-6 h-6 text-gray-500" />
        </button>
        <div className="flex items-center space-x-2">
          <span className="hidden sm:block">{userName}</span>
          <Avatar letter={firstLetter} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
