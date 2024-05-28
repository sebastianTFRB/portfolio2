import React from "react";

import'bootstrap/dist/css/bootstrap.min.css'

import { Container } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faGithub,faXTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'




const Footer: React.FC = () => {
  const linkClasses = "rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-blue-500 flex items-center justify-center shadow-md hover:scale-105 duration-500 py-2 mb-6 rounded shadow-blue-500";
  const linkClasses2 = "rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-orange-400 flex items-center justify-center shadow-md hover:scale-105 duration-500 py-2 mb-6 rounded shadow-orange-400";
  const linkClasses3 = "rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white flex items-center justify-center shadow-md hover:scale-105 duration-500 py-2 mb-6 rounded shadow-white";
  const linkClasses4 = "rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-red-500 flex items-center justify-center shadow-md hover:scale-105 duration-500 py-2 mb-6 rounded shadow-red-500";
  return (
    <footer className="w-full bg-black py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-5 md:px-40 gap-5">
       
        
        <a
          href="/contactame"
          className=" font-bold shadow-md hover:scale-105 duration-500  mb-6  rounded-[20px] group relative bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 border-white px-5 py-3 text-lg text-white no-underline">
          Contact me
          
        </a>
        <a href="https://facebook.com" className={linkClasses}>
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        <a href="https://instagram.com" className={linkClasses2}>
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a href="https://twitter.com" className={linkClasses3}>
          <FontAwesomeIcon icon={faXTwitter} size="lg" />
        </a>
        <a href="https://github.com/sebastianTFRB" className={linkClasses4}>
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

 

