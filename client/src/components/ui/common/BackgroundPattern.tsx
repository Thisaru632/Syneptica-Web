import React from "react";

interface BackgroundPatternProps {
  children: React.ReactNode;
  className?: string;
}

const BackgroundPattern: React.FC<BackgroundPatternProps> = ({ children, className }) => {
  return (
    <div className={`relative w-full h-auto bg-darkBg ${className || ""}`}>
      {/* Background Shapes */}
      <div className="absolute inset-0 h-full overflow-hidden pointer-events-none opacity-45">
        <div className="absolute w-16 h-16 rotate-45 border-2 border-[#66E0FF] sm:w-24 sm:h-24 md:w-32 md:h-32 top-6 left-6 opacity-30"></div>
        <div className="absolute hidden w-12 h-12 border border-[#66E0FF] sm:w-20 sm:h-20 md:w-24 md:h-24 top-24 right-10 rotate-12 opacity-20 sm:block"></div>
        <div className="absolute bottom-16 left-1/4 w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 border-2 border-[#66E0FF] rotate-[30deg] opacity-25"></div>
        <div className="absolute bottom-24 right-6 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 border border-[#66E0FF] rotate-[60deg] opacity-15 hidden sm:block"></div>
        <div className="absolute w-48 h-48 transform rotate-45 -translate-x-1/2 -translate-y-1/2 border top-1/2 left-1/2 sm:w-72 sm:h-72 md:w-96 md:h-96 border-[#66E0FF]/10 opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundPattern;
