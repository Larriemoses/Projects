import React, { useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";

function slide() {
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
      title: "Javascript",
      img: <img className=" h-10 " src={javascript_img} alt="" />,
      color: "bg-yellow-100",
    },
    {
      id: 2,
      title: "React.js",
      img: <img className=" h-10  " src={react_img} alt="" />,
      color: "bg-blue-200",
    },
    {
      id: 3,
      title: "Figma",
      img: <img className=" h-10  " src={figma_img} alt="" />,
      color: "bg-red-300",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-[80%] h-[30vh] md:h-[40vh] py-5 px-2 flex flex-col md:flex-row items-center justify-center bg-black relative overflow-hidden">
      {/* Experience and Stack Section */}

      <div className="relative flex  w-full md:w-[40%]  h-full ">
        {slides.map((slide, index) => {
          // Determine position and visibility for each slide
          const isActive = index === currentIndex;
          const isNext = index === (currentIndex + 1) % slides.length;
          const isPrev =
            index === (currentIndex - 1 + slides.length) % slides.length;

          // Assign slide positions dynamically
          const positionClass = isActive
            ? "translate-x-0 opacity-100 scale-100 z-20"
            : isNext
            ? "translate-x-full opacity-50 scale-90 z-10"
            : isPrev
            ? "-translate-x-full opacity-50 scale-90 z-10"
            : "hidden";

          return (
            <div
              key={slide.id}
              className={`absolute flex-row space-x-2 p-4 top-0 left-0 w-[80%] md:w-[80%] h-[90%] flex items-center justify-center rounded-3xl shadow-lg transition-all duration-700 ease-in-out ${slide.color} ${positionClass}`}
            >
              <h2 className="text-black font-semibold text-2xl">
                {slide.title}{" "}
              </h2>
              <span className=" flex ">{slide.img}</span>
            </div>
          );
        })}
      </div>

      <div className="absolute mt-5 bottom-4 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-16 h-2 rounded-full ${
              index === currentIndex
                ? "bg-white opacity-100"
                : "bg-gray-400 opacity-50"
            }`}
          ></button>
        ))}
      </div>
      {/* Navigation Buttons */}
    </div>
  );
}

export default slide;
