import { Skeleton, CardSkeleton, HeaderSkeleton } from "@/components/ui/skeleton";

export default function HomePageLoading() {
  return (
    <>
      {/* Hero Section Skeleton */}
      <section className="relative overflow-hidden border-b py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 items-center lg:grid-cols-2">
            <div className="space-y-6">
              <Skeleton className="h-8 w-40 rounded-full mb-4" />
              <HeaderSkeleton className="mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mb-6" />
              <div className="flex gap-4">
                <Skeleton className="h-12 w-36 rounded-md" />
                <Skeleton className="h-12 w-36 rounded-md" />
              </div>
            </div>
            <div className="relative h-[400px] mx-auto w-full max-w-[500px]">
              <Skeleton className="absolute h-64 w-64 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute inset-0 flex items-center justify-center">
                {Array.from({ length: 3 }).map((_, index) => (
                  <Skeleton key={index} className="absolute h-28 w-40 rounded-xl" style={{ 
                    top: `${30 + (index * 30)}%`, 
                    left: `${20 + (index * 20)}%`,
                    transform: 'translate(-50%, -50%)' 
                  }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts Section Skeleton */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <HeaderSkeleton className="text-center mb-16" />
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <CardSkeleton key={index} className="border rounded-lg overflow-hidden h-[420px]" />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Skeleton className="h-12 w-36 mx-auto rounded-md" />
          </div>
        </div>
      </section>

      {/* Research Papers Section Skeleton */}
      <section className="border-y bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <HeaderSkeleton className="text-center mb-16" />
          
          <div className="grid gap-8 md:grid-cols-2">
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 border rounded-lg p-6 bg-background">
                <Skeleton className="h-40 w-full md:w-1/3 rounded-lg" />
                <div className="flex-1 space-y-4">
                  <Skeleton className="h-6 w-3/4" />
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-20 rounded-full" />
                    <Skeleton className="h-6 w-20 rounded-full" />
                  </div>
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-10 w-32 rounded-md" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Skeleton className="h-12 w-36 mx-auto rounded-md" />
          </div>
        </div>
      </section>

      {/* Core Values Section Skeleton */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <HeaderSkeleton className="text-center mb-16" />
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="border rounded-lg p-6 space-y-4">
                <Skeleton className="h-16 w-16 rounded-lg" />
                <Skeleton className="h-6 w-2/3" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Skeleton */}
      <section className="border-t bg-primary/10 py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <HeaderSkeleton className="mx-auto mb-8" />
          <Skeleton className="h-4 w-full mb-2 mx-auto" />
          <Skeleton className="h-4 w-3/4 mb-8 mx-auto" />
          <Skeleton className="h-12 w-36 mx-auto rounded-md" />
        </div>
      </section>
    </>
  );
} 