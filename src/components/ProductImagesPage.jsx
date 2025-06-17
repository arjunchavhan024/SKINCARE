import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    title: "ALYA SKIN CLEANSER.",
    price: "$29.99",
    image: "/media/images/alyaskinlotion.jpg",
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

const ProductImagesPage = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth * 0.85;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#FEFFF4] px-4 py-16 relative">
      {/* Arrow Buttons (always visible) */}
      <div className="flex justify-end gap-3 mb-6 max-w-7xl mx-auto">
        <button
          onClick={() => scroll("left")}
          className="w-10 h-10 rounded-full border cursor-pointer border-gray-400 text-gray-700 flex items-center justify-center hover:bg-gray-100 transition"
        >
          <ArrowLeft size={18} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="w-10 h-10 rounded-full cursor-pointer bg-[#2E3D34] text-white flex items-center justify-center hover:bg-[#1f2b25] transition"
        >
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Scrollable Products */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth max-w-7xl mx-auto md:grid md:grid-cols-3 md:overflow-visible md:gap-8"
      >
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-sm flex-shrink-0 w-72 md:w-auto"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-96 object-cover"
            />
            <div className="flex justify-between items-center p-4 bg-[#f9f9f1]">
              <div>
                <h2 className="text-sm font-semibold text-gray-800">
                  {product.title}
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                  FROM {product.price}
                </p>
              </div>
              <button className="bg-[#2E3D34] hover:bg-[#1f2b25] cursor-pointer p-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.293 2.293A1 1 0 007 17h10a1 1 0 001-.707L19 13M7 13l1.5 6h7l1.5-6"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImagesPage;
