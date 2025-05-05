import { Skeleton, CardSkeleton, HeaderSkeleton } from "@/components/ui/skeleton";

export default function BlogPageLoading() {
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

      {/* Blog Filters Skeleton */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Skeleton className="h-10 w-24 rounded-md" />
              <div className="flex gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Skeleton key={index} className="h-8 w-24 rounded-full" />
                ))}
              </div>
            </div>
            <Skeleton className="h-10 w-60 rounded-md" />
          </div>
        </div>
      </section>

      {/* Featured Post Skeleton */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden rounded-xl border bg-card relative">
            <div className="grid md:grid-cols-2 gap-6 p-6">
              <Skeleton className="h-[400px] w-full rounded-lg" />
              <div className="space-y-4 flex flex-col justify-center">
                <Skeleton className="h-6 w-24 rounded-full" />
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
                <Skeleton className="h-10 w-32 rounded-md mt-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid Skeleton */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <CardSkeleton key={index} className="border rounded-lg overflow-hidden h-[460px]" />
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

      {/* Newsletter Skeleton */}
      <section className="border-t bg-muted/30 py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <HeaderSkeleton className="text-center mb-8" />
          <Skeleton className="h-4 w-full max-w-xl mx-auto mb-8" />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
            <Skeleton className="h-12 w-full rounded-md" />
            <Skeleton className="h-12 w-40 rounded-md" />
          </div>
        </div>
      </section>
    </>
  );
} 