// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Synaptica",
  description: "Synaptica (Pvt) Ltd - Forward-thinking technology company specializing in Software-as-a-Service (SaaS) solutions for diverse industries.",
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/synaptica_logo.png', sizes: '192x192', type: 'image/png' }
    ],
    shortcut: '/favicon.png',
    apple: '/images/synaptica_logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>{children}</body>
    </html>
  );
}
