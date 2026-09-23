import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductPreview } from "@/components/landing/product-preview";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20"
    >
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="stagger-in mx-auto max-w-3xl text-center">
          <p className="label-kicker text-xs font-medium text-primary uppercase">
            Early access · Product-led billing
          </p>
          <h1 className="headline-display mt-5 text-foreground">
            Your revenue is <em className="italic">not</em> a spreadsheet.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Northline meters usage, invoices customers, and recovers failed
            payments — so the number you report matches the money in the bank.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#signup">
                Start free trial
                <ArrowRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#pricing">See pricing</a>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            14-day trial on every plan. No card required.
          </p>
        </div>
        <div className="mt-12 sm:mt-16">
          <ProductPreview />
        </div>
      </div>
    </section>
  );
}
