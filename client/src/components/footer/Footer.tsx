"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { TikTok } from "@/components/ui/common/Icon";
import {
  FOOTER_LINKS,
  SOCIAL_MEDIA,
  CONTACT_INFO,
  LOCATION,
} from "@/constants/footer";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  facebook: <Facebook className="w-5 h-5" />,
  instagram: <Instagram className="w-5 h-5" />,
  tiktok: <TikTok />,
  linkedin: <Linkedin className="w-5 h-5" />,
};

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <footer className="w-full text-gray-300 border-t border-gray-700 bg-darkBg">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Quick Links */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-white">
                Quick Links
              </h3>
              <nav className="space-y-3">
                {FOOTER_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={`block text-sm transition-colors duration-200 ${
                      pathname === link.path
                        ? "text-white underline underline-offset-4"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-white">
                Follow Us
              </h3>
              <div className="flex flex-wrap gap-3">
                {SOCIAL_MEDIA.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 text-white transition-colors duration-200 bg-gray-800 rounded-full hover:bg-gray-700"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {iconMap[social.icon]}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-white">Contact</h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-3 text-gray-300 break-words transition-colors duration-200 hover:text-white group"
                >
                  <Mail className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-white" />
                  <span className="text-sm">{CONTACT_INFO.email}</span>
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center gap-3 text-gray-300 transition-colors duration-200 hover:text-white group"
                >
                  <Phone className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-white" />
                  <span className="text-sm">{CONTACT_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-white">
                Location
              </h3>
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <iframe
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      LOCATION
                    )}&output=embed`}
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow-md"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-700">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            {/* Policies */}
            <div className="flex flex-wrap justify-center gap-4 text-xs sm:justify-start">
              <button
                className="text-gray-400 transition-colors duration-200 hover:text-white"
                onClick={() => router.push("/privacy")}
              >
                Privacy Policy
              </button>
              <span className="hidden text-gray-600 sm:inline">•</span>
              <button
                className="text-gray-400 transition-colors duration-200 hover:text-white"
                onClick={() => router.push("/terms")}
              >
                Terms of Service
              </button>
              <span className="hidden text-gray-600 sm:inline">•</span>
              <button
                className="text-gray-400 transition-colors duration-200 hover:text-white"
                onClick={() => router.push("/cookies")}
              >
                Cookie Policy
              </button>
            </div>

            {/* Copyright */}
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} TechDoc Solutions PVT Ltd. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
