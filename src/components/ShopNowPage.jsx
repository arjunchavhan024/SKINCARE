import React from "react";

const ShopNowPage = () => {
  return (
    <div className="bg-[#FEFFF4] min-h-screen m-0 p-0 lg:flex hidden items-center justify-center">
      <div className="relative w-full max-w-6xl rounded-2xl overflow-hidden shadow-lg">
        <img
          src="/media/images/leafgirl.png"
          alt="Skincare Product"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-end pb-16 px-4 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-medium mb-4">
            Feel Beautiful Inside and Out <br /> with Every Product.
          </h1>
          <button className="mt-4 cursor-pointer px-6 py-2 rounded-full bg-white text-black font-medium shadow hover:bg-gray-100 transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopNowPage;
