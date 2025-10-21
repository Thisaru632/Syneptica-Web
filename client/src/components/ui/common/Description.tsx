"use client";

import React from "react";

interface DescriptionProps {
    children: React.ReactNode;
    className?: string;
}

export const Description: React.FC<DescriptionProps> = ({
    children,
    className = "",
}) => {
    return (
        <p className={`text-sm font-normal text-white sm:text-lg lg:text-2xl ${className}`}>
            {children}
        </p>
    );
};
