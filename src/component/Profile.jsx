// components/Profile.js
import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-col gap-y-2 sm:gap-y-3">
      <div className="relative mb-3 h-40 w-40 overflow-hidden rounded-md sm:h-44 sm:w-44 xl:h-52 xl:w-52">
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
          srcSet="
            image/image_6.png   640w,
            image/image_3.png   750w,
            image/image_5.png   828w,
            image/image_8.png  1080w,
            image/image_7.png  1200w,
            image/image_4.jpg  1920w,
            image/image_15.png 2048w,
            image/image.jpg    3840w
          "
          src="./image/image.jpg"
        />
      </div>
      <h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl">
        Soarbh Srivastava
      </h1>
      <h3 className="text-lg font-semibold text-zinc-300 sm:text-xl xl:text-[22px]">
        Punjab, India
      </h3>
      <p className="mt-2 text-sm text-zinc-500">
        Aspiring software engineer specializing in IoT, blockchain technologies,
        and full-stack development.
      </p>
      <p className="text-sm text-zinc-500">
        Experienced in deploying decentralized applications, optimizing system
        performance, and building IoT-powered autonomous systems. Passionate
        about AI-driven automation and scalable software solutions.
      </p>
    </div>
  );
};

export default Profile;
