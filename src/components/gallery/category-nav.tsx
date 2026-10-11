import Link from "next/link";

import { categories } from "@/content/photos";
import { cn } from "@/lib/utils";

/** Category filters are real links so every category has its own crawlable URL. */
export function CategoryNav({ active }: { active?: string }) {
  const items = [{ slug: undefined, title: "All" }, ...categories];

  return (
    <nav aria-label="Portfolio categories" className="-mx-4 overflow-x-auto px-4 pb-2">
      <ul className="mx-auto flex w-max gap-2">
        {items.map((item) => {
          const isActive = item.slug === active;
          return (
            <li key={item.title}>
              <Link
                href={item.slug ? `/portfolio/${item.slug}` : "/portfolio"}
                aria-current={isActive ? "page" : undefined}
                scroll={false}
                className={cn(
                  "inline-flex h-10 items-center border px-5 text-xs tracking-[0.2em] whitespace-nowrap uppercase transition-colors",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary hover:text-foreground",
                )}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
