"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Title } from "../ui/common/Title";
import BackgroundPattern from "../ui/common/BackgroundPattern";
import { FEATURES } from "@/constants/whyChooseUs";
import { AnimatedButton } from "../ui/common/AnimatedButton";
import {
  sectionVariants,
  textVariants,
  listVariants,
  listItemVariants,
  ctaVariants,
} from "@/utils/animations";

const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <BackgroundPattern className="py-12 lg:py-20">
      {/* Section Heading */}
      <motion.div
        ref={sectionRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="text-center mb-12 lg:mb-16"
      >
        <motion.div variants={textVariants}>
          <Title title="Why You Choose Us" />
        </motion.div>
      </motion.div>

      {/* Feature Blocks */}
      <motion.div
        className="space-y-8 lg:space-y-10"
        variants={listVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {FEATURES.map((item, idx) => (
          <motion.div
            key={idx}
            variants={listItemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{
              delay: idx * 0.3,
              duration: 0.6,
              ease: "easeOut",
            }}
            className="relative w-full overflow-hidden rounded-md shadow-lg min-h-[300px] sm:min-h-[340px] lg:min-h-[380px] xl:min-h-[420px] px-2 sm:px-4 lg:px-6"
          >
            {/* Full Card Background Image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={600}
                className="object-contain w-full h-full"
                sizes="100vw"
                priority={idx === 0}
              />
            </div>

            {/* Text Section - Half Width without Background */}
            <div
              className={`absolute z-10 w-full lg:w-1/2 h-full flex flex-col justify-center p-8 lg:p-12 xl:p-16 ${
                idx % 2 === 0 ? "lg:right-0" : "lg:left-0"
              }`}
            >
              <motion.h3
                variants={textVariants}
                className="mb-4 text-2xl lg:text-3xl xl:text-4xl font-bold text-white uppercase tracking-wide text-left"
                dir="ltr"
              >
                {item.title}
              </motion.h3>
              <motion.p
                variants={textVariants}
                className="text-base lg:text-lg xl:text-xl leading-relaxed text-white text-left"
                dir="ltr"
              >
                {item.text}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        className="flex justify-center mt-16"
        variants={ctaVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <AnimatedButton className="transition-transform duration-300 border-white group-hover:scale-105">
          Request a quote
        </AnimatedButton>
      </motion.div>
    </BackgroundPattern>
  );
};

export default WhyChooseUs;
