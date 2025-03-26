// components/ProjectItem.js
import React from "react";

const ProjectItem = ({
  imageSrc,
  title,
  description,
  githubLink,
  websiteLink,
}) => {
  return (
    <div className="flex h-[350px] w-full flex-col gap-y-2 rounded-md bg-[#202022] p-4 sm:h-[400px] sm:px-6 sm:py-5">
      <div className="relative h-full w-full overflow-hidden rounded-md">
        <img
          alt="Image"
          loading="lazy"
          decoding="async"
          className="object-cover object-top"
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
      <h3 className="mt-2 text-sm font-semibold sm:mt-4 sm:text-base">
        {title}
      </h3>
      <p className="text-xs text-zinc-400 sm:text-sm">{description}</p>
      <div className="flex gap-x-3">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <div className="group relative flex cursor-pointer gap-x-2">
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
        <a href={websiteLink} target="_blank" rel="noopener noreferrer">
          <div className="group relative flex cursor-pointer gap-x-2">
            <p className="text-xs sm:text-sm">Website</p>
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
    </div>
  );
};

export default ProjectItem;
