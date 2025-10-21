"use client";

import React from "react";
import Image from "next/image";
import { Title } from "@/components/ui/common/Title";
import { ABOUT_HERO_THUMB } from "@/constants/links";

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen -mt-16 overflow-hidden">
      {/* Hero Image */}
      <Image
        src={ABOUT_HERO_THUMB}
        alt="About Zevaro - Our Story"
        fill
        className="object-cover opacity-70"
        priority
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />

      {/* Content */}
      <div className="absolute bottom-[10%] left-2 sm:left-5 lg:left-10 lg:max-w-[75%] flex flex-col gap-5 px-2">
        <Title
          title={
            <>
              The Zevaro <br />
              Journey
            </>
          }
        />

        <p className="text-lg text-white/90 max-w-2xl mb-4">
          We are creating excellence
        </p>
        {/* <AnimatedButton onClick={() => console.log("Learn more clicked!")}>
          Discover Our Journey
        </AnimatedButton> */}
      </div>
    </div>
  );
};

export default HeroSection;
