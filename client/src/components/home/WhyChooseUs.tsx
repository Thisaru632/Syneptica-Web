"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import { Title } from "../ui/common/Title";
import BackgroundPattern from "../ui/common/BackgroundPattern";
import { FEATURES } from "@/constants/whyChooseUs";
import { ProductCard } from "../ui/custom/ProductCard";
import {
  sectionVariants,
  textVariants,
  listVariants,
  listItemVariants,
} from "@/utils/animations";

const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const router = useRouter();

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

      {/* Feature Cards */}
      <motion.div
        className="space-y-8 lg:space-y-12"
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
          >
            <ProductCard
              images={[
                {
                  src: item.image,
                  alt: item.title,
                  id: `feature-${idx}`,
                },
              ]}
              title={item.title}
              description={item.text}
              buttonText="Learn More"
              imageLeft={idx % 2 === 0}
              className="max-w-7xl mx-auto"
              onButtonClick={() => router.push('/about')}
            />
          </motion.div>
        ))}
      </motion.div>
    </BackgroundPattern>
  );
};

export default WhyChooseUs;
