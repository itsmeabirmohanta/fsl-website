import { Skeleton, CardSkeleton, HeaderSkeleton } from "@/components/ui/skeleton";

export default function ContactPageLoading() {
  return (
    <>
      {/* Hero Section Skeleton */}
      <section className="relative overflow-hidden border-b py-20">
        <div className="container mx-auto px-4">
          <div className="flex min-h-[20vh] flex-col items-center justify-center text-center">
            <Skeleton className="h-8 w-40 rounded-full mb-8" />
            <HeaderSkeleton className="mb-8" />
            <Skeleton className="h-12 w-32 rounded-full mt-6" />
          </div>
        </div>
      </section>

      {/* Contact Form Section Skeleton */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2">
              {/* Form Skeleton */}
              <div className="space-y-6">
                <HeaderSkeleton />
                <Skeleton className="h-4 w-full mb-8" />
                
                <div className="space-y-4">
                  <Skeleton className="h-12 w-full rounded-md" />
                  <Skeleton className="h-12 w-full rounded-md" />
                  <Skeleton className="h-12 w-full rounded-md" />
                  <Skeleton className="h-40 w-full rounded-md" />
                  <Skeleton className="h-12 w-36 rounded-md" />
                </div>
              </div>

              {/* Locations Skeleton */}
              <div className="space-y-6">
                <HeaderSkeleton />
                <div className="grid gap-6 md:grid-cols-2">
                  {Array.from({ length: 2 }).map((_, index) => (
                    <div key={index} className="border rounded-lg p-6 shadow-sm">
                      <Skeleton className="h-6 w-3/4 mb-4" />
                      <Skeleton className="h-40 w-full rounded-lg mb-4" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-3/4 mb-4" />
                      <Skeleton className="h-4 w-1/2 mb-2" />
                      <Skeleton className="h-4 w-2/3 mb-4" />
                      <div className="flex items-center gap-2">
                        <Skeleton variant="circle" width={20} height={20} />
                        <Skeleton className="h-4 w-32" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Types Skeleton */}
      <section className="border-t bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <HeaderSkeleton className="text-center mb-16" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <CardSkeleton key={index} className="border rounded-lg p-6 shadow-sm" />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section Skeleton */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <HeaderSkeleton className="text-center mb-16" />
          
          <div className="mx-auto max-w-3xl space-y-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="border rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-center">
                  <Skeleton className="h-5 w-2/3" />
                  <Skeleton variant="circle" width={24} height={24} />
                </div>
                {index === 0 && (
                  <div className="mt-4 space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 