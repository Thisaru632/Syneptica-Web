"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BackgroundPattern from "../ui/common/BackgroundPattern";
import { AnimatedButton } from "../ui/common/AnimatedButton";
import { STEPS } from "@/constants/story";
import { sectionVariants, textVariants, listVariants, listItemVariants, ctaVariants } from "@/utils/animations";

const ProcessSteps: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <BackgroundPattern className="min-h-screen px-6 pt-8 lg:pt-16 bg-darkBg">
      <motion.section
        ref={sectionRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="relative py-12 lg:py-20"
      >
        <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Mobile Layout - Vertical Cards */}
          <motion.div
            className="space-y-8 lg:hidden"
            variants={listVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {STEPS.map((step) => (
              <motion.div
                key={step.number}
                variants={listItemVariants}
                className="p-6 border rounded-lg bg-white/5 backdrop-blur-sm border-white/10"
              >
                {/* Mobile Number & Title */}
                <motion.div variants={listItemVariants} className="flex items-start mb-4 space-x-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 rounded-full bg-white/10">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <div className="flex-1">
                    <motion.h3
                      variants={textVariants}
                      className="mb-1 text-xl font-bold text-white sm:text-2xl"
                    >
                      {step.title}
                    </motion.h3>
                    <motion.h4
                      variants={textVariants}
                      className="text-base font-semibold text-orange-400 sm:text-lg"
                    >
                      {step.subtitle}
                    </motion.h4>
                  </div>
                </motion.div>
                {/* Mobile Content */}
                <motion.p
                  variants={textVariants}
                  className="mb-6 text-sm leading-relaxed sm:text-base text-white/80"
                >
                  {step.description}
                </motion.p>
                <motion.div variants={ctaVariants}>
                  <AnimatedButton>{step.buttonText}</AnimatedButton>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Desktop Layout - Alternating Sides */}
          <motion.div
            className="hidden space-y-20 lg:block xl:space-y-32"
            variants={listVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {STEPS.map((step, index) => {
              const isOdd = step.number % 2 === 1;
              return (
                <motion.div key={step.number} variants={listItemVariants} className="relative">
                  <div className="grid items-center grid-cols-2 gap-12 xl:gap-16">
                    {/* Number Side */}
                    <div className={`relative flex items-center justify-center ${isOdd ? "order-1" : "order-2"}`}>
                      <div className="relative">
                        <span className="text-[100px] xl:text-[120px] 2xl:text-[140px] font-bold text-white/10 select-none">
                          {step.number}
                        </span>
                      </div>
                    </div>
                    {/* Content Side */}
                    <motion.div
                      className={`space-y-6 ${isOdd ? "order-2" : "order-1"}`}
                      variants={listItemVariants}
                    >
                      <div>
                        <motion.h3
                          variants={textVariants}
                          className="mb-2 text-2xl font-bold text-white xl:text-3xl 2xl:text-4xl"
                        >
                          {step.title}
                        </motion.h3>
                        <motion.h4
                          variants={textVariants}
                          className="mb-6 text-lg font-semibold text-orange-400 xl:text-xl 2xl:text-2xl"
                        >
                          {step.subtitle}
                        </motion.h4>
                      </div>
                      <motion.p
                        variants={textVariants}
                        className="mb-8 text-base leading-relaxed xl:text-lg text-white/80"
                      >
                        {step.description}
                      </motion.p>
                      <motion.div variants={ctaVariants}>
                        <AnimatedButton
                          className="w-[200px] font-bold border border-white bg-transparent text-white"
                        >
                          {step.buttonText}
                        </AnimatedButton>
                      </motion.div>
                    </motion.div>
                  </div>
                  {/* Connecting Line (except for last item) */}
                  {index < STEPS.length - 1 && (
                    <div className="absolute bottom-0 transform -translate-x-1/2 translate-y-10 left-1/2">
                      <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>
    </BackgroundPattern>
  );
};

export default ProcessSteps;