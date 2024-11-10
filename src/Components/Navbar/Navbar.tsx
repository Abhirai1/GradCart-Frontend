import React, { useState } from "react";
import { ShoppingCart, Bell, ChevronDown, Search } from "lucide-react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Search Section */}
          <div className="flex items-center flex-1 space-x-8">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">Grad</span>
              <span className="text-xs ml-1 mt-3">
                <span className="italic text-yellow-500 font-medium">cart</span>
              </span>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <input
                  type="text"
                  className="w-full bg-gray-100 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search for Products, Brands and More"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-8">
            {/* Become a Seller */}
            <button className="text-gray-700 hover:text-blue-600 font-medium">
              Become a Seller
            </button>

            {/* User Account */}
            <div className="flex items-center space-x-1 cursor-pointer group">
              <span className="font-medium">Abhishek</span>
              <ChevronDown className="w-4 h-4 text-gray-600 group-hover:text-blue-600" />
            </div>

            {/* Cart */}
            <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
              <ShoppingCart className="w-6 h-6" />
              <span className="font-medium">Cart</span>
            </div>

            {/* Notifications */}
            <button className="relative hover:text-blue-600">
              <Bell className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
