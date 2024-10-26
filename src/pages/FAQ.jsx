import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// FAQ data
const faqData = {
  "General Travel": [
    { question: "How to plan your first trip?", answer: "Start by researching your destination, setting a budget, and booking accommodation and flights in advance." },
    { question: "What to pack for a tropical vacation?", answer: "Pack light, breathable clothing, sunscreen, a hat, and insect repellent." },
    { question: "How to navigate airport customs?", answer: "Ensure you have all your documents ready, declare necessary items, and follow customs guidelines at your destination." }
  ],
  "Booking": [
    { question: "How do I book a trip on the platform?", answer: "Navigate to the 'Destinations' page, select your desired location, and follow the booking steps provided." },
    { question: "Can I cancel or change my booking?", answer: "Yes, bookings can be modified or canceled up to 24 hours in advance." }
  ],
  "Tips for First-Time Travelers": [
    { question: "What are some travel safety tips?", answer: "Keep copies of your documents, avoid flashing valuables, and be aware of your surroundings." },
    { question: "Should I get travel insurance?", answer: "Yes, travel insurance is recommended for unexpected medical expenses and trip cancellations." }
  ],
  "Packing Advice": [
    { question: "How do I pack efficiently?", answer: "Use packing cubes, roll clothes to save space, and make a checklist to avoid overpacking." },
    { question: "What items should I carry in my carry-on?", answer: "Essentials include a travel pillow, important documents, phone charger, and any medications you need." }
  ],
};

// Main FAQ page component
const FAQPage = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-from-blue-100 py-10">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">Frequently Asked Questions</h1>
        {Object.keys(faqData).map((category) => (
          <FAQSection key={category} category={category} faqs={faqData[category]} />
        ))}
      </div>
    </div>
  );
};

// Category section component
const FAQSection = ({ category, faqs }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">{category}</h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

// Single FAQ item with animation
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-left w-full text-blue-900 font-semibold focus:outline-none"
      >
        {question}
        <span className="float-right">{isOpen ? '-' : '+'}</span>
      </button>

      {/* Animate presence to handle the opening and closing of FAQ items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.15 }}
              className="text-gray-700 mt-2"
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQPage;
