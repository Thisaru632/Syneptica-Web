"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES } from "@/constants/story";

const HeroImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Safety check for HERO_SLIDES
  if (!HERO_SLIDES || HERO_SLIDES.length === 0) {
    return (
      <div className="relative w-full h-screen -mt-16 overflow-hidden bg-gray-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Loading...</h1>
          <p className="text-lg">Please wait while we load the content.</p>
        </div>
      </div>
    );
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000); // Change slide every 6 seconds for more content

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

interface GoToSlideFn {
    (index: number): void;
}

const goToSlide: GoToSlideFn = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
};

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full h-screen -mt-16 overflow-hidden">
      {/* Slide Images */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="object-cover w-full h-full"
          />
          
          {/* Gradient Overlay for better text readability */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          
          {/* Content */}
          <div className="absolute bottom-[10%] left-2 sm:left-5 lg:left-10 lg:max-w-[70%] flex flex-col gap-5 px-2">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="max-w-4xl text-lg font-light leading-relaxed text-white sm:text-xl lg:text-2xl drop-shadow-md">
              {slide.description}
            </p>
           
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute p-3 transition-all duration-300 -translate-y-1/2 bg-white rounded-full left-4 top-1/2 bg-opacity-20 hover:bg-opacity-30 group backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white transition-transform group-hover:scale-110" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute p-3 transition-all duration-300 -translate-y-1/2 bg-white rounded-full right-4 top-1/2 bg-opacity-20 hover:bg-opacity-30 group backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white transition-transform group-hover:scale-110" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute flex space-x-3 -translate-x-1/2 bottom-6 left-1/2">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125 shadow-lg"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>



      {/* Auto-play indicator */}
      <div className="absolute top-6 right-6">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="p-2 transition-all duration-300 bg-white rounded-full bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm"
          aria-label={isAutoPlaying ? "Pause auto-play" : "Resume auto-play"}
        >
          {isAutoPlaying ? (
            <div className="flex items-center justify-center w-4 h-4">
              <div className="w-1 h-3 bg-white mr-0.5"></div>
              <div className="w-1 h-3 bg-white"></div>
            </div>
          ) : (
            <div className="flex items-center justify-center w-4 h-4">
              <div className="w-0 h-0 border-l-4 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent ml-0.5"></div>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default HeroImageSlider;