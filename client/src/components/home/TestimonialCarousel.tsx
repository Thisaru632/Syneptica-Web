"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BackgroundPattern from "../ui/common/BackgroundPattern";
import { TestimonialItem } from "@/constants/testimonials";
import { Title } from "../ui/common/Title";
import { sectionVariants, textVariants, listVariants, listItemVariants } from "@/utils/animations";
import { Avatar, AvatarFallback } from "../ui/avatar";

interface TestimonialCarouselProps {
  testimonials?: TestimonialItem[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials = [],
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const total = testimonials.length;

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(interval);
  }, [total]);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const getPrevIndex = () => (currentIndex === 0 ? total - 1 : currentIndex - 1);
  const getNextIndex = () => (currentIndex === total - 1 ? 0 : currentIndex + 1);

  const Card: React.FC<{
    testimonial: TestimonialItem;
    className?: string;
  }> = ({ testimonial, className = "" }) => (
    <motion.div
      variants={listItemVariants}
      className={`relative bg-darkBg text-white rounded-2xl shadow-2xl p-6 flex flex-col justify-between min-w-[280px] mx-2 overflow-hidden border border-gray-600/30 hover:border-gray-500/50 transition-all duration-500 ${className}`}
    >
      <div className="flex items-center gap-3 mb-4">
        {/* <img
          src={testimonial.image}
          alt={testimonial.name}
          className="object-cover w-12 h-12 rounded-full"
        /> */}
        <Avatar className="w-12 h-12">
          <AvatarFallback className="text-xl text-white border border-white bg-darkBg">
            {testimonial.name.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-semibold text-white sm:text-base">
            {testimonial.name}
          </p>
          {/* <p className="text-xs text-gray-400 sm:text-sm">
            {testimonial.company}
          </p> */}
        </div>
      </div>
      <p className="relative mb-4 text-xs text-justify text-gray-300 sm:text-sm">
        <span className="absolute top-0 font-serif text-4xl leading-none -left-2 text-gray-500/10">
          &quot;
        </span>
        {testimonial.comment}
        <span className="absolute bottom-0 font-serif text-4xl leading-none -right-1 text-gray-500/10">
          &quot;
        </span>
      </p>
      <div className="flex mb-4 text-sm sm:text-base">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`text-yellow-400 ${i < testimonial.rating ? "opacity-100" : "opacity-30"
              }`}
          >
            ★
          </span>
        ))}
      </div>
    </motion.div>
  );

  return (
    <BackgroundPattern className="px-6 py-10 md:py-16 bg-darkBg relative overflow-hidden">
      <motion.div
        ref={sectionRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="max-w-6xl mx-auto text-center mb-20"
      >
        <motion.div variants={textVariants}>
          <Title title="What Our Clients Are Saying" />
        </motion.div>
        <motion.h2
          variants={textVariants}
          className="text-lg sm:text-xl lg:text-2xl font-bold text-white"
        >
          Real Stories, Real Satisfaction
        </motion.h2>
      </motion.div>

      <motion.div
        className="relative flex items-center justify-center"
        variants={listVariants}
      >
        {/* Left Arrow */}
        <motion.button
          onClick={goPrev}
          variants={listItemVariants}
          className="absolute z-30 p-2 text-white transition-colors -translate-y-1/2 rounded-full left-24 sm:left-32 top-1/2 bg-black/40 hover:bg-black/60 sm:p-3"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>

        {/* Carousel */}
        <motion.div
          className="hidden sm:flex items-center justify-center w-full"
          variants={listVariants}
        >
          <Card
            testimonial={testimonials[getPrevIndex()]}
            className="w-56 opacity-40"
          />
          <Card
            testimonial={testimonials[currentIndex]}
            className="w-72 mx-4 scale-105 shadow-3xl"
          />
          <Card
            testimonial={testimonials[getNextIndex()]}
            className="w-56 opacity-40"
          />
        </motion.div>
        {/* Mobile single card */}
        <motion.div
          className="sm:hidden w-full max-w-[320px] mx-auto"
          variants={listItemVariants}
        >
          <Card testimonial={testimonials[currentIndex]} />
        </motion.div>

        {/* Right Arrow */}
        <motion.button
          onClick={goNext}
          variants={listItemVariants}
          className="absolute z-30 p-2 text-white transition-colors -translate-y-1/2 rounded-full right-24 sm:right-32 top-1/2 bg-black/40 hover:bg-black/60 sm:p-3"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>
      </motion.div>

      {/* Indicators */}
      <motion.div
        className="absolute flex items-center justify-center space-x-2 -translate-x-1/2 -bottom-8 left-1/2 xs:space-x-3"
        variants={listVariants}
      >
        {testimonials.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            variants={listItemVariants}
            className={`w-2.5 xs:w-3 h-2.5 xs:h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "bg-white scale-125"
                : "bg-black hover:bg-gray-500"
            }`}
          />
        ))}
      </motion.div>
    </BackgroundPattern>
  );
};

export default TestimonialCarousel;