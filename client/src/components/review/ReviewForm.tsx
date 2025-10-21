"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import BackgroundPattern from "../ui/common/BackgroundPattern";
import { AnimatedButton } from "../ui/common/AnimatedButton";
import { Title } from "../ui/common/Title";
import { Star } from "lucide-react";
import { sectionVariants, textVariants, listVariants, listItemVariants, ctaVariants } from "@/utils/animations";

const ReviewForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null); // Ref for form reset
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // In static mode, show a message instead of actually submitting
    setTimeout(() => {
      setSubmitted(true);
      if (formRef.current) {
        formRef.current.reset();
      }
      setRating(0);
      setLoading(false);

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <BackgroundPattern className="px-4 py-16 sm:px-6 lg:py-24 bg-darkBg">
      <motion.div
        ref={sectionRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="w-full mx-auto max-w-[1280px] grid gap-12 lg:grid-cols-2"
      >
        {/* Left Side */}
        <motion.div className="space-y-8 text-white" variants={listVariants}>
          <motion.div variants={textVariants}>
            <Title
              title="Your Reviews Matter"
              className="text-center lg:text-left"
            />
          </motion.div>
          <motion.p
            variants={textVariants}
            className="leading-relaxed text-center text-white/80 lg:text-left"
          >
            We’d love to hear about your experience with our products and
            services. Your feedback helps us improve and grow.
          </motion.p>
        </motion.div>

        {/* Right Side - Review Form */}
        <motion.div
          variants={listItemVariants}
          className="relative rounded-lg p-8 backdrop-blur-lg bg-white/10 border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:scale-102 transition-transform duration-300"
        >
          <motion.h3
            variants={textVariants}
            className="mb-6 text-2xl font-semibold text-white"
          >
            Write a Review
          </motion.h3>

          <motion.div 
            variants={textVariants}
            className="mb-4 p-3 bg-blue-500/20 border border-blue-400/30 rounded-lg"
          >
            <p className="text-sm text-blue-200">
              📝 <strong>Demo Mode:</strong> This is a static demo. Reviews are not actually saved to a database.
            </p>
          </motion.div>

          {error && <p className="mb-4 text-red-500">{error}</p>}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 text-white">
            {/* Name */}
            <motion.div variants={listItemVariants}>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full py-2 placeholder-gray-300 transition-all bg-transparent border-b outline-none border-gray-400/40 focus:border-white"
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={listItemVariants}>
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full py-2 placeholder-gray-300 transition-all bg-transparent border-b outline-none border-gray-400/40 focus:border-white"
              />
            </motion.div>

            {/* Star Rating */}
            <motion.div variants={listItemVariants}>
              <motion.p variants={textVariants} className="mb-2">
                Your Rating
              </motion.p>
              <motion.div className="flex gap-2" variants={listVariants}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.button
                    key={star}
                    type="button"
                    variants={listItemVariants}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`w-8 h-8 transition-colors ${
                        star <= (hover || rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-400"
                      }`}
                    />
                  </motion.button>
                ))}
              </motion.div>
              <input type="hidden" name="rating" value={rating} />
            </motion.div>

            {/* Description */}
            <motion.div variants={listItemVariants}>
              <textarea
                name="description"
                required
                placeholder="Description..."
                rows={4}
                className="w-full py-2 placeholder-gray-300 transition-all bg-transparent border-b outline-none resize-none border-gray-400/40 focus:border-white"
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={ctaVariants}>
              <AnimatedButton
                type="submit"
                disabled={loading || rating === 0}
                className="w-full border-white"
              >
                {loading
                  ? "Submitting..."
                  : submitted
                  ? "Demo Submitted!"
                  : "Submit Review (Demo)"}
              </AnimatedButton>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </BackgroundPattern>
  );
};

export default ReviewForm;