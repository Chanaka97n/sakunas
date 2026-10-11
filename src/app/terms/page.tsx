import { PageHeader } from "@/components/sections/page-header";
import { getPhoto } from "@/content/photos";
import { terms } from "@/content/site-content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms & Conditions",
  description: "Booking terms and conditions for wedding photography services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Booking" title="Terms & Conditions" photo={getPhoto("kandyan-wedding-doorway")} />
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <ol className="space-y-5">
            {terms.map((term, i) => (
              <li key={term} className="flex gap-5 border-b border-border pb-5">
                <span className="font-heading text-2xl text-primary">{String(i + 1).padStart(2, "0")}</span>
                <p className="pt-1.5 leading-relaxed">{term}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-sm text-muted-foreground">
            By booking our services, you agree to all terms and conditions listed above.
          </p>
        </div>
      </section>
    </>
  );
}
