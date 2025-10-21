'use client';

import Navbar from '@/components/navbar/Navbar';
// import PromotionBar from '@/components/navbar/Promotions';
import Footer from '@/components/footer/Footer';
import { ReactNode } from 'react';

interface PublicLayoutProps {
  children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      {/* Fixed Top Section */}
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* <PromotionBar
          message="🎉 Up to 40% off for New Year — free shipping over $50!"
          href="/sale"
          ctaLabel="Grab the deal"
          tone="sale"
          endsAt="2025-12-31T23:59:59Z"
          sticky
        /> */}
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="flex-1 w-full mx-auto mt-16">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
