import { valuePoints } from "@/lib/landing-content";

export function Value() {
  return (
    <section id="product" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="label-kicker text-xs font-medium text-primary uppercase">
            Why Northline
          </p>
          <h2 className="headline-section mt-4 text-foreground">
            Three systems. One source of truth.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Metering lives in your product. Invoices live in a billing tool.
            Collections live in someone’s inbox. Northline closes the loop so
            finance, product, and support see the same customer.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {valuePoints.map((point, index) => (
            <article
              key={point.title}
              className="rounded-xl bg-card p-5 shadow-border"
            >
              <p className="font-serif text-3xl text-primary/70 tabular-nums">
                0{index + 1}
              </p>
              <h3 className="mt-4 text-lg font-medium tracking-tight">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {point.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
