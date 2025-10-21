"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PRODUCTS } from "@/constants/products";
import Carousel from "../ui/carousel/Carousel";
import { Title } from "../ui/common/Title";
import BackgroundPattern from "../ui/common/BackgroundPattern";
import { Description } from "../ui/common/Description";
import { sectionVariants, textVariants, listItemVariants } from "@/utils/animations";

const ProductCarousel: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
          <Title title="Discover our services" />
        </motion.div>
        <motion.div variants={textVariants}>
          <Description className="lg:text-xl mt-4">
            At Syneptica, we provide{" "}
            <span className="font-bold">
              comprehensive technology solutions with expert consultation
            </span>{" "}
            at the heart of everything we do. From software development and mobile
            app creation to server-side services, we deliver{" "}
            <span className="font-bold">end-to-end digital solutions</span> that
            transform your business vision into reality.
          </Description>
        </motion.div>
      </motion.div>

      <motion.div
        variants={listItemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 mx-auto max-w-7xl"
      >
        <Carousel products={PRODUCTS} autoPlay interval={4000} />
      </motion.div>
    </BackgroundPattern>
  );
};

export default ProductCarousel;