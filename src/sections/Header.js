import Logo from "../assets/logo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

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
    px-4 bg-gray-800 text-gray-100 font-bold">
      <img src={Logo} alt="Logo" style={{width:'250px'}}/>
      
      <ul className="hidden md:flex">
        <li className="py-2"><Link to="home" smooth={true} duration={500} >Home</Link></li>
        <li className="py-2"><Link to="about" smooth={true} duration={500} >About</Link></li>
        <li className="py-2"><Link to="skills" smooth={true} duration={500} >Skills</Link></li>
        <li className="py-2"><Link to="projects" smooth={true} duration={500} >Projects</Link></li>
        <li>
        <a 
        href={`${process.env.PUBLIC_URL}/Resume.pdf`} 
        download
        className="inline-flex items-center px-5 py-2 text-white bg-gray-900 rounded-lg hover:bg-gray-600"
      >
        Resume
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v16h16V4H4zm2 4h12m-6 4v4m-4-4h8"></path>
        </svg>
      </a>
        </li>
      </ul>

    <div onClick={handleClickNav} className={mobileNav?'hidden': 'md:hidden cursor-pointer z-10'}>
      <FaBarsStaggered />
    </div>

    <div onClick={handleClickNav} className={!mobileNav?'hidden': 'md:hidden cursor-pointer z-10'}>
      <FaTimes />
    </div>

    <ul className=
    { mobileNav===false? 'hidden': 'absolute top-0 left-0 w-full h-screen  bg-slate-300 flex flex-col justify-center items-center'}>
        <li className="py-6 text-4xl">
          Home
        </li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Experiences</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Resume</li>
      </ul>
      
    </div>
  );
}

export default Header;
