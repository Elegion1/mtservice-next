"use client"; // Aggiungi questa direttiva in cima al file

import { useState } from "react";

export default function Masthead() {
  const images = [
    { id: 1, path: "https://picsum.photos/1920/108" },
    { id: 2, path: "https://picsum.photos/1920/108" },
    { id: 3, path: "https://picsum.photos/1920/108" },
    { id: 4, path: "https://picsum.photos/1920/108" },
    { id: 5, path: "https://picsum.photos/1920/108" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleSelect = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      id="indicators-carousel"
      className="relative w-full"
      data-carousel="static"
    >
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden md:h-96">
        {/* Centrato H1 */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h1 className="text-white text-4xl font-bold text-center">
            Welcome to Our Service
          </h1>
        </div>

        {/* Carousel Images */}
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`duration-700 ease-in-out ${
              activeIndex === index ? "block" : "hidden"
            }`}
            data-carousel-item={activeIndex === index ? "active" : ""}
          >
            <img
              src={image.path + image.id}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Carousel slide ${image.id}`}
            />
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              activeIndex === index ? "bg-blue-500" : "bg-gray-500"
            }`}
            aria-current={activeIndex === index ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => handleSelect(index)}
          />
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
