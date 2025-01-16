import React, { useState } from "react";
import { slides } from "./data/SlideSection";

const Articles = () => {
  const [nextSlide, setNextSlide] = useState<number>(slides[0].id);

  const handleNext = () => {
    const currentIndex = slides.findIndex((slide) => slide.id === nextSlide);
    const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setNextSlide(slides[nextIndex].id);
  };

  const handlePrevious = () => {
    const currentIndex = slides.findIndex((slide) => slide.id === nextSlide);
    const previousIndex =
      currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setNextSlide(slides[previousIndex].id);
  };

  const currentItem = slides.find((slide) => slide.id === nextSlide);

  return (
    <main>
      <div>
        <h1>Items List</h1>
        <ul>
          <li>
            <h2>{currentItem?.title}</h2>
            <p>{currentItem?.description}</p>
            <img src={currentItem?.src} alt={currentItem?.alt} />
          </li>
        </ul>
      </div>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </main>
  );
};

export default Articles;
