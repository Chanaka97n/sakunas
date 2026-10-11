import Link from "next/link";

import { WhatsappIcon } from "@/components/icons";
import { Reveal } from "@/components/sections/reveal";
import { buttonVariants } from "@/components/ui/button";
import { whatsappUrl } from "@/config/site";
import { cn } from "@/lib/utils";

export function CallToAction() {
  return (
    <section className="py-24 sm:py-28">
      <Reveal className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="font-script text-4xl text-primary">Let&apos;s create something beautiful</p>
        <h2 className="mt-4 text-4xl font-medium sm:text-5xl">Tell us about your day</h2>
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground sm:text-lg">
          Dates fill up quickly during the wedding season. Share your date and venue and we&apos;ll get back to you
          within 24 hours.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: "lg" }), "h-12 min-w-52 rounded-none px-8 tracking-[0.2em] uppercase")}
          >
            Check Availability
          </Link>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-12 min-w-52 rounded-none px-8 tracking-[0.2em] uppercase",
            )}
          >
            <WhatsappIcon className="size-4" />
            WhatsApp Us
          </a>
        </div>
      </Reveal>
    </section>
  );
}
