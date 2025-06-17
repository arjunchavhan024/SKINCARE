import React from "react";

const HeroBottom = () => {
  return (
    <section className="relative bg-[#EFF5E1] px-4 py-16 flex flex-col items-center justify-center overflow-hidden">
      {/* Background SKINCARE Text */}
      <h1 className="absolute bottom-0 text-[120px] md:text-[180px] font-extrabold text-black tracking-widest pointer-events-none select-none">
        SKINCARE
      </h1>

      {/* Shop Now Button */}
      <div className="mb-6">
        <button className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition">
          Shop Now
        </button>
      </div>

      {/* Image Container */}
      <div className="relative">
        <img
          src=".\public\media\images\avocadogirl.png"
          alt="Promo"
          className="w-72 md:w-96 rounded-[30px] object-cover"
        />

        {/* Floating Link Text */}
        <a
          href="#"
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 rounded-full text-xs shadow-md flex items-center gap-2 hover:underline"
        >
          <img
            src=".\public\media\images\plvim.jpg"
            alt="icon"
            className="w-6 h-6 rounded-full"
          />
          While giving you an invigorating cleansing experience.
        </a>
      </div>
    </section>
  );
};

export default HeroBottom;
