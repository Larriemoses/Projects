import React, { useState } from "react";

function Home() {
  const slides = [
    { id: 1, title: "Javascript", color: "bg-yellow-200" },
    { id: 2, title: "React.js", color: "bg-blue-200" },
    { id: 3, title: "Figma", color: "bg-red-300" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length); // Cycle forward
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1) // Cycle backward
    );
  };

  return (
    <div className="w-full h-[60vh] flex items-center justify-center bg-gray-800 relative overflow-hidden">
      {/* Slides container */}
      <div className="relative flex w-full h-full">
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
              className={`absolute top-0 left-0 w-[70%] h-full flex items-center justify-center rounded-lg shadow-lg transition-all duration-700 ease-in-out ${slide.color} ${positionClass}`}
            >
              <h2 className="text-white font-bold text-4xl">{slide.title}</h2>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 bg-white text-black px-4 py-2 rounded-full z-30"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute right-4 bg-white text-black px-4 py-2 rounded-full z-30"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
}

export default Home;
