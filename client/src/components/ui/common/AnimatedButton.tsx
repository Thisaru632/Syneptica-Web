import React from "react";
import { cn } from "@/lib/utils"; // optional if you use Tailwind's cn helper
import { Loader } from "lucide-react";


interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  inverse?: boolean;
  selected?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  className,
  inverse = false,
  selected = false,
  disabled = false,
  loading = false,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={cn(
        "relative overflow-hidden rounded-none border-2 font-semibold group",
        "!h-[50px] w-max px-10",
        inverse
          ? "border-white bg-white text-darkBg"
          : "border-darkBg bg-darkBg text-white",
        // Selected state - swap colors like hover but persistent
        selected && (
          inverse
            ? "bg-darkBg text-white"
            : "bg-white text-darkBg"
        ),
        // Disabled state
        disabled && "opacity-50 cursor-not-allowed",
        // Loading state
        loading && "cursor-wait",
        className
      )}
    >
      {/* text */}
      <span
        className={cn(
          "relative z-10 transition-colors duration-500 ease-in-out",
          // Normal hover colors (only apply if not selected and not disabled)
          !selected && !disabled && !loading && (
            inverse
              ? "group-hover:text-white"
              : "group-hover:text-darkBg"
          ),
          // Selected state text color
          selected && (
            inverse ? "text-white" : "text-darkBg"
          )
        )}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-4">
            <Loader className="animate-spin size-5" />
            {children}
          </span>
        ) : (
          children
        )}
      </span>

      {/* animated background */}
      <span
        className={cn(
          "absolute inset-0 transition-transform duration-500 ease-in-out",
          inverse ? "bg-darkBg" : "bg-white",
          // Default state - hidden
          !selected && "-translate-x-full",
          // Selected state - always visible
          selected && "translate-x-0",
          // Hover state (only if not selected and not disabled/loading)
          !selected && !disabled && !loading && "group-hover:translate-x-0"
        )}
      ></span>
    </button>
  );
};