import React from "react";
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation(); // Get the current route dynamically

  return (
    <nav className="overflow-hidden w-full bg-black text-white h-[40%] -mb-1 font-sans content-center justify-items-center">
      <ul className="visible md:invisible flex flex-row py-4 content-center my-5 justify-center text-center items-center text-purple-400 bg-gray-900 max-w-max h-[70%] px-2 rounded-4xl">
        {/* Example for Home */}
        <li
          className={`flex mr-5 justify-center text-center justify-items-center ${
            location.pathname === "/"
              ? "text-white font-normal"
              : "text-purple-400 hover:text-white"
          }`}
        >
          <Link className="justify-center ml-2 " to="/">
            LarrieM
          </Link>
        </li>

        {/* Example for Education */}
        <li
          className={`flex mr-5 justify-center text-center justify-items-center ${
            location.pathname === "/education"
              ? "text-white font-normal"
              : "text-purple-400 hover:text-white"
          }`}
        >
          <Link to="/education">Education</Link>
        </li>

        {/* Example for Experience */}
        <li
          className={`flex mr-5 justify-center text-center justify-items-center ${
            location.pathname === "/experience"
              ? "text-white font-normal"
              : "text-purple-400 hover:text-white"
          }`}
        >
          <Link to="/experience">Experience</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
