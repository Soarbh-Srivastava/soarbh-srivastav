// components/ContactButton.js
import React from "react";

const ContactBtn = () => {
  return (
    <button className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#2d2c2d] hover:bg-[#2d2c2d]/70 text-[#ffffff] text-xs sm:text-sm rounded-md h-9 px-5 sm:h-11 sm:px-8">
      Contact
    </button>
  );
};

export default ContactBtn;
