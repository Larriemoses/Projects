import React, { useState } from "react";

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { slides } from "./SlideSection";

type CarouselProps<T> = {
  slides: T[];
  renderSlides: (slide: T, index: number) => JSX.Element;
};

const Carousel = <T,>({ slides, renderSlides }: CarouselProps<T>) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel Wrapper */}
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 95}%)`, // Move 95% per item (90% current + 5% spacing)
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="md:flex-shrink-0 w-full sm:w-[95%] grid-rows-2 md:w-full" // Each item takes 95% of the width
          >
            .{renderSlides(slide, index)}
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full disabled:invisible"
      >
        <FaChevronLeft className="text-2xl" />
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentIndex === slides.length - 1}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full disabled:invisible"
      >
        <FaChevronRight className="text-2xl" />
      </button>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="flex justify-center justify-items-center min-h-fit p-5 md:h-[50vh] content-center items-center  bg-gray-200">
      <Carousel
        slides={slides}
        renderSlides={(slide, index) => (
          <div className="flex flex-col-reverse md:flex-row mx-6 justify-items-center content-center justify-start items-center w-[80vw]">
            <div className="-left-7 md:w-[80%]">
              <h2 className="w-[90%] text-2xl md:text-3xl font-normal text-red-500 mb-4">
                {slide.title}
              </h2>
              <p className="w-[90%] md:w-3/5">{slide.description}</p>
            </div>
            <img
              src={slide.src}
              alt={slide.alt}
              className="h-[17em] md:h-[20em] lg:h-[25em] mb-5"
            />
          </div>
        )}
      />
    </div>
  );
};

export default App;
