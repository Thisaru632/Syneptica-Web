import { Skeleton } from "@/components/ui/skeleton";

export default function StoreSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      {/* Dark Header/Navbar Skeleton */}
      <div className="p-4 bg-gray-800">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          {/* Logo */}
          <Skeleton className="w-40 h-10 bg-gray-700" />
          {/* Nav Links */}
          <div className="flex space-x-6">
            <Skeleton className="w-24 h-8 bg-gray-700" />
            <Skeleton className="h-8 bg-gray-700 w-28" />
            <Skeleton className="w-20 h-8 bg-gray-700" />
          </div>
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <div className="px-4 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          {/* Video/Animation placeholder */}
          <div className="mb-8">
            <Skeleton className="w-48 h-12 mx-auto rounded-md" />
            <Skeleton className="w-32 h-8 mx-auto mt-4 bg-orange-200 rounded-md" />
          </div>
          
          {/* Main heading */}
          <div className="space-y-3">
            <Skeleton className="h-10 mx-auto w-80" />
            <Skeleton className="w-40 h-10 mx-auto" />
          </div>
          
          {/* Subtext */}
          <div className="space-y-2">
            <Skeleton className="h-5 mx-auto w-96" />
            <Skeleton className="h-5 mx-auto w-80" />
          </div>
          
          {/* CTA Button */}
          <Skeleton className="w-32 h-10 mx-auto mt-6 bg-gray-800" />
        </div>
      </div>

      {/* Three Cards Section Skeleton */}
      <div className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 - Our Mission */}
            <div className="p-6 space-y-4 bg-gray-800 rounded-lg">
              <Skeleton className="w-32 h-6 bg-gray-700" />
              <div className="space-y-3">
                <Skeleton className="w-40 bg-gray-700 h-7" />
                <Skeleton className="w-32 bg-gray-700 h-7" />
              </div>
              <div className="space-y-2">
                <Skeleton className="w-full h-4 bg-gray-700" />
                <Skeleton className="w-full h-4 bg-gray-700" />
                <Skeleton className="w-3/4 h-4 bg-gray-700" />
              </div>
              <Skeleton className="w-24 h-8 mt-4 bg-gray-700" />
            </div>

            {/* Card 2 - Our Values */}
            <div className="p-6 space-y-4 bg-gray-800 rounded-lg">
              <Skeleton className="h-6 bg-gray-700 w-28" />
              <div className="space-y-3">
                <Skeleton className="w-48 bg-gray-700 h-7" />
                <Skeleton className="bg-gray-700 w-28 h-7" />
              </div>
              <div className="space-y-2">
                <Skeleton className="w-full h-4 bg-gray-700" />
                <Skeleton className="w-full h-4 bg-gray-700" />
                <Skeleton className="w-3/4 h-4 bg-gray-700" />
              </div>
              <Skeleton className="w-24 h-8 mt-4 bg-gray-700" />
            </div>

            {/* Card 3 - Our Process */}
            <div className="p-6 space-y-4 bg-gray-800 rounded-lg">
              <Skeleton className="w-32 h-6 bg-gray-700" />
              <div className="space-y-3">
                <Skeleton className="bg-gray-700 w-44 h-7" />
              </div>
              <div className="space-y-2">
                <Skeleton className="w-full h-4 bg-gray-700" />
                <Skeleton className="w-full h-4 bg-gray-700" />
                <Skeleton className="w-3/4 h-4 bg-gray-700" />
              </div>
              <Skeleton className="w-24 h-8 mt-4 bg-gray-700" />
            </div>
          </div>
        </div>
      </div>

      {/* Products Section Skeleton */}
      <div className="px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <div className="mb-12 space-y-3">
            <Skeleton className="w-64 h-10" />
            <Skeleton className="w-48 h-10" />
          </div>
          
          {/* Description text */}
          <div className="mb-8 space-y-2">
            <Skeleton className="w-full h-5" />
            <Skeleton className="w-5/6 h-5" />
          </div>

          {/* Product icons/grid */}
          <div className="grid grid-cols-4 gap-4 mt-12 md:grid-cols-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} className="w-12 h-12 rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}