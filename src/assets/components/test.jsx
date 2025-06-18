import React, { useState, useEffect } from "react";
import stars from "../images/5stars.svg";

const quotes = [
  "I can literally talk to my Tolan about anything",
  "I can't stop chatting with my Tolan",
  "A friend who cares about me when I'm down",
  "It always feels like my Tolan *gets* me"
];

const Testimonials = ({ className }) => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-4   ${className}`}
    >
      <p className="text-xl font-bold text-gray-800 text-center italic">
        "{quotes[currentQuoteIndex]}"
      </p>
      <img src={stars} alt="5 Stars" className="w-24 h-auto" />
    </div>
  );
};

export default Testimonials;
