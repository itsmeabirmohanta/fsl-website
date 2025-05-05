import { Skeleton, CardSkeleton, HeaderSkeleton } from "@/components/ui/skeleton";

export default function ResearchPageLoading() {
  return (
    <>
      {/* Hero Section Skeleton */}
      <section className="relative overflow-hidden border-b py-20">
        <div className="container mx-auto px-4">
          <div className="flex min-h-[20vh] flex-col items-center justify-center text-center">
            <Skeleton className="h-8 w-40 rounded-full mb-8" />
            <HeaderSkeleton className="mb-8" />
            <Skeleton className="h-4 w-full max-w-2xl mx-auto mb-2" />
            <Skeleton className="h-4 w-full max-w-2xl mx-auto mb-6" />
            <Skeleton className="h-12 w-32 rounded-full mt-4" />
          </div>
        </div>
      </section>

      {/* Research Filters Skeleton */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Skeleton className="h-10 w-24 rounded-md" />
              <div className="flex gap-2">
                {Array.from({ length: 4 }).map((_, index) => (
                  <Skeleton key={index} className="h-8 w-24 rounded-full" />
                ))}
              </div>
            </div>
            <Skeleton className="h-10 w-60 rounded-md" />
          </div>
        </div>
      </section>

      {/* Featured Research Paper Skeleton */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden rounded-xl border bg-card relative">
            <div className="grid md:grid-cols-2 gap-6 p-6">
              <Skeleton className="h-[400px] w-full rounded-lg" />
              <div className="space-y-4 flex flex-col justify-center">
                <div className="flex gap-2">
                  <Skeleton className="h-6 w-20 rounded-full" />
                  <Skeleton className="h-6 w-20 rounded-full" />
                </div>
                <Skeleton className="h-8 w-4/5" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <div className="flex items-center gap-3 pt-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div>
                    <Skeleton className="h-4 w-32 mb-1" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
                <div className="flex gap-3">
                  <Skeleton className="h-10 w-32 rounded-md" />
                  <Skeleton className="h-10 w-32 rounded-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Papers Grid Skeleton */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 border rounded-lg p-6 bg-card">
                <Skeleton className="h-40 w-full md:w-1/3 rounded-lg" />
                <div className="flex-1 space-y-4">
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-20 rounded-full" />
                    <Skeleton className="h-6 w-20 rounded-full" />
                  </div>
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <div className="flex gap-3">
                    <Skeleton className="h-9 w-24 rounded-md" />
                    <Skeleton className="h-9 w-24 rounded-md" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination Skeleton */}
          <div className="mt-16 flex items-center justify-center gap-2">
            <Skeleton className="h-10 w-10 rounded-md" />
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} className="h-10 w-10 rounded-md" />
            ))}
            <Skeleton className="h-4 w-4 rounded-full" />
            <Skeleton className="h-10 w-10 rounded-md" />
          </div>
        </div>
      </section>

      {/* Partners Section Skeleton */}
      <section className="border-t bg-muted/30 py-24">
        <div className="container mx-auto px-4 text-center">
          <HeaderSkeleton className="text-center mb-16" />
          
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 md:grid-cols-4 max-w-4xl mx-auto">
            {Array.from({ length: 8 }).map((_, index) => (
              <Skeleton key={index} className="h-20 rounded-md mx-auto" style={{ width: '140px' }} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 