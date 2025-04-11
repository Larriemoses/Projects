import React from "react";
import { useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";

import Nav2 from "./Nav_2";
import Slidesec from "./slide";

function Home() {
  const cld = new Cloudinary({ cloud: { cloudName: "dvl2r3bdw" } });
  const portfolio = cld.image("portfolio/fmp4ckl4tmqcicgit062");

  const portfolio_img = portfolio.toURL();

  // Use this sample image or upload your own via the Media Explorer
  // Use this sample image or upload your own via the Media Explorer

  const javascript = cld.image("portfolio/rtzxevxnlbekziyou9gc");

  const javascript_img = javascript.toURL();

  const react = cld.image("portfolio/rmtbimot47p6rmdcgrxa");

  const react_img = react.toURL();

  const figma = cld.image("portfolio/udn4gqxll1piy3hljtqk");

  const figma_img = figma.toURL();

  const slides = [
    {
      id: 1,
      title: <img className="h-5em flex   " src={javascript_img} alt="" />,
      color: "bg-yellow-200",
      description: "Javascript",
    },
    {
      id: 2,
      title: <img className="h-5em flex   " src={react_img} alt="" />,
      color: "bg-blue-200",
      description: "React.js",
    },
    {
      id: 3,
      title: <img className="h-5em flex   " src={figma_img} alt="" />,
      description: "Figma",
      color: "bg-red-300",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="bg-black w-full overflow-hidden pt-10 sm:pt-15">
        <div className="  bg-black w-full text-white min-h-[80vh] justify-center justify-items-center">
          <div className="sm:flex flex-row-reverse w-[80%] sm:w-[85%] mb-10 sm:mb-0">
            <div className="sm:flex-1  justify-center justify-items-center sm:justify-end sm:justify-items-end items-end  ">
              <img
                src={portfolio_img}
                alt="portfolio"
                className="h-50 sm:h-70 flex mb-4 sm:mb-0"
              />
            </div>
            <div className="sm:flex-1 justify-center justify-items-center sm:justify-items-start sm:justify-start items-center sm:items-center">
              <h2 className="text-4xl mb-3  ">Hi, I'm Olarewaju</h2>
              <h5 className="mb-4 text-xs text-center sm:text-start text-purple-400 font-normal sm:text-xs sm:font-semibold">
                Frontend Developer | Technical & Content Writer | AI Prompt
                Engineer | Content Creator
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
                <a
                  href="/experience"
                  className="justify-self-center justify-center items-center flex"
                >
                  {" "}
                  <div className="mt-8 sm:mt-0 flex sm:flex-1 text-purple-400 font-semibold hover:text-purple-300 justify-self-center justify-center items-center ">
                    See Experience
                  </div>
                </a>
              </div>
            </div>
          </div>
          <Nav2 />

          <Slidesec />
        </div>
      </div>
    </>
  );
}

export default Home;
