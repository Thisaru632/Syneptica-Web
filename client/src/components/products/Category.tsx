"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedButton } from "../ui/common/AnimatedButton";
import BackgroundPattern from "../ui/common/BackgroundPattern";
import CustomSelect from "../ui/custom/CustomSelect";
import { PRODUCT_CATEGORIES } from "@/constants/products";
import { sectionVariants, listVariants, listItemVariants } from "@/utils/animations";

interface CategoryProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const Category: React.FC<CategoryProps> = ({ activeCategory, onCategoryChange }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const scrollToCategory = (category: string) => {
    // Generate consistent category ID
    const categoryId = `category-${category.toLowerCase().replace(/\s+/g, '-')}`;
    const element = document.getElementById(categoryId);

    if (element) {
      const offset = 120; // Offset for fixed headers
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      console.warn(`Category section with ID "${categoryId}" not found`);
    }

    onCategoryChange(category);
  };

  return (
    <BackgroundPattern className="px-6 pt-8 lg:pt-16 bg-darkBg">
      <motion.div
        ref={sectionRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        {/* Mobile Dropdown */}
        <motion.div
          className="flex justify-end lg:hidden"
          variants={listItemVariants}
        >
          <CustomSelect
            value={activeCategory}
            onValueChange={(value) => {
              const categoryObj = PRODUCT_CATEGORIES?.find((cat) => cat.value === value);
              const categoryLabel = categoryObj ? categoryObj.label : PRODUCT_CATEGORIES[0].label;
              scrollToCategory(categoryLabel);
            }}
          />
        </motion.div>

        {/* Desktop Buttons */}
        <motion.div
          className="hidden w-full lg:flex max-w-[1920px] mx-auto justify-center gap-8 px-6 py-10"
          variants={listVariants}
        >
          {PRODUCT_CATEGORIES.map((cat) => (
            <motion.div key={cat.value} variants={listItemVariants}>
              <AnimatedButton
                className={`
                  w-max
                  font-bold 
                  border 
                  border-white
                  text-nowrap
                  ${activeCategory === cat.label ? "bg-white text-black" : "bg-transparent text-white"}
                `}
                onClick={() => scrollToCategory(cat.label)}
              >
                {cat.label}
              </AnimatedButton>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </BackgroundPattern>
  );
};

export default Category;