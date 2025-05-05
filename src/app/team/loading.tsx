import { Skeleton, TeamMemberSkeleton, CardSkeleton, HeaderSkeleton } from "@/components/ui/skeleton";

export default function TeamPageLoading() {
  return (
    <>
      {/* Hero Section Skeleton */}
      <section className="relative overflow-hidden border-b py-20">
        <div className="container mx-auto px-4">
          <div className="flex min-h-[30vh] flex-col items-center justify-center text-center">
            <Skeleton className="h-8 w-40 rounded-full mb-8" />
            <HeaderSkeleton className="mb-8" />
            <Skeleton className="h-12 w-32 rounded-full mt-6" />
          </div>
        </div>
      </section>

      {/* Leadership Section Skeleton */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <HeaderSkeleton className="text-center mb-16" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="border rounded-lg p-6 shadow-sm">
                <Skeleton className="h-64 w-full rounded-xl mb-6" />
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/3 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-4" />
                <div className="flex gap-2 mt-6">
                  <Skeleton variant="circle" width={32} height={32} />
                  <Skeleton variant="circle" width={32} height={32} />
                  <Skeleton variant="circle" width={32} height={32} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section Skeleton */}
      <section className="border-y bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <HeaderSkeleton className="text-center mb-16" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="border rounded-lg p-6 shadow-sm">
                <Skeleton className="h-14 w-14 rounded-xl mb-4" />
                <Skeleton className="h-8 w-16 mb-2" />
                <Skeleton className="h-6 w-1/2 mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid Section Skeleton */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <HeaderSkeleton className="text-center mb-10" />
          
          <div className="flex justify-center mb-10 overflow-x-auto py-2">
            <div className="flex gap-2 px-4">
              <Skeleton className="h-10 w-24 rounded-full" />
              {Array.from({ length: 4 }).map((_, index) => (
                <Skeleton key={index} className="h-10 w-28 rounded-full" />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <TeamMemberSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Skeleton */}
      <section className="border-t bg-primary/10 py-24">
        <div className="container mx-auto px-4 text-center">
          <HeaderSkeleton className="mx-auto mb-8" />
          
          <div className="grid gap-6 max-w-3xl mx-auto sm:grid-cols-2 md:grid-cols-3 mb-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <CardSkeleton key={index} className="border rounded-lg shadow-sm" />
            ))}
          </div>
          
          <Skeleton className="h-12 w-48 rounded-md mx-auto" />
        </div>
      </section>
    </>
  );
} 