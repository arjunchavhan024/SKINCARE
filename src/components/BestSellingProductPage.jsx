import React from "react";
import { ArrowRight, ArrowLeft, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    title: "ALYA SKIN CLEANSER.",
    price: "$29.99",
    image: "/media/images/alyaskinlotion.jpg", // Replace with your actual image paths
  },
  {
    id: 2,
    title: "RITUAL OF SAKURA.",
    price: "$27.99",
    image: "/media/images/sakura.jpg",
  },
  {
    id: 3,
    title: "THE BODY LOTION.",
    price: "$19.99",
    image: "/media/images/bodylotion.jpg",
  },
];

const BestSellingProductPage = () => {
  return (
    <div className="bg-[#FEFFF4] py-10 px-4 md:px-20">
      {/* Header */}
      <div className="flex items-center justify-between max-w-7xl mx-auto mb-10">
        {/* Left Button */}
        <button className="flex items-center border border-gray-400 rounded-full px-4 py-1 text-sm font-medium gap-2">
          <span className="w-2 h-2 bg-[#1b2b23] rounded-full" />
          Best Selling Products
        </button>

        {/* Title */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 text-center">
          Skincare That Brings Out <br className="hidden md:block" />
          Your Natural Radiance
        </h2>

        {/* Arrows */}
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition">
            <ArrowLeft size={18} />
          </button>
          <button className="w-10 h-10 rounded-full bg-[#1b2b23] text-white flex items-center justify-center hover:bg-[#0f1d17] transition">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-xl overflow-hidden shadow-sm bg-white relative group"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-80 object-cover"
            />

            <div className="flex justify-between items-center p-4">
              <div>
                <h3 className="text-sm font-semibold">{product.title}</h3>
                <p className="text-xs text-gray-500">FROM {product.price}</p>
              </div>
              <button className="p-2 border rounded-md hover:bg-gray-100 transition">
                <ShoppingCart size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellingProductPage;
