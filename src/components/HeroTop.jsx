import React from "react";
import "../styles/HeroTop.css";

const HeroTop = () => {
  return (
    <section className="bg-[#EFF5E1] py-12 px-4 md:px-20 flex flex-col md:flex-row items-center justify-between min-h-[60vh] overflow-hidden">
      {/* Left Paragraph */}
      <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0 hero-reveal hero-delay-1">
        <p className="text-sm text-gray-700 leading-relaxed max-w-xs mx-auto md:mx-0">
          Transform your skincare routine with premium products that restore,
          protect, and enhance your natural glow every day.
        </p>
      </div>

      {/* Center Heading */}
      <div className="w-full md:w-1/3 text-center mb-6 md:mb-0 hero-reveal hero-delay-2">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 tracking-tight">
          GLOW
          <br />
          NATUR-
          <br />
          ALLY
        </h1>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-end hero-reveal hero-delay-3">
        <img
          src="media/images/plvim.jpg"
          alt="Product"
          className="hero-top-img w-32 md:w-40 border rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroTop;
