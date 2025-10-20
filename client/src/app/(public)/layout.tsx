'use client';

import { ReactNode } from 'react';

interface PublicLayoutProps {
  children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
}
