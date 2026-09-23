import { testimonials } from "@/lib/landing-content";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <section id="stories" className="border-y border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="label-kicker text-xs font-medium text-primary uppercase">
              Stories
            </p>
            <h2 className="headline-section mt-4 text-foreground">
              Finance stopped dreading month-end.
            </h2>
          </div>
          <Button asChild variant="outline">
            <a href="#signup">
              Join them
              <ArrowRight />
            </a>
          </Button>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <blockquote
              key={item.name}
              className={cn(
                "flex flex-col justify-between rounded-xl bg-card p-5 shadow-border",
                index === 0 && "lg:col-span-1",
              )}
            >
              <p className="font-serif text-5xl leading-none text-primary/35" aria-hidden>
                “
              </p>
              <p className="mt-2 text-base leading-relaxed text-foreground">
                {item.quote}
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <span
                  className="flex size-10 items-center justify-center rounded-full bg-secondary text-xs font-medium tracking-wide text-primary"
                  aria-hidden
                >
                  {item.initials}
                </span>
                <span className="text-sm">
                  <span className="block font-medium text-foreground">
                    {item.name}
                  </span>
                  <span className="block text-muted-foreground">{item.role}</span>
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
