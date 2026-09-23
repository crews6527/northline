export const navLinks = [
  { href: "#product", label: "Product" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#stories", label: "Stories" },
] as const;

export const companies = [
  "Aster",
  "Helix",
  "Copper",
  "Nimbus",
  "Vantage",
  "Fieldkit",
] as const;

export const stats = [
  { value: "$410M", label: "billed through Northline" },
  { value: "98.4%", label: "collection rate" },
  { value: "12k+", label: "invoices automated monthly" },
  { value: "6 days", label: "faster month-end close" },
] as const;

export const valuePoints = [
  {
    title: "Meter what you ship",
    body: "Define usage in your product. Northline aggregates events, applies prices, and keeps finance off the warehouse.",
  },
  {
    title: "Invoice without a handoff",
    body: "Prepaid, postpaid, or hybrid. Drafts go out on schedule with the right tax, currency, and contract terms.",
  },
  {
    title: "Recover revenue automatically",
    body: "Retries, dunning, and grace periods run in the background so failed payments do not vanish into a spreadsheet.",
  },
] as const;

export const features = [
  {
    icon: "gauge",
    title: "Usage meters",
    body: "Ship meters from your codebase. Version prices without a migration weekend.",
  },
  {
    icon: "file",
    title: "Smart invoicing",
    body: "Seat, usage, and hybrid bills in one ledger — with credits that actually apply.",
  },
  {
    icon: "rotate",
    title: "Dunning that collects",
    body: "Card retries, timed emails, and account holds you can explain to a customer.",
  },
  {
    icon: "chart",
    title: "Revenue you can close",
    body: "MRR, net retention, and deferred revenue that match the bank, not a model.",
  },
  {
    icon: "globe",
    title: "Customer portal",
    body: "Invoices, payment methods, and usage — self-serve, branded as you.",
  },
  {
    icon: "shield",
    title: "Audit trail",
    body: "Every charge, credit, and adjustment is attributable. Finance can trace it.",
  },
] as const;

export const plans = [
  {
    id: "starter",
    name: "Starter",
    monthly: 49,
    blurb: "For teams replacing spreadsheets.",
    cta: "Start free trial",
    featured: false,
    features: [
      "Up to $50k ARR billed",
      "3 usage meters",
      "Card and ACH",
      "Email support",
      "14-day trial",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    monthly: 199,
    blurb: "For product-led teams scaling usage.",
    cta: "Start free trial",
    featured: true,
    features: [
      "Up to $1M ARR billed",
      "Unlimited meters",
      "Dunning and customer portal",
      "Revenue reports",
      "Slack and email support",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    monthly: null,
    blurb: "For volume, contracts, and SSO.",
    cta: "Talk to us",
    featured: false,
    features: [
      "Unlimited volume",
      "SSO, sandbox, and SLA",
      "Custom contracts and tax",
      "Dedicated success",
      "Migration support",
    ],
  },
] as const;

export const testimonials = [
  {
    quote:
      "We closed the books six days faster in the first month. Northline’s MRR finally matches Stripe — and our board packet.",
    name: "Maya Chen",
    role: "Head of Finance, Aster Labs",
    initials: "MC",
  },
  {
    quote:
      "Usage billing used to be a weekend project every quarter. Now it is a meter and a price. Engineering stopped being the billing team.",
    name: "Jordan Hale",
    role: "Founder, Helix Cloud",
    initials: "JH",
  },
  {
    quote:
      "Failed payments used to vanish into a spreadsheet. Recovery is just happening. Collections is no longer a person.",
    name: "Priya Shah",
    role: "VP Operations, Copper AI",
    initials: "PS",
  },
] as const;

export const WAITLIST_KEY = "northline.waitlist";
