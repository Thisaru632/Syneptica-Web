'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="mb-4 text-3xl font-bold">404 - Page Not Found</h1>
      <p className="mb-6 text-gray-600">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Link
        href="/"
        className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  );
}
