import React from "react";

const WhyOurProductPage = () => {
  return (
    <section className="bg-[#FEFFF4] px-6 py-12 md:px-20 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <button className="flex items-center gap-2 bg-white border border-gray-300 rounded-full px-4 py-1 text-sm font-medium">
            <span className="w-2 h-2 bg-black rounded-full"></span>
            Why Our Products
          </button>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            YOUR SKIN DESERVES
            <br />
            THE BEST CARE.
          </h2>

          <p className="text-gray-600 max-w-md">
            Discover a curated collection of skincare products designed to
            rejuvenate, protect, and pamper your skin. Explore our rage crafted
            with love backed by science, and inspired by nature.
          </p>

          {/* Features */}
          <div className="space-y-6">
            {/* Feature 1 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                <span className="text-xl font-bold text-gray-400 mr-2">01</span>
                Bio Ingredients
              </h3>
              <p className="text-gray-600 text-sm ml-8">
                Get naturally beautiful and transform with our bio ingredients
                creams for healthy, radiant skin.
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                <span className="text-xl font-bold text-gray-400 mr-2">02</span>
                Everything Natural
              </h3>
              <p className="text-gray-600 text-sm ml-8">
                Pure ingredients for pure skin. The Perfect solution for your
                skin care needs.
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                <span className="text-xl font-bold text-gray-400 mr-2">03</span>
                All Handmade
              </h3>
              <p className="text-gray-600 text-sm ml-8">
                Made with love and care. Just for you. Give your skin the tender
                loving care it deserves.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src="/media/images/towelgirl.png"
            alt="Skincare Model"
            className="rounded-xl w-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-[#ecf4dc] text-gray-800 px-4 py-2 rounded-full flex items-center gap-2 shadow-md text-sm">
            <span className="bg-white p-1 rounded-full border">
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c0-1.104-.896-2-2-2s-2 .896-2 2 .896 2 2 2 2-.896 2-2z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v1m0 14v1m8-8h1m-14 0H4m13.657-5.657l-.707.707m-10.607 0l-.707-.707m12.02 12.02l-.707-.707m-10.607 0l-.707.707"
                />
              </svg>
            </span>
            <div>
              <div className="font-semibold">Best Skin Care Product</div>
              <div className="text-xs">Award Winning</div>
            </div>
          </div>

          {/* Footer Text */}
          <div className="flex justify-between text-xs text-gray-500 mt-4 px-1">
            <span>SINCE 2001</span>
            <span className="underline cursor-pointer">LEARN MORE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOurProductPage;
