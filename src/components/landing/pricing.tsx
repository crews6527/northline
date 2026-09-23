import { useState } from "react";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { plans } from "@/lib/landing-content";
import { cn } from "@/lib/utils";

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="label-kicker text-xs font-medium text-primary uppercase">
            Pricing
          </p>
          <h2 className="headline-section mt-4 text-foreground">
            Start free. Scale with revenue.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Every plan includes a 14-day trial. Annual billing saves two months.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div
            role="group"
            aria-label="Billing period"
            className="inline-flex rounded-full bg-secondary p-1"
          >
            <TogglePill
              pressed={!annual}
              onClick={() => setAnnual(false)}
              label="Monthly"
            />
            <TogglePill
              pressed={annual}
              onClick={() => setAnnual(true)}
              label="Annual"
              hint="−2 months"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => {
            const price =
              plan.monthly === null
                ? "Custom"
                : `$${annual ? Math.round(plan.monthly * 0.833) : plan.monthly}`;
            return (
              <article
                key={plan.id}
                className={cn(
                  "flex flex-col rounded-2xl p-5",
                  plan.featured
                    ? "bg-secondary shadow-border ring-1 ring-primary/40"
                    : "bg-card shadow-border",
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-medium tracking-tight">
                    {plan.name}
                  </h3>
                  {plan.featured ? <Badge>Most teams</Badge> : null}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{plan.blurb}</p>
                <p className="mt-6 flex items-baseline gap-1">
                  <span className="font-serif text-4xl tracking-tight tabular-nums">
                    {price}
                  </span>
                  {plan.monthly !== null ? (
                    <span className="text-sm text-muted-foreground">/mo</span>
                  ) : null}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {plan.monthly === null
                    ? "Volume pricing, billed annually"
                    : annual
                      ? "Billed annually"
                      : "Billed monthly"}
                </p>
                <Button
                  asChild
                  className="mt-6 w-full"
                  variant={plan.featured ? "default" : "outline"}
                >
                  <a href="#signup">{plan.cta}</a>
                </Button>
                <ul className="mt-6 flex flex-col gap-2.5">
                  {plan.features.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-snug"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-primary"
                        strokeWidth={1.75}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TogglePill({
  pressed,
  onClick,
  label,
  hint,
}: {
  pressed: boolean;
  onClick: () => void;
  label: string;
  hint?: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={cn(
        "inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-medium transition-[background-color,color] duration-150",
        pressed
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:text-foreground",
      )}
    >
      {label}
      {hint ? (
        <span className={cn("text-xs", pressed ? "opacity-80" : "opacity-60")}>
          {hint}
        </span>
      ) : null}
    </button>
  );
}
