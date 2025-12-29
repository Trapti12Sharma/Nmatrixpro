import { useState } from "react";
import PropTypes from "prop-types";

export default function FaqSection({ title, faqs }) {
  const [openIndex, setOpenIndex] = useState(0); // first open by default

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gray-50 py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-semibold text-blue-500 mb-8">
          {title}
        </h2>

        {/* FAQ List */}
        <div className="bg-white border rounded">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b last:border-b-0">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-medium text-gray-800">
                    {faq.question}
                  </span>

                  <span className="text-blue-500 text-xl font-bold">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-gray-600 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

FaqSection.propTypes = {
  title: PropTypes.string.isRequired,
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};
