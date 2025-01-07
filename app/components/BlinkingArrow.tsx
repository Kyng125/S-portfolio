import React from "react";

const BlinkingArrow = () => {
  return (
    <div className="fixed top-28 right-4 flex flex-col items-center animate-bounce z-50">
      <span className="text-white font-bold text-sm mb-1">Scroll Down</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-electricPurple"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
};

export default BlinkingArrow;
