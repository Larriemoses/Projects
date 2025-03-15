import React from "react";
// import { FaFigma } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import image01 from "../assets/Shape (1).png";

function Home() {
  return (
    <>
      <nav className=" w-full bg-black text-white h-[40%]   font-sans content-center justify-items-center ">
        <ul className="invisible md:visible flex flex-row py-4  content-center my-5 justify-center text-center items-center text-purple-400 bg-gray-900 max-w-max h-[70%] px-2 rounded-4xl ">
          <li className="flex mr-5  hover:text-white justify-center text-center justify-items-center ">
            <Link className="justify-center ml-2" to="/">
              Larrie Moses
            </Link>
          </li>
          <li className="mr-5  hover:text-white">
            <Link to="/education">Education</Link>
          </li>
          <li className="mr-5  hover:text-white">
            <Link to="/experience">Experience</Link>
          </li>
          {/* <li className='mr-2  hover:text-white content-center justify-items-center '><Link to="/#"><FaFigma size={15}/></Link></li> */}
          <li className="mr-3  hover:text-white content-center ">
            <Link to="/#">
              <FaGithub size={15} />
            </Link>
          </li>
          <li className="mr-3  hover:text-white content-center text-center ">
            <Link to="https://www.linkedin.com/in/olarewaju-adebulu-320184212/">
              <FaLinkedin size={15} />
            </Link>
          </li>
          <li className="mr-3  hover:text-white content-center">
            <Link to="/#">
              <FaMedium size={15} />
            </Link>
          </li>
          <li className="mr-3  hover:text-white content-center ">
            <Link to="/#">
              <FaEnvelope size={15} />
            </Link>
          </li>
        </ul>
      </nav>

      <div className="  bg-black w-full text-white h-[100vh] justify-center justify-items-center">
        <div className="flex w-[80%]">
          <div className="flex-1">
            <h2>Hi, I'm Olarewaju</h2>
            <p>
              During these 4 years as front-end software engineer. My role has
              extended beyond coding to effective communication with various
              departments, to define new features and spearheading the
              development of new apps
            </p>
          </div>
          <div className="flex-1 justify-end justify-items-end">
            <img src={image01} alt="" className="h-[10em]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
