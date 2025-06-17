import React, { useState } from "react";

const faqs = [
  {
    question: "Are your products safe for sensitive skin?",
    answer:
      "Yes! Our products are specially formulated to be gentle and effective for all skin types, including sensitive skin.",
  },
  {
    question: "Are your products cruelty-free?",
    answer:
      "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.",
  },
  {
    question: "What's your return policy?",
    answer:
      "We offer a 30-day return policy for unopened and gently used products. Please contact support for return instructions.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship worldwide. International shipping rates and delivery times may vary based on location.",
  },
  {
    question: "How do I choose the right product?",
    answer:
      "Check our skin type guide or chat with our skincare experts to find the best product for your specific needs.",
  },
];

const FrequentlyAskQuestionPage = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="bg-[#FEFFF4] py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative">
          <img
            src="/media/images/bodylotion.jpg"
            alt="Product"
            className="rounded-2xl w-full"
          />
          <div className="absolute bottom-4 left-4 bg-[#F1F3E8] px-4 py-2 rounded-full flex items-center space-x-3 shadow-md">
            <div className="bg-[#2E3D34] text-white rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636a9 9 0 11-12.728 0M12 11v2m0 4h.01"
                />
              </svg>
            </div>
            <span className="text-sm text-[#2E3D34] font-medium">
              24/7 We’re Here to Help You
            </span>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <button className="flex cursor-pointer items-center text-sm border px-4 py-2 rounded-full border-[#2E3D34] text-[#2E3D34] mb-4">
            <span className="h-2 w-2 bg-[#2E3D34] rounded-full mr-2"></span>
            Frequently Asked Question
          </button>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#2E3D34] mb-8">
            Answers to Your Skincare Questions, All in One Place.
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#C6C9BE] rounded-md bg-white transition-all duration-300 ease-in-out"
              >
                <div
                  className="flex justify-between items-center cursor-pointer px-4 py-3"
                  onClick={() => toggleFAQ(index)}
                >
                  <p className="text-sm md:text-base font-medium text-[#2E3D34]">
                    {faq.question}
                  </p>
                  <span className="text-xl text-[#2E3D34]">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>

                {/* Smooth expanding answer */}
                <div
                  className={`px-4 overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "max-h-40 opacity-100 mt-1 mb-3"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-xs text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskQuestionPage;
