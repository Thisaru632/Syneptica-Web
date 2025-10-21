import React from "react";
import { AnimatedButton } from "./AnimatedButton";

interface VisionCardProps {
  idx: number;
  title: string;
  heading: string;
  text: string;
}

export const VisionCard: React.FC<VisionCardProps> = ({ idx, title, heading, text }) => {
  return (
    <div
      className={`group relative bg-darkBg text-white rounded-sm shadow-2xl p-8 flex flex-col justify-between overflow-hidden h-[520px] border border-gray-600/30 hover:border-gray-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-3xl`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-gray-400/5 to-transparent"></div>
      </div>

      {/* Decorative Elements */}
      <div
        className={`absolute w-56 h-56 border-2 border-gray-500/15 transition-all duration-700 group-hover:border-[#66E0FF]/30 ${
          idx === 0
            ? "rotate-45 top-40 -right-32"
            : idx === 1
            ? "rotate-[45deg] top-40 -left-32"
            : "rotate-[42deg] top-36 -left-40"
        }`}
      ></div>

      <div
        className={`absolute w-56 h-56 border-2 border-gray-500/15 transition-all duration-700 group-hover:border-[#66E0FF]/30 ${
          idx === 1 ? "rotate-[42deg] top-36 left-[250px]" : "hidden"
        }`}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 text-sm font-medium text-gray-300 border rounded-full bg-gray-700/20 backdrop-blur-sm border-gray-500/20">
            {title}
          </span>
        </div>

        <h2 className="mb-6 text-2xl font-bold leading-tight text-left min-h-[64px] bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
          {heading}
        </h2>

        <div className="flex-grow mb-8 h-[200px] overflow-hidden">
          <p className="relative text-base leading-relaxed text-justify text-gray-300 h-full">
            <span className="absolute top-0 font-serif text-6xl leading-none -left-4 text-gray-500/10">&quot;</span>
            {text}
            <span className="absolute bottom-0 font-serif text-6xl leading-none -right-2 text-gray-500/10">&quot;</span>
          </p>
        </div>

        <div className="mt-auto">
          <div className="w-full h-px mb-6 bg-gradient-to-r from-transparent via-gray-500/20 to-transparent"></div>
          <div className="flex justify-center">
            <AnimatedButton className="transition-transform duration-300 border-white group-hover:scale-105">
              Learn more
            </AnimatedButton>
          </div>
        </div>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 transition-all duration-500 pointer-events-none rounded-2xl bg-gradient-to-r from-gray-600/0 via-gray-500/0 to-gray-400/0 group-hover:from-gray-600/3 group-hover:via-gray-500/3 group-hover:to-gray-400/3"></div>
    </div>
  );
};
