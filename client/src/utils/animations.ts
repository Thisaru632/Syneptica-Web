import { Variants, Transition } from "framer-motion";

// Animation variants for sections
export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    } as Transition,
  },
};

// Animation variants for text elements (headings, paragraphs)
export const textVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.2,
    } as Transition,
  },
};

// Animation variants for lists (e.g., ul or div containers for lists)
export const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    } as Transition,
  },
};

// Animation variants for individual list items
export const listItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    } as Transition,
  },
};

// Animation variants for CTA sections or buttons
export const ctaVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    } as Transition,
  },
};