// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1D2E28] text-white px-6 py-16 md:px-20 relative overflow-hidden">
      {/* Background text if needed */}
      <div className="absolute text-[180px] font-bold text-[#1D2E28] opacity-10 -z-10 bottom-0 left-0 whitespace-nowrap hidden md:block">
        SKINCARE
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-medium leading-snug mb-6">
            Join The Skincare <br /> Community Now.
          </h2>
          <div className="flex space-x-10 mt-10 text-sm text-[#E4E4E4]">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-between">
          <div className="text-sm">
            <p className="text-[#D5D5D5] mb-2">Get in Touch</p>
            <p className="text-2xl md:text-3xl text-white font-light">
              contact.skincare.com
            </p>
          </div>
          <div className="flex space-x-10 mt-10 text-sm text-[#E4E4E4]">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
