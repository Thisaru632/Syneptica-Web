"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BackgroundPattern from "../ui/common/BackgroundPattern";
import { AnimatedButton } from "../ui/common/AnimatedButton";
import { ABOUT_SECTIONS, ABOUT_CTA } from "@/constants/about";
import Link from "next/link";
import { sectionVariants, textVariants, listVariants, listItemVariants, ctaVariants } from "@/utils/animations";

// Define the Section component to handle each section's animation
interface SectionProps {
  section: typeof ABOUT_SECTIONS[number];
}

const Section: React.FC<SectionProps> = ({ section }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
      className={`flex flex-col ${
        section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-stretch rounded-md shadow-lg`}
    >
      {/* Content */}
      <motion.div
        className={`flex flex-col justify-center w-full p-8 lg:p-12 text-center ${
          section.id === "spark" || section.id === "way"
            ? "lg:text-left"
            : "lg:text-right"
        }`}
        variants={sectionVariants}
      >
        <motion.h2
          className="mb-6 text-3xl font-light text-white transition-all duration-500 sm:text-4xl lg:text-5xl"
          variants={textVariants}
        >
          {section.title}
        </motion.h2>

        {/* Normal paragraphs */}
        {section.description &&
          section.description.map((para, i) => (
            <motion.p
              key={i}
              className="mb-4 text-lg leading-relaxed transition-colors duration-500 lg:text-xl text-white/80"
              variants={textVariants}
            >
              {para}
            </motion.p>
          ))}

        {/* List items */}
        {section.list && (
          <motion.ul
            className="mt-6 space-y-6"
            variants={listVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {section.list.map((item, i) => (
              <motion.li
                key={i}
                className="transition-all duration-500"
                variants={listItemVariants}
              >
                <h4 className="mb-2 text-xl font-semibold text-white lg:text-2xl">
                  {item.heading}
                </h4>
                <p className="text-base leading-relaxed lg:text-lg text-white/70">
                  {item.text}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        )}

        {/* Mission & Vision */}
        {section.mission && section.vision && (
          <motion.div
            className="mt-6 space-y-8"
            variants={listVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={listItemVariants}>
              <h4 className="mb-3 text-xl font-semibold text-white lg:text-2xl">
                {section.mission.heading}
              </h4>
              <p className="mb-2 italic text-white/70">
                {section.mission.quote}
              </p>
              <p className="text-base leading-relaxed lg:text-lg text-white/70">
                {section.mission.text}
              </p>
            </motion.div>
            <motion.div variants={listItemVariants}>
              <h4 className="mb-3 text-xl font-semibold text-white lg:text-2xl">
                {section.vision.heading}
              </h4>
              <p className="mb-2 italic text-white/70">
                {section.vision.quote}
              </p>
              <p className="text-base leading-relaxed lg:text-lg text-white/70">
                {section.vision.text}
              </p>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

const About: React.FC = () => {
  return (
    <BackgroundPattern className="px-4 py-8 sm:px-6 lg:py-16 bg-darkBg">
      <div className="w-full mx-auto space-y-24 lg:space-y-32">
        {ABOUT_SECTIONS.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="pt-16 mt-20 text-center border-t lg:mt-32 border-white/10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={ctaVariants}
      >
        <motion.h3
          className="mb-6 text-3xl font-light text-white transition-all duration-500 sm:text-4xl"
          variants={textVariants}
        >
          {ABOUT_CTA.heading}
        </motion.h3>
        <motion.p
          className="max-w-2xl mx-auto mb-8 text-lg transition-colors duration-500 text-white/80"
          variants={textVariants}
        >
          {ABOUT_CTA.text}
        </motion.p>
        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          variants={listVariants}
        >
          <Link href="/products" passHref>
            <AnimatedButton className="border-white">
              {ABOUT_CTA.primaryBtn}
            </AnimatedButton>
          </Link>
          <Link href="/contact" passHref>
            <AnimatedButton inverse className="border-white">
              {ABOUT_CTA.secondaryBtn}
            </AnimatedButton>
          </Link>
        </motion.div>
      </motion.div>
    </BackgroundPattern>
  );
};

export default About;