import { Logo } from "@/components/landing/logo";
import { navLinks } from "@/lib/landing-content";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            The billing layer for product-led teams. Meter, invoice, collect —
            one ledger.
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <div>
            <p className="label-kicker text-xs font-medium text-muted-foreground uppercase">
              Product
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label-kicker text-xs font-medium text-muted-foreground uppercase">
              Get started
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              <li>
                <a href="#signup" className="text-sm text-foreground hover:text-primary">
                  Request access
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-foreground hover:text-primary">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-4 text-xs text-muted-foreground sm:px-6">
        © 2026 Northline, Inc. All rights reserved.
      </p>
    </footer>
  );
}
