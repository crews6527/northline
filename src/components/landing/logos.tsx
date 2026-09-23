import { companies, stats } from "@/lib/landing-content";
import { Separator } from "@/components/ui/separator";

export function LogoBar() {
  return (
    <section className="border-y border-border py-12 sm:py-16" aria-label="Social proof">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="label-kicker text-center text-xs font-medium text-muted-foreground uppercase">
          Trusted by revenue teams who outgrew the stack
        </p>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {companies.map((name) => (
            <li
              key={name}
              className="font-serif text-xl italic tracking-tight text-muted-foreground/80 sm:text-2xl"
            >
              {name}
            </li>
          ))}
        </ul>
        <Separator className="my-10" />
        <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                {stat.label}
              </dt>
              <dd className="mt-2 font-serif text-3xl tracking-tight text-foreground tabular-nums sm:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
