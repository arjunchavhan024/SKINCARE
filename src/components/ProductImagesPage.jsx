// ProductImagesPage.jsx
import React from "react";

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

const ProductImagesPage = () => {
  return (
    <div className="bg-[#FEFFF4] py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover"
            />
            <div className="flex justify-between items-center p-4 bg-[#f9f9f1]">
              <div>
                <h2 className="text-sm font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                  FROM {product.price}
                </p>
              </div>
              <button className="bg-[#2E3D34] hover:bg-[#1f2b25] p-2 rounded-lg">
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
