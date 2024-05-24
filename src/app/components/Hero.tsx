//import { HERO_CONTENT } from "../constants";
import { useTranslation } from 'react-i18next';
//import profilePic from "../assets/sfd.png"//error k /= K
import profilePic from "./../../assets/images/sfd.png";// rastrea primero ./   ../= seleciona

const Hero = () => {
  const {t} = useTranslation();
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"> Sebastian DevOps</h1>
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-4xl font-bold  inline tracking-tight text-transparent">
            {t ('exp')}{/* Agrega una descripción sobre ti */}
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tghiter">
            {t ('description')}{/* Agrega una descripción sobre ti */}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 ">
        <div className="flex justify-center">
          <img src={profilePic} alt="logo" />

        </div>
        </div>
      </div> 
    </div>
  );
};

export default Hero;

<div className="flex justify-center">
<img src={profilePic} alt="logo" />

</div>