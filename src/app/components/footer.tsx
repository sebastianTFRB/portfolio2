import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-5 md:px-40 gap-5">
        <a
          href="/my-skills"
          className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white"
        >
          Learn more
        </a>
        <a
          href="/projectos"
          className="rounded-[20px] group relative bg-transparent px-5 border border-white py-3 text-lg text-white"
        >
          <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
          My projects
        </a>
        <a
          href="/contact-me"
          className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white"
        >
          <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
          Contact me
        </a>
      </div>
    </footer>
  );
};

export default Footer;
