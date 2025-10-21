"use client";

import React from 'react';
import { AnimatedButton } from '../common/AnimatedButton';

// Enhanced TypeScript interfaces
interface ProductImage {
    src: string;
    alt: string;
    id: string;
}

interface ProductCardProps {
    images: ProductImage[];
    title: string;
    description: string;
    buttonText?: string;
    imageLeft?: boolean;
    className?: string;
    onButtonClick?: () => void;
    autoplayDelay?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    images,
    title,
    description,
    buttonText = "Explore Collection",
    imageLeft = true,
    className = "",
    onButtonClick,
    autoplayDelay = 3000
}) => {
    // Validate images array
    const validImages = images && images.length > 0 ? images : [
        { src: "/placeholder-image.jpg", alt: "Placeholder", id: "placeholder" }
    ];

    const handleButtonClick = (): void => {
        if (onButtonClick) {
            onButtonClick();
        }
    };

    return (
        <div className={`
            flex flex-col lg:flex-row
            ${imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} 
            bg-darkBg 
            border border-white/20 
            shadow-2xl 
            overflow-hidden 
            rounded-lg
            transition-all 
            duration-300 
            hover:shadow-3xl 
            hover:border-white/30
            ${className}
        `}>
            {/* Image Section */}
            <div className="relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto lg:max-h-[830px]">
                <div className="relative w-full h-full overflow-hidden">
                    <img 
                        src={validImages[0].src}
                        alt={validImages[0].alt}
                        className="object-cover w-full h-full transition-transform duration-700 hover:scale-105" 
                    />
                    {/* Gradient overlay for better text readability on mobile */}
                    <div className="absolute inset-0 bg-gradient-to-t from-darkBg/100 to-darkBg/0 lg:hidden" />
                </div>
            </div>

            {/* Content Section */}
            <div className={`
                w-full lg:w-1/2 
                p-6 sm:p-8 lg:p-12 xl:p-16
                flex flex-col justify-center
                ${imageLeft ? 'lg:pl-16' : 'lg:pr-16'}
                space-y-6 lg:space-y-8 z-10
            `}>
                {/* Title */}
                <h2 className="text-2xl font-light leading-tight tracking-wide text-white transition-all duration-300 sm:text-3xl lg:text-4xl xl:text-5xl">
                    {title}
                </h2>
                
                {/* Description */}
                <p className="text-sm leading-relaxed transition-all duration-300 sm:text-base lg:text-lg xl:text-xl text-white/90 max-w-none lg:max-w-md xl:max-w-lg">
                    {description}
                </p>

                {/* Button */}
                <div className="pt-4">
                    <AnimatedButton 
                        inverse
                        onClick={handleButtonClick}
                    >
                        {buttonText}
                    </AnimatedButton>
                </div>

                {/* Optional decorative element */}
                <div className="hidden lg:block absolute bottom-8 left-8 w-16 h-0.5 bg-white/20" />
            </div>
        </div>
    );
};

// Export types for external use
export type { ProductCardProps, ProductImage };