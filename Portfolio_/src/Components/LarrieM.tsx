import React from "react";

import image01 from "../assets/New Project (1).png";

import experience from "./Experience";

function Home() {
  return (
    <>
      <div className="bg-black w-full overflow-hidden pt-10">
        <div className="  bg-black w-full text-white h-[100vh] justify-center justify-items-center">
          <div className="sm:flex flex-row-reverse w-[80%] sm:w-[85%]">
            <div className="sm:flex-1  justify-center justify-items-center sm:justify-end sm:justify-items-end items-end  ">
              <img
                src={image01}
                alt=""
                className="h-50 sm:h-60 flex mb-4 sm:mb-0"
              />
            </div>
            <div className="sm:flex-1 justify-center justify-items-center sm:justify-items-start sm:justify-start items-center sm:items-center">
              <h2 className="text-4xl mb-2  ">Hi, I'm Olarewaju</h2>
              <h5 className="mb-4 text-xs text-center sm:text-start text-purple-400 font-normal sm:text-sm sm:font-semibold">
                Frontend Developer | Technical Writer | Content Creator
              </h5>
              <p className="text-gray-600 text-sm sm:text-[1em] text-center sm:text-start leading-loose mb-10 ">
                I build scalable web apps with
                <span className="text-gray-400 font-semibold"> React.js,</span>
                <span className="text-gray-400 font-semibold">
                  {" "}
                  TypeScript,{" "}
                </span>
                and
                <span className="text-gray-400 font-semibold">
                  {" "}
                  Tailwind CSS{" "}
                </span>
                while simplifying tech through
                <span className="text-gray-400 font-semibold"> Writing </span>
                and{" "}
                <span className="text-gray-400 font-semibold">
                  Content Creation
                </span>
                .
              </p>
              <div className="next_sec flex-wrap sm:flex justify-items-center">
                <a href="#" className="">
                  <button className="  bg-white text-black p-2 rounded-full w-[10em] mr-1 sm:mr-15 hover:bg-gray-300 cursor-pointer">
                    Download CV
                  </button>
                </a>
                <div
                  className="mt-4 sm:mt-0 flex sm:flex-1 items-center text-purple-400 font-semibold hover:text-purple-300 "
                  onClick={experience}
                >
                  See Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
