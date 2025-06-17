import React from "react";

const HeroTop = () => {
  return (
    <section className="bg-[#EFF5E1] py-12 px-4 md:px-20 flex flex-col md:flex-row items-center justify-between min-h-[80vh]">
      {/* Left Paragraph */}
      <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
        <p className="text-sm text-gray-700 leading-relaxed max-w-xs mx-auto md:mx-0">
          Transform your skincare routine with premium products that restore,
          protect, and enhance your natural glow every day.
        </p>
      </div>

      {/* Center Heading */}
      <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 tracking-tight">
          GLOW
          <br />
          NATUR-
          <br />
          ALLY
        </h1>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-end">
        <img
          src=".\public\media\images\plvim.jpg" // Replace with actual image path in public or import
          alt="Product"
          className="w-32 md:w-40 border border-green-600"
        />
      </div>
    </section>
  );
};

export default HeroTop;
