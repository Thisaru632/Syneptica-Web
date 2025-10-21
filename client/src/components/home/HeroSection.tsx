"use client";
import React from "react";
import { AnimatedButton } from "../ui/common/AnimatedButton";
import { HERO_VIDEO, HERO_THUMB } from "@/constants/links";
import { Title } from "../ui/common/Title";
import { Description } from "../ui/common/Description";
import { useRouter } from "next/navigation";

const HeroSection = () => {
    const router = useRouter();
    return (
        <div className="relative w-full h-screen -mt-16 overflow-hidden">
            <video
                className="absolute top-0 left-0 object-cover w-full h-full"
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                poster={HERO_THUMB}
            >
                <source src={HERO_VIDEO} type="video/mp4" />
            </video>
            <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50" />
            <div className="absolute bottom-[10%] left-2 sm:left-5 lg:left-10 lg:max-w-[50%] flex flex-col gap-5">
                <Title title="Transforming visions into digital reality." />
                <Description>
                    Expert Software Development, Mobile App Creation, Server-Side Services, and Technology Consultation
                </Description>
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