"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ProductCard, type ProductImage } from "../ui/custom/ProductCard";
import BackgroundPattern from "../ui/common/BackgroundPattern";
import { PRODUCTS_2 } from "@/constants/products";
import { useRouter } from "next/navigation";
import { AnimatedButton } from "../ui/common/AnimatedButton";
import { sectionVariants, textVariants, listVariants, listItemVariants, ctaVariants } from "@/utils/animations";

interface ProductsProps {
  onCategoryInView: (category: string) => void;
}

// Type for your PRODUCTS constant
interface Product {
  id?: string;
  title: string;
  description: string;
  image?: string;
  images?: ProductImage[];
  buttonText: string;
  category: string;
  autoplayDelay?: number;
}

// Define the CategorySection component to handle each category's animation
interface CategorySectionProps {
  category: string;
  products: Product[];
  categoryIndex: number;
  onCategoryInView: (category: string) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category, products, categoryIndex, onCategoryInView }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-120px" });
  const router = useRouter();

  const getCategoryId = (category: string): string => {
    return `category-${category.toLowerCase().replace(/\s+/g, "-")}`;
  };

  // Convert old image format to new images array
  const convertToImagesArray = (product: Product): ProductImage[] => {
    if (product.images && product.images.length > 0) {
      return product.images;
    }
    if (product.image) {
      return [
        {
          id: `${product.title.toLowerCase().replace(/\s+/g, "-")}-main`,
          src: product.image,
          alt: product.title,
        },
      ];
    }
    return [
      {
        id: "placeholder",
        src: "/images/placeholder.jpg",
        alt: "Product placeholder",
      },
    ];
  };

  // Handle product card button clicks
  const handleProductClick = (product: Product, index: number): void => {
    router.push("/contact");
  };

  useEffect(() => {
    if (isInView) {
      const formattedCategory = category.replace(/\b\w/g, (letter) => letter.toUpperCase());
      const timeoutId = setTimeout(() => {
        onCategoryInView(formattedCategory);
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [isInView, category, onCategoryInView]);

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
      id={getCategoryId(category)}
      className="scroll-mt-32"
    >
      <motion.div className="space-y-16 lg:space-y-24" variants={listVariants}>
        {products.map((product, productIndex) => {
          const images = convertToImagesArray(product);
          const overallIndex = categoryIndex * 10 + productIndex;

          return (
            <motion.div key={product.id || `${category}-${productIndex}`} variants={listItemVariants}>
              <ProductCard
                images={images}
                title={product.title}
                description={product.description}
                buttonText="Contact Us"
                imageLeft={categoryIndex % 2 === 0}
                onButtonClick={() => handleProductClick(product, productIndex)}
                autoplayDelay={product.autoplayDelay || 3000 + overallIndex * 500}
                className="
                  mx-auto 
                  transform 
                  transition-all 
                  duration-700 
                  hover:scale-[1.01]
                  hover:shadow-2xl
                "
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

const Products: React.FC<ProductsProps> = ({ onCategoryInView }) => {
  const router = useRouter();

  // Group products by category
  const groupedProducts = PRODUCTS_2.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  return (
    <BackgroundPattern className="px-4 py-8 sm:px-6 lg:py-16 bg-darkBg">
      <div className="w-full mx-auto max-w-[1920px]">
        {/* Optional section header */}
        <motion.div
          className="mb-12 text-center lg:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <motion.div className="w-24 h-0.5 bg-white/30 mx-auto mt-8" variants={textVariants}></motion.div>
        </motion.div>

        {/* Products Grid - Grouped by Category */}
        <div className="w-full space-y-24 lg:space-y-32">
          {Object.entries(groupedProducts).map(([category, products], categoryIndex) => (
            <CategorySection
              key={category}
              category={category}
              products={products}
              categoryIndex={categoryIndex}
              onCategoryInView={onCategoryInView}
            />
          ))}
        </div>

        {/* Optional bottom section */}
        <motion.div
          className="pt-16 mt-20 text-center border-t lg:mt-32 border-white/10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={ctaVariants}
        >
          <motion.h3
            className="mb-6 text-3xl font-light text-white sm:text-4xl"
            variants={textVariants}
          >
            Ready to Transform Your Business?
          </motion.h3>
          <motion.p
            className="max-w-2xl mx-auto mb-8 text-lg text-white/80"
            variants={textVariants}
          >
            Our expert team is here to help you discover the perfect technology solution for your needs
          </motion.p>
          <motion.div variants={listItemVariants}>
            <AnimatedButton
              inverse
              onClick={() => {
                router.push("/contact");
              }}
            >
              Get In Touch
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </div>
    </BackgroundPattern>
  );
};

export default Products;