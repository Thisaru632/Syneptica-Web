"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { VisionCard } from "../ui/common/VisionCard";
import { VISION } from "@/constants/vision";
import BackgroundPattern from "../ui/common/BackgroundPattern";
import { sectionVariants, listItemVariants } from "@/utils/animations";

const VisionValuesProcess: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <BackgroundPattern className="px-6 py-8 lg:py-16 bg-darkBg">
      <motion.div
        ref={sectionRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-3 max-w-7xl"
      >
        {VISION.map((card, idx) => (
          <motion.div key={idx} variants={listItemVariants}>
            <VisionCard idx={idx} {...card} />
          </motion.div>
        ))}
      </motion.div>
    </BackgroundPattern>
  );
};

export default VisionValuesProcess;