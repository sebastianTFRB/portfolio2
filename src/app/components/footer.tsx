import React from "react";

import'bootstrap/dist/css/bootstrap.min.css'

import { Container } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faGithub,faXTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'




const Footer: React.FC = () => {
  const linkClasses = "rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white flex items-center justify-center";

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
          href="/contact-me"
          className="rounded-[20px] group relative bg-blue-500 border border-white px-5 py-3 text-lg text-white"
        >
          <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
          Contact me
        </a>
        <a href="https://facebook.com" className={linkClasses}>
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        <a href="https://instagram.com" className={linkClasses}>
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a href="https://twitter.com" className={linkClasses}>
          <FontAwesomeIcon icon={faXTwitter} size="lg" />
        </a>
        <a href="https://github.com/sebastianTFRB" className={linkClasses}>
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

 

