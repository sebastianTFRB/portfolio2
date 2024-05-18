import Navigation from './Navegation';


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <Navigation/>
    </nav>
  )
}

export default Navbar;


/*<div className="flex flex-row gap-3 items-center">
        <div className="relative">
          { <Image
            src="/horseLogo.jpg"
            alt="logo"
            width={40}
            height={40}
            className="w-full h-full object-contain rounded-full"
          /> }
        </div>
        <h1 className="text-white text-[25px] font-semibold">
          Webchain{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            Dev{" "}
          </span>
        </h1>
      </div> */
