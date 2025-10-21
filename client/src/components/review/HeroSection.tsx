"use client";

import React from "react";
import Image from "next/image";
import { AnimatedButton } from "../ui/common/AnimatedButton";
import { Title } from "../ui/common/Title";
import { PRODUCT_HERO_THUMB } from "@/constants/links";

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-[80vh] lg:h-screen -mt-16 overflow-hidden">
      {/* Hero Image */}
      <Image
        src={PRODUCT_HERO_THUMB}
        alt="Review Hero"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />

      {/* Content */}
      <div className="absolute bottom-[10%] left-2 sm:left-5 lg:left-10 lg:max-w-[75%] flex flex-col gap-5 px-2">
        <Title title="Share Your Experience With Us" />
        <AnimatedButton
          className="bg-[#E43636]"
          onClick={() => {
            const formElement = document.querySelector("form");
            formElement?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Write a Review
        </AnimatedButton>
      </div>
    </div>
  );
};

export default HeroSection;
