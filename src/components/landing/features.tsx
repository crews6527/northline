import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  FileText,
  Gauge,
  Globe,
  RotateCcw,
  Shield,
} from "lucide-react";
import { features } from "@/lib/landing-content";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const iconMap: Record<(typeof features)[number]["icon"], LucideIcon> = {
  gauge: Gauge,
  file: FileText,
  rotate: RotateCcw,
  chart: BarChart3,
  globe: Globe,
  shield: Shield,
};

export function Features() {
  return (
    <section id="features" className="border-y border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="label-kicker text-xs font-medium text-primary uppercase">
              Platform
            </p>
            <h2 className="headline-section mt-4 text-foreground">
              Everything between usage and cash.
            </h2>
          </div>
          <Button asChild variant="outline">
            <a href="#signup">
              Get started
              <ArrowRight />
            </a>
          </Button>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <article
                key={feature.title}
                className="rounded-xl bg-card p-5 shadow-border"
              >
                <div className="flex size-10 items-center justify-center rounded-md bg-secondary text-primary">
                  <Icon className="size-4" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-base font-medium tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
