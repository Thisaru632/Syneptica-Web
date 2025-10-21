"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/constants/navItems";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();


    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };


    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== "undefined") {
                if (window.scrollY > lastScrollY) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        if (typeof window !== "undefined") {
            window.addEventListener("scroll", controlNavbar);
            return () => window.removeEventListener("scroll", controlNavbar);
        }
    }, [lastScrollY]);

    return (
        <nav
            className={` bg-darkBg shadow-lg transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="max-w-[1920px] px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <button className="flex items-center flex-shrink-0"
                        onClick={() => router.push('/')}>
                        <Image src={'/images/synaptica_logo.png'} alt="Syneptica" width={120} height={24}
                        className="w-[80px] h-auto lg:w-[120px] object-contain" />
                    </button>

                    {/* Navigation Links */}
                    <div className="hidden md:block">
                        <div className="flex items-baseline ml-10 space-x-8">
                            {NAV_ITEMS.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => router.push(item.path)}
                                    className={`relative px-3 py-2 text-sm font-semibold text-white transition-all duration-300 ease-in-out group`}
                                >
                                    {item.name}
                                    <span
                                        className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ease-in-out ${pathname === item.path
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                            }`}
                                    ></span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="p-2 text-white transition-colors duration-300 hover:text-darkBg/90 focus:outline-none"
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>

                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-700 shadow-lg bg-darkBg"
                        style={{ backgroundColor: '#1a1a1a' }}>
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => router.push(item.path)}
                                className={`block w-full text-left px-3 py-3 text-base font-medium transition-all duration-300 ease-in-out ${pathname === item.path
                                    ? "text-white bg-darkBg/90 border-l-4 border-white"
                                    : "text-gray-300 hover:text-white hover:bg-darkBg/90"
                                    }`}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}

        </nav>
    );
};

export default Navbar;
