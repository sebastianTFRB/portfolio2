import React, { useEffect, useState } from "react";
import { NavLinks } from './../constants'; // Supongamos que este módulo contiene la definición de NavLinks
import { Link } from "react-router-dom"; // Importa Link de React Router si estás usando React Router para la navegación
import Transition from "./Transition";

const Navigation = () => {
  const [isRouting, setIsRouting] = useState(false);
  const [path, setPath] = useState(window.location.pathname); // Utiliza useState para manejar el estado de la ruta
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    const handleRouteChange = () => {
      setIsRouting(true);
      setPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
    <div style={{ top: "10px"}} className="fixed z-[50] left-1/2 transform -translate-x-1/2 w-[90%] md:w-[50%] max-h-[10px] rounded-full flex justify-around items-center border bg-black border-white px-4 py-7">
      <h1 className="text-white text-[25px] font-semibold">
          Webchain{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            Dev{" "}
          </span>
        </h1>
      
      {isRouting && <Transition />}
      {NavLinks.map((nav) => (
        <Link key={nav.name} to={nav.link} className="pl-4"> {/* Cambia Link por la versión de React Router */}
          <nav.icon
            className={`w-[24px] h-[24px] ${
              path === nav.name ? "text-purple-800" : "text-white"
            }`}
          />
        </Link>
        
      ))}
      
    </div>
  );
};

export default Navigation;
