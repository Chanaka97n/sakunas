import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <p className="eyebrow mb-4 text-primary">{eyebrow}</p>}
      <Heading className="text-4xl leading-tight font-medium sm:text-5xl">{title}</Heading>
      <div className={cn("my-6 flex items-center gap-3 text-brand-accent", align === "center" && "justify-center")} aria-hidden="true">
        <span className="h-px w-12 bg-current" />
        <span className="size-1.5 rotate-45 bg-current" />
        <span className="h-px w-12 bg-current" />
      </div>
      {description && <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>}
    </div>
  );
}
