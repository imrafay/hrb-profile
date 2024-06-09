import Logo from "../assets/HRB-Logo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

import { useState } from "react";

function Header() {
  const [mobileNav,setMobileNav] = useState(false);

  const handleClickNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <div className="
    fixed w-full h-[80px]
    flex justify-between items-center
    px-4 bg-slate-300 text-gray-700">
      <img src={Logo} alt="Logo" style={{width:'75px'}}/>
      
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Experiences</li>
        <li>Projects</li>
        <li>Resume</li>
      </ul>

    <div onClick={handleClickNav} className={mobileNav?'hidden': 'md:hidden cursor-pointer z-10'}>
      <FaBarsStaggered />
    </div>

    <div onClick={handleClickNav} className={!mobileNav?'hidden': 'md:hidden cursor-pointer z-10'}>
      <FaTimes />
    </div>

    <ul className=
    { mobileNav===false? 'hidden': 'absolute top-0 left-0 w-full h-screen  bg-slate-300 flex flex-col justify-center items-center'}>
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Experiences</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Resume</li>
      </ul>
      
    </div>
  );
}

export default Header;
