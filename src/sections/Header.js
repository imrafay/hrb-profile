import Logo from "../assets/logo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [mobileNav, setMobileNav] = useState(false);

  const handleClickNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <header className="fixed w-full h-20 bg-gray-900 text-gray-100 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-full">
        <Link
          to="/#home"
        >
          <img src={Logo} alt="Logo" className="w-40" />

        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/#home"
            className="hover:text-teal-400 mt-2 transition-colors duration-300 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/#about"
            className="hover:text-teal-400 mt-2 transition-colors duration-300 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="/#skills"
            className="hover:text-teal-400 mt-2 transition-colors duration-300 cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="/#projects"
            className="hover:text-teal-400 mt-2 transition-colors duration-300 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="/topics"
            className="hover:text-teal-400 mt-2 transition-colors duration-300 cursor-pointer"
          >
            Interivew Preparation
          </Link>
          <a
            href={`${process.env.PUBLIC_URL}/Resume.pdf`}
            download
            className="inline-flex items-center px-5 py-2 bg-teal-400 text-gray-900 rounded-lg hover:bg-teal-500 transition duration-300"
          >
            Resume
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v16h16V4H4zm2 4h12m-6 4v4m-4-4h8"
              ></path>
            </svg>
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <div
          onClick={handleClickNav}
          className="md:hidden text-2xl cursor-pointer"
        >
          {mobileNav ? <FaTimes /> : <FaBarsStaggered />}
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`${mobileNav ? "translate-x-0" : "-translate-x-full"
          } fixed top-0 left-0 w-full h-full bg-gray-900 text-gray-100 transform transition-transform duration-300 ease-in-out md:hidden`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
          <li>
            <Link
              to="/#home"
              onClick={handleClickNav}
              className="hover:text-teal-400 transition-colors duration-300 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/#about"
              onClick={handleClickNav}
              className="hover:text-teal-400 transition-colors duration-300 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/#skills"
              onClick={handleClickNav}
              className="hover:text-teal-400 transition-colors duration-300 cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/#projects"
              onClick={handleClickNav}
              className="hover:text-teal-400 transition-colors duration-300 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <a
              href={`${process.env.PUBLIC_URL}/Resume.pdf`}
              download
              className="inline-flex items-center px-6 py-3 bg-teal-400 text-gray-900 rounded-lg hover:bg-teal-500 transition duration-300"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
