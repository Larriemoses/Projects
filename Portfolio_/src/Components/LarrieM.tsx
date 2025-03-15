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
      <div className="bg-black w-full">
        <nav className=" w-full text-white h-[40%]  mb-15 font-sans content-center justify-items-center ">
          <ul className="invisible md:visible flex flex-row py-4  content-center my-5 justify-center text-center items-center text-purple-400 bg-gray-900 max-w-max h-[70%] px-2 rounded-4xl ">
            <li className="flex mr-5  hover:text-white justify-center text-center justify-items-center ">
              <Link className="justify-center ml-2 " to="/">
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
              <h2 className="text-4xl mb-2  ">Hi, I'm Olarewaju</h2>
              <h5 className="mb-4 text-sm text-purple-400 font-semibold">
                Frontend Developer | Technical Writer | Content Creator
              </h5>
              <p className="text-gray-600 leading-loose">
                I build scalable web apps with
                <span className="text-white font-semibold"> React.js,</span>
                <span className="text-white font-semibold">TypeScript, </span>
                and
                <span className="text-white font-semibold"> Tailwind CSS</span>
                while simplifying tech through
                <span className="text-white font-semibold"> writing </span>
                and
                <span className="text-white font-semibold">
                  content creation
                </span>
                . Passionate about teaching and digital growth, I help brands
                engage audiences with clear, impactful communication.
              </p>
            </div>
            <div className="flex-1 justify-end justify-items-end items-center flex ">
              <img src={image01} alt="" className="h-[15em]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
