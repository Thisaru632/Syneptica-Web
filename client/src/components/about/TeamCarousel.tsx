"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { TEAM_MEMBERS } from "@/constants/about";
import { Title } from "../ui/common/Title";
import BackgroundPattern from "../ui/common/BackgroundPattern";
import { Description } from "../ui/common/Description";
import { sectionVariants, textVariants, listItemVariants } from "@/utils/animations";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TeamCarousel: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const total = TEAM_MEMBERS.length;

  // autoplay
  useEffect(() => {
    if (total <= 1) return;
    const auto = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(auto);
  }, [total]);

  const goPrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % total);

  const getPrevIndex = () => (currentIndex === 0 ? total - 1 : currentIndex - 1);
  const getNextIndex = () => (currentIndex === total - 1 ? 0 : currentIndex + 1);

  const TeamCard: React.FC<{ member: typeof TEAM_MEMBERS[0]; className?: string }> = ({
    member,
    className = "",
  }) => (
    <div
      className={`relative flex flex-col justify-end overflow-hidden rounded-2xl shadow-2xl aspect-[9/16] border border-gray-600/30 hover:border-gray-500/50 transition-all duration-500 ${className}`}
    >
      {/* Image */}
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      {/* Content */}
      <div className="relative z-10 p-4 md:p-6 text-white">
        <h4 className="mb-2 text-base font-semibold md:text-lg">
          {member.name}
        </h4>
        <p className="mb-2 text-sm text-blue-300 font-medium">
          {member.role}
        </p>
        <p className="mb-3 text-xs sm:text-sm md:text-base text-gray-300 line-clamp-3">
          {member.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {member.expertise.slice(0, 2).map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-white/20 rounded-full text-white/90"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <BackgroundPattern className="px-6 py-10 md:py-16 bg-darkBg relative overflow-hidden">
      <motion.div
        ref={sectionRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="relative z-10 mb-12 text-left max-w-4xl mx-auto md:mx-0"
      >
        <motion.div variants={textVariants}>
          <Title title="Meet Our Team" />
        </motion.div>
        <motion.div variants={textVariants}>
          <Description className="lg:text-xl mt-4">
            Our{" "}
            <span className="font-bold">
              talented team of experts
            </span>{" "}
            brings together diverse skills and experiences to deliver{" "}
            <span className="font-bold">exceptional results</span> for our clients.
            Each team member is passionate about technology and committed to excellence.
          </Description>
        </motion.div>
      </motion.div>

      <motion.div
        variants={listItemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 mx-auto max-w-7xl"
      >
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
            <TeamCard member={TEAM_MEMBERS[getPrevIndex()]} className="w-40 sm:w-56 md:w-64 opacity-40" />
            <TeamCard
              member={TEAM_MEMBERS[currentIndex]}
              className="w-52 sm:w-72 md:w-80 mx-4 scale-105 shadow-3xl"
            />
            <TeamCard member={TEAM_MEMBERS[getNextIndex()]} className="w-40 sm:w-56 md:w-64 opacity-40" />
          </div>

          {/* Mobile view (single card) */}
          <div className="sm:hidden w-full max-w-[320px] mx-auto">
            <TeamCard member={TEAM_MEMBERS[currentIndex]} />
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
            {TEAM_MEMBERS.map((_, idx) => (
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
      </motion.div>
    </BackgroundPattern>
  );
};

export default TeamCarousel;
