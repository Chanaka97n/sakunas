"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Logo } from "@/components/layout/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { buttonVariants } from "@/components/ui/button";
import { mainNav } from "@/config/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The home page opens on a full-bleed photo, so the header starts transparent there.
  const overHero = pathname === "/" && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        overHero
          ? "bg-gradient-to-b from-black/50 to-transparent text-white"
          : "border-b border-border/60 bg-background/90 text-foreground backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {mainNav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative py-1 text-sm tracking-[0.15em] uppercase transition-opacity hover:opacity-100",
                  active ? "opacity-100" : "opacity-75",
                  "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform hover:after:scale-x-100",
                  active && "after:scale-x-100",
                )}
              >
                {item.title}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: overHero ? "outline" : "default" }),
              "h-10 rounded-none px-5 text-xs tracking-[0.2em] uppercase",
              overHero && "border-white/70 bg-transparent text-white hover:bg-white hover:text-foreground",
            )}
          >
            Book Now
          </Link>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
