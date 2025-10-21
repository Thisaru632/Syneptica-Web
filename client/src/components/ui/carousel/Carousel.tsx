"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedButton } from "../common/AnimatedButton";

interface Product {
  image: string;
  title: string;
  description: string;
}

interface CarouselProps {
  products: Product[];
  autoPlay?: boolean;
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  products,
  autoPlay = true,
  interval = 4000,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const total = products.length;

  // autoplay
  useEffect(() => {
    if (!autoPlay || total <= 1) return;
    const auto = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, interval);
    return () => clearInterval(auto);
  }, [autoPlay, interval, total]);

  const goPrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % total);

  const getPrevIndex = () => (currentIndex === 0 ? total - 1 : currentIndex - 1);
  const getNextIndex = () => (currentIndex === total - 1 ? 0 : currentIndex + 1);

  const Card: React.FC<{ product: Product; className?: string }> = ({
    product,
    className = "",
  }) => (
    <div
      className={`relative flex flex-col justify-end overflow-hidden rounded-2xl shadow-2xl aspect-[9/16] border border-gray-600/30 hover:border-gray-500/50 transition-all duration-500 ${className}`}
    >
      {/* Image */}
      <Image
        src={product.image}
        alt={product.title}
        fill
        className="object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      {/* Content */}
      <div className="relative z-10 p-4 md:p-6 text-white">
        <h4 className="mb-2 text-base font-semibold md:text-lg">
          {product.title}
        </h4>
        <p className="mb-4 text-xs sm:text-sm md:text-base text-gray-300 line-clamp-3">
          {product.description}
        </p>
        <AnimatedButton inverse size="sm">
          Deep Dive
        </AnimatedButton>
      </div>
    </div>
  );

  return (
    <div className="relative flex items-center justify-center">
      {/* Left Arrow */}
      <button
        onClick={goPrev}
        className="absolute z-30 p-2 text-white transition-colors -translate-y-1/2 rounded-full left-1 sm:left-2 top-1/2 bg-black/40 hover:bg-black/60 sm:p-3"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Desktop view (prev-current-next) */}
      <div className="hidden sm:flex items-center justify-center w-full">
        <Card product={products[getPrevIndex()]} className="w-40 sm:w-56 md:w-64 opacity-40" />
        <Card
          product={products[currentIndex]}
          className="w-52 sm:w-72 md:w-80 mx-4 scale-105 shadow-3xl"
        />
        <Card product={products[getNextIndex()]} className="w-40 sm:w-56 md:w-64 opacity-40" />
      </div>

      {/* Mobile view (single card) */}
      <div className="sm:hidden w-full max-w-[320px] mx-auto">
        <Card product={products[currentIndex]} />
      </div>

      {/* Right Arrow */}
      <button
        onClick={goNext}
        className="absolute z-30 p-2 text-white transition-colors -translate-y-1/2 rounded-full right-1 sm:right-2 top-1/2 bg-black/40 hover:bg-black/60 sm:p-3"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute flex items-center justify-center space-x-2 -translate-x-1/2 -bottom-8 left-1/2 xs:space-x-3">
        {products.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 xs:w-3 h-2.5 xs:h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "bg-white scale-125"
                : "bg-black hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
