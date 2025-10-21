'use client';

import { AnimatedButton } from '@/components/ui/common/AnimatedButton';
import BackgroundPattern from '@/components/ui/common/BackgroundPattern';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function UnderDevelopment() {
  const router = useRouter();

  return (
    <BackgroundPattern className="flex flex-col items-center justify-center w-full h-screen px-4 -mt-16 text-center text-white ">
      <div className="flex flex-col items-center justify-center space-y-6">
        <h1 className="text-4xl font-bold sm:text-5xl">🚧 Under Development</h1>
        <p className="max-w-md text-lg text-gray-300 sm:text-xl">
          This page is currently being built. Please check back later.
        </p>
        <AnimatedButton inverse onClick={() => router.back()}>
          Go Back
        </AnimatedButton>
      </div>
    </BackgroundPattern>
  );
}
