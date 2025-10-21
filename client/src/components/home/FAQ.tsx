"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import BackgroundPattern from "../ui/common/BackgroundPattern";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/constants/faq";
import { Title } from "../ui/common/Title";
import { sectionVariants, textVariants, listVariants, listItemVariants } from "@/utils/animations";

const FAQCard: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <motion.div
      variants={listItemVariants}
      className="bg-black rounded-lg p-6 cursor-pointer transition-all max-w-2xl w-full"
    >
      <div
        className="flex justify-between items-center text-white font-semibold"
        onClick={onToggle}
      >
        <span>{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-white transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="text-gray-300 mt-3 text-base leading-relaxed"
        >
          {answer}
        </motion.p>
      )}
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <BackgroundPattern className="px-6 py-8 lg:py-16 bg-darkBg">
      <motion.div
        ref={sectionRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="max-w-6xl mx-auto text-center mt-20 mb-12"
      >
        <motion.div variants={textVariants}>
          <Title title="Frequently Asked Questions" />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col gap-8 max-w-6xl mx-auto"
        variants={listVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {FAQS.map((faq, idx) => (
          <motion.div
            key={idx}
            className={`flex ${idx % 2 === 0 ? "justify-start" : "justify-end"}`}
            variants={listItemVariants}
          >
            <FAQCard
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onToggle={() => handleToggle(idx)}
            />
          </motion.div>
        ))}
      </motion.div>
    </BackgroundPattern>
  );
};

export default FAQ;