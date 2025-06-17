import React, { useRef } from "react";
import { ArrowRight, ArrowLeft, ShoppingCart } from "lucide-react";
import "../styles/BestSellingProductPage.css";

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

const BestSellingProductPage = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth * 0.85;

    if (window.innerWidth < 1024) {
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#FEFFF4] py-10 px-4 md:px-20">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-col md:flex-row items-center justify-between max-w-7xl mx-auto mb-10 text-center md:text-left">
        {/* Left Button */}
        <button className="flex items-center cursor-pointer border border-gray-400 rounded-full px-4 py-1 text-sm font-medium gap-2">
          <span className="w-2 h-2 bg-[#1b2b23] rounded-full" />
          Best Selling Products
        </button>

        {/* Title */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
          Skincare That Brings Out <br className="hidden md:block" />
          Your Natural Radiance
        </h2>

        {/* Arrows */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => scroll("left")}
            className="arrow-button border cursor-pointer text-gray-700"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            className=" cursor-pointerarrow-button filled"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Scrollable Cards */}
      <div ref={scrollRef} className="product-carousel max-w-7xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="product-card">
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
