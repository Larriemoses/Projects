import React from "react";
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation(); // Get the current route dynamically

  return (
    <nav className="overflow-hidden w-full bg-black text-white h-[40%] -mb-1 font-sans content-center justify-items-center">
      <ul className="invisible md:visible flex flex-row py-4 content-center my-5 justify-center text-center items-center text-purple-400 bg-gray-900 max-w-max h-[70%] px-2 rounded-4xl">
        {/* Example for Home */}
        <li
          className={`flex mr-5 justify-center text-center justify-items-center ${
            location.pathname === "/"
              ? "text-white font-normal"
              : "text-purple-400 hover:text-white"
          }`}
        >
          <Link className="justify-center ml-2" to="/">
            Larrie Moses
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

        {/* External Links */}
        <li className="mr-3 hover:text-white content-center">
          <Link to="https://github.com/larriemoses">
            <FaGithub size={15} />
          </Link>
        </li>
        <li className="mr-3 hover:text-white content-center text-center">
          <Link to="https://www.linkedin.com/in/olarewaju-adebulu-320184212/">
            <FaLinkedin size={15} />
          </Link>
        </li>
        <li className="mr-3 hover:text-white content-center">
          <Link to="https://medium.com/@larriemoses">
            <FaMedium size={15} />
          </Link>
        </li>
        <li className="mr-3 hover:text-white content-center">
          <Link to="mailto:larriemoses@gmail.com">
            <FaEnvelope size={15} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
