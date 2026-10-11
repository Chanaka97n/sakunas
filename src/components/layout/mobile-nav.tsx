"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { WhatsappIcon } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { mainNav, siteConfig, whatsappUrl } from "@/config/site";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={<Button variant="ghost" size="icon-lg" className="hover:bg-white/10 md:hidden" aria-label="Open menu" />}
      >
        <MenuIcon className="size-6" />
      </SheetTrigger>
      <SheetContent side="right" className="w-full bg-background sm:max-w-sm">
        <SheetHeader className="border-b px-6 py-6">
          <SheetTitle className="font-heading text-2xl">{siteConfig.name}</SheetTitle>
          <SheetDescription>{siteConfig.tagline}</SheetDescription>
        </SheetHeader>
        <nav aria-label="Mobile" className="flex flex-col px-6">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={pathname === item.href ? "page" : undefined}
              className="border-b border-border/60 py-4 font-heading text-2xl transition-colors hover:text-primary aria-[current=page]:text-primary"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="mt-auto p-6">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants(), "h-12 w-full rounded-none tracking-[0.15em] uppercase")}
          >
            <WhatsappIcon className="size-5" />
            Chat on WhatsApp
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
