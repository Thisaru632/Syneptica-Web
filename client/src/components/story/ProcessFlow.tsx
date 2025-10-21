"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BackgroundPattern from "../ui/common/BackgroundPattern";
import { STEPS } from "@/constants/story";
import { sectionVariants, textVariants, listVariants, listItemVariants } from "@/utils/animations";

const ProcessFlow: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <BackgroundPattern className="w-full px-6 pt-8 lg:pt-16 bg-darkBg">
      <motion.div
        ref={sectionRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="w-full max-w-6xl px-4 py-12 mx-auto"
      >
        {/* Mobile Layout - Vertical Stack */}
        <motion.div
          className="flex flex-col space-y-8 lg:hidden"
          variants={listVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {STEPS.map((step, index) => (
            <React.Fragment key={step.number}>
              <motion.div variants={listItemVariants} className="flex items-center p-4 space-x-4 border rounded-lg bg-white/5 backdrop-blur-sm border-white/10">
                {/* Mobile Number Circle */}
                <div className="flex items-center justify-center flex-shrink-0 w-20 h-20 bg-white rounded-full">
                  <span className="text-3xl font-bold text-black">{step.number}</span>
                </div>
                {/* Mobile Content */}
                <div className="flex-1">
                  <motion.h3
                    variants={textVariants}
                    className="mb-1 text-xl font-bold text-white"
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p
                    variants={textVariants}
                    className="text-lg text-gray-300"
                  >
                    {step.subtitle}
                  </motion.p>
                </div>
              </motion.div>
              {/* Mobile Connecting Arrow */}
              {index < STEPS.length - 1 && (
                <div className="flex justify-center">
                  <div className="w-px h-6 bg-gradient-to-b from-white/40 to-transparent" />
                </div>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Desktop Layout - Horizontal Flow */}
        <motion.div
          className="relative items-center justify-between hidden lg:flex"
          variants={listVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {STEPS.map((step, index) => (
            <React.Fragment key={step.number}>
              <motion.div
                variants={listItemVariants}
                className="relative z-10 flex flex-col items-center px-4 bg-darkBg"
              >
                {/* Background Number */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center justify-center -top-2">
                    <span className="font-bold select-none text-8xl lg:text-9xl text-white/10">
                      {step.number}
                    </span>
                  </div>
                  {/* Desktop Content */}
                  <div className="relative z-10 pt-6 pb-4 text-center lg:pt-8">
                    <motion.h3
                      variants={textVariants}
                      className="mb-1 text-lg font-bold text-white lg:text-xl whitespace-nowrap"
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p
                      variants={textVariants}
                      className="text-base text-gray-300 lg:text-lg whitespace-nowrap"
                    >
                      {step.subtitle}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
              {/* Desktop Connecting Line */}
              {index < STEPS.length - 1 && (
                <div className="flex-1 h-px mx-2 bg-gradient-to-r from-white/40 via-white/60 to-white/40 lg:mx-4" />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </motion.div>
    </BackgroundPattern>
  );
};

export default ProcessFlow;