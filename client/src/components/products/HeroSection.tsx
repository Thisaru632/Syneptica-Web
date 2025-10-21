"use client";
import React from "react";
import Image from "next/image";
import { AnimatedButton } from "../ui/common/AnimatedButton";
import { PRODUCT_HERO_THUMB } from "@/constants/links";
import { Title } from "../ui/common/Title";
import { useRouter } from "next/navigation";

const HeroSection = () => {
    const router = useRouter();
    return (
        <div className="relative w-full h-screen -mt-16 overflow-hidden">
            {/* Hero Image */}
            <Image
                src={PRODUCT_HERO_THUMB}
                alt="Hero"
                fill
                className="object-cover"
                priority
            />

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />

            {/* Content */}
            <div className="absolute bottom-[10%] left-2 sm:left-5 lg:left-10 lg:max-w-[75%] flex flex-col gap-5 px-2">
                <Title title="Technology Solutions For Your Business Growth" />
                <AnimatedButton
                    className="bg-[#E43636]"
                    onClick={() => router.push('/contact')}>
                    Get Started
                </AnimatedButton>
            </div>
        </div>
    );
};

export default HeroSection;
