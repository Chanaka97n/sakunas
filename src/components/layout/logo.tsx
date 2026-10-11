import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("group flex flex-col leading-none", className)} aria-label={`${siteConfig.name} home`}>
      <span className="font-heading text-2xl font-semibold tracking-wide">{siteConfig.name}</span>
      <span className="mt-1 text-[0.6rem] tracking-[0.35em] uppercase opacity-80">Wedding Photography</span>
    </Link>
  );
}
