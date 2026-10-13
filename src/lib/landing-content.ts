export const navLinks = [
  { href: "#product", label: "Product" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#stories", label: "Status" },
] as const;

export const companies = [] as const;

export const stats = [] as const;

export const valuePoints = [
  {
    title: "Meter what you ship",
    body: "Planned: Define usage in your product. Northline aggregates events, applies prices, and keeps finance off the warehouse.",
  },
  {
    title: "Invoice without a handoff",
    body: "Planned: Prepaid, postpaid, or hybrid. Drafts go out on schedule with the right tax, currency, and contract terms.",
  },
  {
    title: "Recover revenue automatically",
    body: "Planned: Retries, dunning, and grace periods run in the background so failed payments do not vanish into a spreadsheet.",
  },
] as const;

export const features = [
  {
    icon: "gauge",
    title: "Usage meters",
    body: "Planned: Ship meters from your codebase. Version prices without a migration weekend.",
  },
  {
    icon: "file",
    title: "Smart invoicing",
    body: "Planned: Seat, usage, and hybrid bills in one ledger — with credits that actually apply.",
  },
  {
    icon: "rotate",
    title: "Dunning that collects",
    body: "Planned: Card retries, timed emails, and account holds you can explain to a customer.",
  },
  {
    icon: "chart",
    title: "Revenue you can close",
    body: "Planned: MRR, net retention, and deferred revenue that match the bank, not a model.",
  },
  {
    icon: "globe",
    title: "Customer portal",
    body: "Planned: Invoices, payment methods, and usage — self-serve, branded as you.",
  },
  {
    icon: "shield",
    title: "Audit trail",
    body: "Planned: Every charge, credit, and adjustment is attributable. Finance can trace it.",
  },
] as const;

export const plans = [] as const;

export const testimonials = [] as const;

export const WAITLIST_KEY = "northline.waitlist";

