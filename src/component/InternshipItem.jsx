// components/InternshipItem.js
import React from "react";

const InternshipItem = ({ imageSrc, title, company, date }) => {
  return (
    <div className="flex w-full items-center justify-between rounded-md bg-[#202022] p-4 sm:p-5">
      <div className="flex items-center gap-x-7">
        <div className="relative hidden h-9 w-9 overflow-hidden rounded-full sm:flex">
          <img
            alt="Image"
            loading="lazy"
            decoding="async"
            className="object-cover"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              color: "transparent",
            }}
            srcSet={imageSrc}
            src={imageSrc}
          />
        </div>
        <div>
          <p className="text-sm font-semibold sm:text-base">{title}</p>
          <p className="text-xs text-zinc-400 sm:text-sm">{company}</p>
        </div>
      </div>
      <div>
        <p className="text-xs sm:text-sm">{date}</p>
      </div>
    </div>
  );
};

export default InternshipItem;
