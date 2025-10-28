'use client';

import { AnimatedButton } from '@/components/ui/common/AnimatedButton';
import BackgroundPattern from '@/components/ui/common/BackgroundPattern';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global application error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <BackgroundPattern className="flex flex-col items-center justify-center w-full h-screen px-4 py-8 text-white lg:py-16">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Something went wrong!</h1>
          <p className="max-w-md mb-6 text-lg text-gray-300 sm:text-xl">
            We encountered an unexpected error. Please try again or contact support if the problem persists.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row">
            <AnimatedButton onClick={reset}>
              Try Again
            </AnimatedButton>
            <AnimatedButton inverse onClick={() => router.push('/')}>
              Go Home
            </AnimatedButton>
          </div>
          
          {process.env.NODE_ENV === 'development' && (
            <details className="mt-8 p-4 bg-gray-800 rounded-lg max-w-2xl">
              <summary className="cursor-pointer text-sm font-semibold text-gray-300">
                Error Details (Development Only)
              </summary>
              <pre className="mt-2 text-xs text-gray-400 overflow-auto">
                {error.message}
                {error.stack && `\n\nStack Trace:\n${error.stack}`}
              </pre>
            </details>
          )}
        </BackgroundPattern>
      </body>
    </html>
  );
}
