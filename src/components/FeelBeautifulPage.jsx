import React from "react";

const FeelBeautifulPage = () => {
  return (
    <div className="bg-[#FEFFF4] min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <h1 className="text-2xl md:text-4xl text-[#2E3D34] font-medium text-center mb-8">
        Feel Beautiful Inside and Out
        <br className="hidden md:block" /> with Every Product.
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        <button className="bg-[#2E3D34] text-white px-5 py-2 rounded-full text-sm font-medium">
          NEW ARRIVAL
        </button>
        <button className="border border-[#2E3D34] text-[#2E3D34] px-5 py-2 rounded-full text-sm font-medium hover:bg-[#2E3D34] hover:text-white transition">
          CLEANSING
        </button>
        <button className="border border-[#2E3D34] text-[#2E3D34] px-5 py-2 rounded-full text-sm font-medium hover:bg-[#2E3D34] hover:text-white transition">
          ACNE FIGHTER
        </button>
        <button className="border border-[#2E3D34] text-[#2E3D34] px-5 py-2 rounded-full text-sm font-medium hover:bg-[#2E3D34] hover:text-white transition">
          ANTI AGING
        </button>
      </div>
    </div>
  );
};

export default FeelBeautifulPage;
