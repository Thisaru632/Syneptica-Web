"use client";

import React from "react";
import HeroSection from "@/components/about/HeroSection";
import About from "@/components/about/About";
import TeamCarousel from "@/components/about/TeamCarousel";

const Page = () => {
  return (
    <>
      <HeroSection />
      <About />
      <TeamCarousel />
    </>
  );
};

export default Page;
