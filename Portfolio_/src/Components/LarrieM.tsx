import React from "react";
// import { FaFigma } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import image01 from "../assets/New Project (1).png";

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
              <Link to="https://github.com/larriemoses">
                <FaGithub size={15} />
              </Link>
            </li>
            <li className="mr-3  hover:text-white content-center text-center ">
              <Link to="https://www.linkedin.com/in/olarewaju-adebulu-320184212/">
                <FaLinkedin size={15} />
              </Link>
            </li>
            <li className="mr-3  hover:text-white content-center">
              <Link to="https://medium.com/@larriemoses">
                <FaMedium size={15} />
              </Link>
            </li>
            <li className="mr-3  hover:text-white content-center ">
              <Link to="mailto:larriemoses@gmail.com">
                <FaEnvelope size={15} />
              </Link>
            </li>
          </ul>
        </nav>

        <div className="  bg-black w-full text-white h-[100vh] justify-center justify-items-center">
          <div className="sm:flex flex-row-reverse w-[80%]">
            <div className="sm:flex-1  justify-center justify-items-center sm:justify-center sm:justify-items-center items-center  ">
              <img
                src={image01}
                alt=""
                className="h-50 sm:h-70 flex sm:w-[45%] mb-4 sm:mb-0"
              />
            </div>
            <div className="sm:flex-1 justify-center justify-items-center sm:justify-items-start sm:justify-start items-center align-items-center">
              <h2 className="text-4xl mb-2  ">Hi, I'm Olarewaju</h2>
              <h5 className="mb-4 text-xs text-center sm:text-start text-purple-400 font-normal sm:text-sm sm:font-semibold">
                Frontend Developer | Technical Writer | Content Creator
              </h5>
              <p className="text-gray-600 text-sm sm:text-[1em] text-center sm:text-start leading-loose mb-10 ">
                I build scalable web apps with
                <span className="text-white font-semibold"> React.js,</span>
                <span className="text-white font-semibold"> TypeScript, </span>
                and
                <span className="text-white font-semibold">
                  {" "}
                  Tailwind CSS
                </span>{" "}
                while simplifying tech through
                <span className="text-white font-semibold"> writing </span>
                and{" "}
                <span className="text-white font-semibold">
                  content creation
                </span>
                .
              </p>
              <div className="next_sec">
                <button className="bg-white text-black p-2 rounded-full w-[10em]">
                  {" "}
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
