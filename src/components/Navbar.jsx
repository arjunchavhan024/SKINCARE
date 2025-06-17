import React from "react";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <nav className="bg-[#EFF5E1] navbar border-b border-gray-200 py-4 px-6 md:px-12 flex items-center justify-between font-sans">
      {/* Logo */}
      <div className="text-xl logo font-bold tracking-wide text-gray-900">
        SKINCARE
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-800">
        <li className="cursor-pointer">All Products</li>
        <li className="cursor-pointer">Serum</li>
        <li className="cursor-pointer">Sunscreen</li>
        <li className="cursor-pointer">Bundle</li>
      </ul>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        {/* Cart */}
        <div className="relative flex items-center space-x-1 group cursor-pointer icon-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
          </svg>
        </div>

        {/* Wishlist */}
        <div className="icon-wrapper cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              d="M12 21C12 21 4 14 4 8.5C4 5.46243 6.46243 3 9.5 3C11.1625 3 12.7375 3.9875 13.5 5.25C14.2625 3.9875 15.8375 3 17.5 3C20.5376 3 23 5.46243 23 8.5C23 14 15 21 15 21H12Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Profile */}
        <div className="icon-wrapper cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5Zm0 2c-3.3 0-10 1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
