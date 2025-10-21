"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import BackgroundPattern from "../ui/common/BackgroundPattern";
import { AnimatedButton } from "../ui/common/AnimatedButton";
import { Title } from "../ui/common/Title";
import { CONTACT_INFO, CONTACT_FORM, CONTACT_TEXT } from "@/constants/contact";
import { sectionVariants, textVariants, listVariants, listItemVariants, ctaVariants } from "@/utils/animations";

const ContactUs: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <BackgroundPattern className="px-4 py-16 sm:px-6 lg:py-24 bg-darkBg">
      <motion.div
        ref={sectionRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="w-full mx-auto max-w-[1280px] grid gap-12 lg:grid-cols-2"
      >
        {/* Left Side - Contact Info */}
        <motion.div className="space-y-8 text-white" variants={listVariants}>
          <motion.div variants={textVariants}>
            <Title
              title={CONTACT_TEXT.heading}
              className="text-center lg:text-left"
            />
          </motion.div>
          <motion.p
            variants={textVariants}
            className="leading-relaxed text-center text-white/80 lg:text-left"
          >
            {CONTACT_TEXT.description}
          </motion.p>
          <motion.div className="space-y-6" variants={listVariants}>
            {CONTACT_INFO.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={listItemVariants}
                  className="flex items-start gap-4"
                >
                  <span className="flex items-center justify-center w-10 h-10 text-xl bg-white rounded-full shadow-md aspect-square">
                    <Icon className="w-5 h-5 text-black" />
                  </span>
                  <div>
                    <motion.p
                      variants={textVariants}
                      className="text-lg font-medium"
                    >
                      {item.label}
                    </motion.p>
                    <motion.p
                      variants={textVariants}
                      className="font-light text-white/70"
                    >
                      {item.value}
                    </motion.p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          variants={listItemVariants}
          className="relative rounded-lg p-8 backdrop-blur-lg bg-white/10 border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:scale-102 transition-transform duration-300"
        >
          <motion.h3
            variants={textVariants}
            className="mb-6 text-2xl font-semibold text-white"
          >
            {CONTACT_TEXT.formHeading}
          </motion.h3>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            onSubmit={() => setLoading(true)}
            className="space-y-5 text-white"
          >
            {/* Hidden fields */}
            <input
              type="hidden"
              name="access_key"
              value={CONTACT_FORM.accessKey}
            />
            <input type="hidden" name="subject" value={CONTACT_FORM.subject} />
            <input
              type="hidden"
              name="redirect"
              value={CONTACT_FORM.redirect}
            />

            {/* Full Name */}
            <motion.div variants={listItemVariants}>
              <input
                type="text"
                name="name"
                required
                placeholder={CONTACT_TEXT.namePlaceholder}
                className="w-full py-2 placeholder-gray-300 transition-all bg-transparent border-b outline-none border-gray-400/40 focus:border-white"
              />
            </motion.div>

            {/* Mobile Number */}
            <motion.div variants={listItemVariants}>
              <input
                type="number"
                name="mobile"
                required
                placeholder={CONTACT_TEXT.mobilePlaceholder}
                className="w-full py-2 placeholder-gray-300 transition-all bg-transparent border-b outline-none border-gray-400/40 focus:border-white"
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={listItemVariants}>
              <input
                type="email"
                name="email"
                required
                placeholder={CONTACT_TEXT.emailPlaceholder}
                className="w-full py-2 placeholder-gray-300 transition-all bg-transparent border-b outline-none border-gray-400/40 focus:border-white"
              />
            </motion.div>

            {/* Message */}
            <motion.div variants={listItemVariants}>
              <textarea
                name="message"
                required
                placeholder={CONTACT_TEXT.messagePlaceholder}
                rows={4}
                className="w-full py-2 placeholder-gray-300 transition-all bg-transparent border-b outline-none resize-none border-gray-400/40 focus:border-white"
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={ctaVariants}>
              <AnimatedButton
                type="submit"
                disabled={loading}
                className="w-full border-white"
              >
                {loading ? CONTACT_TEXT.sendingButton : CONTACT_TEXT.submitButton}
              </AnimatedButton>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </BackgroundPattern>
  );
};

export default ContactUs;