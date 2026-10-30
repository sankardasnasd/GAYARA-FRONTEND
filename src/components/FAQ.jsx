import React, { useState } from 'react';

const faqData = [
  {
    question: "1. How do I place an order?",
    answer: "Choose your favourite dress, select the available size and colour, add it to your bag, and complete checkout."
  },
  {
    question: "2. How do I choose my size?",
    answer: "Refer to the size chart on the product page. If you're unsure, contact our customer support before ordering."
  },
  {
    question: "3. Where do you deliver?",
    answer: "Delivery availability depends on your serviceable PIN code. Check availability before placing your order."
  },
  {
    question: "4. How can I track my order?",
    answer: "Use the tracking link shared after dispatch, or visit My Orders if your account supports order tracking."
  },
  {
    question: "5. Can I cancel an order?",
    answer: "Cancellation depends on your order status and the cancellation policy. Please contact us as soon as possible."
  },
  {
    question: "6. Can I return or exchange a dress?",
    answer: "Eligible products can be returned or exchanged according to our published policy. Check the policy before placing an order."
  },
  {
    question: "7. Are the dresses handmade?",
    answer: "Product pages will clearly identify handmade items and the specific handcrafted details they contain. Not every product will necessarily be handmade."
  },
  {
    question: "8. How can I contact GAYARA?",
    answer: "Contact us through our official email, WhatsApp, or Instagram account listed on the website."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-[#FDFBF7] text-[#2C2C24] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-[#6B705C] mb-3">Help & Assistance</p>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#3F4228] tracking-wide mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed font-light">
            Find answers to common questions about orders, sizing, delivery, and styling with GAYARA.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-white border border-[#EBE7DE] rounded-xl transition-all duration-200 overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-5 px-6 text-left flex justify-between items-center gap-4 hover:bg-[#FAF9F5] transition-colors"
                >
                  <span className="text-base font-serif text-[#3F4228] font-medium">
                    {item.question}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-[#F3EFE6] flex items-center justify-center shrink-0 text-[#3F4228]">
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-gray-600 leading-relaxed border-t border-[#F5F2EA]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Callout */}
        <div className="mt-12 p-8 bg-[#F8F5EE] border border-[#E9E4D9] rounded-2xl text-center">
          <h3 className="text-lg font-serif text-[#3F4228] mb-2">Still have questions?</h3>
          <p className="text-xs text-gray-600 mb-5">
            Can't find the answer you're looking for? Reach out to our dedicated support team.
          </p>
          <a
            href="#contact"
            className="inline-block px-7 py-3 bg-[#4A4A22] hover:bg-[#3B3B1B] text-[#F9F7F1] rounded-lg text-xs uppercase tracking-[0.2em] font-medium transition-colors"
          >
            Contact Support
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;