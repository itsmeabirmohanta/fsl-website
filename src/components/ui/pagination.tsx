import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const Pagination = ({
  className,
  ...props
}: React.ComponentProps<"nav"> & {
  className?: string
}) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
)

const PaginationContent = ({
  className,
  ...props
}: React.ComponentProps<"ul"> & {
  className?: string
}) => (
  <ul
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
)

const PaginationItem = ({
  className,
  ...props
}: React.ComponentProps<"li"> & {
  className?: string
}) => (
  <li
    className={cn("", className)}
    {...props}
  />
)

type PaginationLinkProps = {
  isActive?: boolean
  href?: string
} & React.ComponentProps<typeof Link>

const PaginationLink = ({
  className,
  isActive,
  href = "#",
  ...props
}: PaginationLinkProps) => (
  <Link
    aria-current={isActive ? "page" : undefined}
    className={cn(
      "inline-flex h-9 min-w-9 items-center justify-center rounded-md px-3 text-sm font-medium transition-colors",
      isActive
        ? "bg-primary text-primary-foreground"
        : "bg-background hover:bg-muted hover:text-muted-foreground",
      className
    )}
    href={href}
    {...props}
  />
)

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
)

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
)

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span"> & {
  className?: string
}) => (
  <span
    aria-hidden
    className={cn("flex h-9 min-w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} 