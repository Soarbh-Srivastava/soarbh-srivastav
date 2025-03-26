// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <div className="space-y-2">
      <p className="text-center text-xs text-zinc-500">
        Design inspired by{" "}
        <a
          href="https://dribbble.com/syahrulfalah"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400"
        >
          Syahrul Falah
        </a>{" "}
        and{" "}
        <a
          href="https://dribbble.com/NicolasMzrd"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400"
        >
          Nicolas Meuzard
        </a>
      </p>
      <p className="text-center text-xs text-zinc-500">
        © 2025 Soarbh Srivastava. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
