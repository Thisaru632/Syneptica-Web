"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES } from "@/constants/story";
import { AnimatedButton } from "../ui/common/AnimatedButton";
import { useRouter } from "next/navigation";
import BackgroundPattern from "../ui/common/BackgroundPattern";
import { Title } from "../ui/common/Title";

const ProductsShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const router = useRouter();

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Safety check for HERO_SLIDES
  if (!HERO_SLIDES || HERO_SLIDES.length === 0) {
    return (
      <BackgroundPattern className="px-6 py-8 lg:py-16 bg-darkBg">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Loading...</h1>
          <p className="text-lg">Please wait while we load the content.</p>
        </div>
      </BackgroundPattern>
    );
  }

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
    <BackgroundPattern className="px-6 py-8 lg:py-16 bg-darkBg">
      {/* Section Title */}
      <div className="text-center mb-12">
        <Title title="Our Products" />
        <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
          Discover our comprehensive range of technology solutions designed to transform your business
        </p>
      </div>

      <div className="relative w-full h-[85vh] overflow-hidden rounded-lg">
        {/* Slide Images */}
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
            />
            
            {/* Gradient Overlay for better text readability */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            
            {/* Content */}
            <div className="absolute bottom-[10%] left-2 sm:left-5 lg:left-10 lg:max-w-[70%] flex flex-col gap-5 px-2">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="max-w-3xl text-lg font-light leading-relaxed text-white sm:text-xl lg:text-2xl drop-shadow-md">
                {slide.description}
              </p>
              <div className="mt-4">
                <AnimatedButton
                  className="bg-[#E43636] hover:bg-[#C42D2D] transition-colors duration-300"
                  onClick={() => router.push('/contact')}
                >
                  Get in Touch
                </AnimatedButton>
              </div>
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
    </BackgroundPattern>
  );
};

export default ProductsShowcase;
