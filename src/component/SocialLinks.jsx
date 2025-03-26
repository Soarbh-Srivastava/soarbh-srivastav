// components/SocialLinks.js
import React from "react";

const SocialLinks = () => {
  return (
    <div className="mt-6 flex items-center gap-x-5 sm:mt-8 sm:gap-x-7">
      <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"></span>
      <a
        href="www.linkedin.com/in/srivastav-soarbh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="group relative flex cursor-pointer gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-linkedin h-[14px] w-[14px] sm:h-4 sm:w-4"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect width="4" height="12" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          <p className="text-xs sm:text-sm">Linkedin</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-external-link h-[14px] w-[14px] sm:h-4 sm:w-4"
          >
            <path d="M15 3h6v6"></path>
            <path d="M10 14 21 3"></path>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          </svg>
          <span className="absolute bottom-0 left-0 h-[1px] w-full scale-x-0 transform bg-current transition-transform duration-300 group-hover:scale-x-100"></span>
        </div>
      </a>

      <a
        href="https://github.com/Soarbh-Srivastava"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="group relative flex cursor-pointer gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-github h-[14px] w-[14px] sm:h-4 sm:w-4"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
          <p className="text-xs sm:text-sm">Github</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-external-link h-[14px] w-[14px] sm:h-4 sm:w-4"
          >
            <path d="M15 3h6v6"></path>
            <path d="M10 14 21 3"></path>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          </svg>
          <span className="absolute bottom-0 left-0 h-[1px] w-full scale-x-0 transform bg-current transition-transform duration-300 group-hover:scale-x-100"></span>
        </div>
      </a>
    </div>
  );
};

export default SocialLinks;
