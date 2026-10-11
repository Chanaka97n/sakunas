import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-4 pt-20 text-center">
      <p className="font-script text-5xl text-primary">Oops</p>
      <h1 className="mt-4 text-5xl font-medium">This page wandered off</h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to the love stories.
      </p>
      <Link href="/" className={cn(buttonVariants({ size: "lg" }), "mt-8 h-12 rounded-none px-8 tracking-[0.2em] uppercase")}>
        Back to home
      </Link>
    </section>
  );
}
