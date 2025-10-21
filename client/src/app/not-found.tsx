'use client';

import { AnimatedButton } from '@/components/ui/common/AnimatedButton';
import BackgroundPattern from '@/components/ui/common/BackgroundPattern';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <BackgroundPattern className="flex flex-col items-center justify-center w-full h-screen px-4 py-8 text-white lg:py-16 ">
      <h1 className="mb-4 text-4xl font-bold sm:text-5xl">404 - Page Not Found</h1>
      <p className="max-w-md mb-6 text-lg text-gray-300 sm:text-xl">
        Sorry, we couldn’t find the page you’re looking for.
      </p>

      <AnimatedButton inverse onClick={() => router.back()}>
        Go Back
      </AnimatedButton>
    </BackgroundPattern>
  );
}
