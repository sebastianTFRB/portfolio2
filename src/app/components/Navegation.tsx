
import { NavLinks } from './../constants'; 
import { Link } from "react-router-dom"; 


const Navigation = () => {


  return (
    <div style={{ top: "10px"}} className="fixed z-[50] left-1/2 transform -translate-x-1/2 w-[90%] md:w-[50%] max-h-[10px] rounded-full flex justify-around items-center border bg-black border-white px-4 py-7">
      <h1 className="text-white text-[25px] font-semibold ">
          Sebas{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 ">
            {" "}
            Dev{" "}
          </span>
        </h1>
      
   
      {NavLinks.map((nav) => (
        <Link key={nav.name} to={nav.link} className="pl-4 shadow-md hover:scale-125 duration-500 py-2 rounded-lg"> {/* Cambia Link por la versión de React Router */}
          <nav.icon
            className={`w-[24px] h-[24px] ${
              nav.name ? "text-purple-800 " : "text-purple-800"
            }`}
          />
        </Link>
        
      ))}
      
    </div>
  );
};

export default Navigation;
