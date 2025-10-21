"use client";

import React, { ReactNode } from "react";

interface TitleProps {
    title: string | ReactNode;
    className?: string;
}

export const Title: React.FC<TitleProps> = ({
    title,
    className = "",
}) => {
    return (
        <p className={`leading-snug text-2xl sm:text-[30px] lg:text-[60px] font-bold text-white shadow-sm ${className}`}>
            {title}
        </p>
    );
};
