import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as Menu, c as FileText, d as ArrowRight, i as RotateCcw, l as Check, o as Globe, r as Shield, s as Gauge, t as X, u as ChartColumn } from "../_libs/lucide-react.mjs";
import { t as email } from "../_libs/zod.mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogClose, o as DialogTitle, r as DialogContent, s as DialogTrigger, t as Dialog, u as Slot } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Root } from "../_libs/radix-ui__react-separator.mjs";
import { t as Root$1 } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-EThJtIp3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var navLinks = [
	{
		href: "#product",
		label: "Product"
	},
	{
		href: "#features",
		label: "Features"
	},
	{
		href: "#pricing",
		label: "Pricing"
	},
	{
		href: "#stories",
		label: "Stories"
	}
];
var companies = [
	"Aster",
	"Helix",
	"Copper",
	"Nimbus",
	"Vantage",
	"Fieldkit"
];
var stats = [
	{
		value: "$410M",
		label: "billed through Northline"
	},
	{
		value: "98.4%",
		label: "collection rate"
	},
	{
		value: "12k+",
		label: "invoices automated monthly"
	},
	{
		value: "6 days",
		label: "faster month-end close"
	}
];
var valuePoints = [
	{
		title: "Meter what you ship",
		body: "Define usage in your product. Northline aggregates events, applies prices, and keeps finance off the warehouse."
	},
	{
		title: "Invoice without a handoff",
		body: "Prepaid, postpaid, or hybrid. Drafts go out on schedule with the right tax, currency, and contract terms."
	},
	{
		title: "Recover revenue automatically",
		body: "Retries, dunning, and grace periods run in the background so failed payments do not vanish into a spreadsheet."
	}
];
var features = [
	{
		icon: "gauge",
		title: "Usage meters",
		body: "Ship meters from your codebase. Version prices without a migration weekend."
	},
	{
		icon: "file",
		title: "Smart invoicing",
		body: "Seat, usage, and hybrid bills in one ledger — with credits that actually apply."
	},
	{
		icon: "rotate",
		title: "Dunning that collects",
		body: "Card retries, timed emails, and account holds you can explain to a customer."
	},
	{
		icon: "chart",
		title: "Revenue you can close",
		body: "MRR, net retention, and deferred revenue that match the bank, not a model."
	},
	{
		icon: "globe",
		title: "Customer portal",
		body: "Invoices, payment methods, and usage — self-serve, branded as you."
	},
	{
		icon: "shield",
		title: "Audit trail",
		body: "Every charge, credit, and adjustment is attributable. Finance can trace it."
	}
];
var plans = [
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
			"14-day trial"
		]
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
			"Slack and email support"
		]
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
			"Migration support"
		]
	}
];
var testimonials = [
	{
		quote: "We closed the books six days faster in the first month. Northline’s MRR finally matches Stripe — and our board packet.",
		name: "Maya Chen",
		role: "Head of Finance, Aster Labs",
		initials: "MC"
	},
	{
		quote: "Usage billing used to be a weekend project every quarter. Now it is a meter and a price. Engineering stopped being the billing team.",
		name: "Jordan Hale",
		role: "Founder, Helix Cloud",
		initials: "JH"
	},
	{
		quote: "Failed payments used to vanish into a spreadsheet. Recovery is just happening. Collections is no longer a person.",
		name: "Priya Shah",
		role: "VP Operations, Copper AI",
		initials: "PS"
	}
];
var WAITLIST_KEY = "northline.waitlist";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none transition-[color,background-color,box-shadow,opacity,transform] duration-150 ease-out focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-95 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:opacity-90",
			secondary: "bg-secondary text-secondary-foreground hover:bg-accent",
			outline: "border border-border bg-transparent text-foreground hover:bg-secondary",
			ghost: "text-foreground hover:bg-secondary",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-11 min-h-11 px-4",
			sm: "h-9 min-h-9 rounded-md px-3 text-sm",
			lg: "h-12 min-h-12 rounded-lg px-6 text-base",
			icon: "size-11 min-h-11 min-w-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		"data-slot": "button",
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
var iconMap = {
	gauge: Gauge,
	file: FileText,
	rotate: RotateCcw,
	chart: ChartColumn,
	globe: Globe,
	shield: Shield
};
function Features() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "features",
		className: "border-y border-border py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-kicker text-xs font-medium text-primary uppercase",
						children: "Platform"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "headline-section mt-4 text-foreground",
						children: "Everything between usage and cash."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#signup",
						children: ["Get started", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: features.map((feature) => {
					const Icon = iconMap[feature.icon];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-card p-5 shadow-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex size-10 items-center justify-center rounded-md bg-secondary text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-4",
									strokeWidth: 1.75
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-base font-medium tracking-tight",
								children: feature.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: feature.body
							})
						]
					}, feature.title);
				})
			})]
		})
	});
}
function NorthMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		className: cn("size-6 text-primary", className),
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M12 3v18",
			stroke: "currentColor",
			strokeWidth: "1.6",
			strokeLinecap: "round"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M12 3 8.8 7.4M12 3l3.2 4.4",
			stroke: "currentColor",
			strokeWidth: "1.6",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})]
	});
}
function Logo({ className, markClassName }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2 text-foreground", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NorthMark, { className: markClassName }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm font-medium tracking-tight",
			children: "Northline"
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:flex-row sm:items-start sm:justify-between sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted-foreground",
					children: "The billing layer for product-led teams. Meter, invoice, collect — one ledger."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label-kicker text-xs font-medium text-muted-foreground uppercase",
					children: "Product"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 flex flex-col gap-2",
					children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "text-sm text-foreground hover:text-primary",
						children: link.label
					}) }, link.href))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label-kicker text-xs font-medium text-muted-foreground uppercase",
					children: "Get started"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 flex flex-col gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#signup",
						className: "text-sm text-foreground hover:text-primary",
						children: "Request access"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#pricing",
						className: "text-sm text-foreground hover:text-primary",
						children: "Pricing"
					}) })]
				})] })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mx-auto mt-10 max-w-6xl px-4 text-xs text-muted-foreground sm:px-6",
			children: "© 2026 Northline, Inc. All rights reserved."
		})]
	});
}
var badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium tracking-wide", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground",
		outline: "border-border bg-transparent text-muted-foreground",
		muted: "border-transparent bg-secondary text-muted-foreground",
		success: "border-transparent bg-success/15 text-success"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"data-slot": "badge",
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var navItems = [
	"Overview",
	"Customers",
	"Invoices",
	"Usage",
	"Settings"
];
var invoices = [
	{
		name: "Aster Labs",
		amount: "$12,400",
		status: "Paid"
	},
	{
		name: "Helix Cloud",
		amount: "$8,210",
		status: "Retrying"
	},
	{
		name: "Copper AI",
		amount: "$21,050",
		status: "Paid"
	},
	{
		name: "Nimbus Health",
		amount: "$4,800",
		status: "Draft"
	}
];
function StatusBadge({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex rounded-full px-2 py-0.5 text-xs font-medium", {
			Paid: "bg-success/15 text-success",
			Retrying: "bg-destructive/15 text-destructive",
			Draft: "bg-secondary text-muted-foreground"
		}[status]),
		children: status
	});
}
function ProductPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-xl bg-card p-1 shadow-preview",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "overflow-hidden rounded-lg bg-background",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 border-b border-border px-3 py-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-secondary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-secondary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-secondary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto flex h-7 w-full max-w-xs items-center justify-center rounded-md bg-secondary text-xs text-muted-foreground",
						children: "app.northline.dev"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "hidden border-r border-border p-4 md:block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 flex items-center gap-2 text-sm font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NorthMark, { className: "size-4" }), "Northline"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-col gap-0.5",
						children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: cn("rounded-md px-2.5 py-2 text-sm", item === "Overview" ? "bg-secondary text-foreground" : "text-muted-foreground"),
							children: item
						}, item))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 sm:p-5 md:col-span-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium tracking-wide text-muted-foreground uppercase",
								children: "October 2026"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base font-medium",
								children: "Revenue overview"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "muted",
								children: "Live"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 grid grid-cols-2 gap-2 lg:grid-cols-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
									label: "MRR",
									value: "$248,410",
									delta: "+12.4%",
									good: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
									label: "Net retention",
									value: "118%",
									delta: "+3.1%",
									good: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
									label: "Failed payments",
									value: "$6,240",
									delta: "-18%",
									good: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
									label: "Active meters",
									value: "34",
									delta: "+4",
									good: true
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 lg:grid-cols-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-card p-3 shadow-border lg:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-2 text-xs font-medium text-muted-foreground",
									children: "Recognized MRR"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MrrChart, {})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-card p-3 shadow-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-2 text-xs font-medium text-muted-foreground",
									children: "Latest invoices"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "flex flex-col gap-2",
									children: invoices.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center justify-between gap-2 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "truncate text-foreground",
											children: row.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "tabular-nums text-muted-foreground",
												children: row.amount
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: row.status })]
										})]
									}, row.name))
								})]
							})]
						})
					]
				})]
			})]
		})
	});
}
function Kpi({ label, value, delta, good }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-card p-3 shadow-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-lg font-medium tabular-nums tracking-tight",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-0.5 text-xs tabular-nums", good ? "text-success" : "text-destructive"),
				children: delta
			})
		]
	});
}
function MrrChart() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 400 120",
		className: "h-28 w-full text-primary",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "mrrFill",
				x1: "0",
				y1: "0",
				x2: "0",
				y2: "1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "currentColor",
					stopOpacity: "0.28"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "currentColor",
					stopOpacity: "0"
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0 92 L36 84 L72 86 L108 74 L144 68 L180 70 L216 54 L252 50 L288 42 L324 32 L360 28 L400 22 L400 120 L0 120 Z",
				fill: "url(#mrrFill)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0 92 L36 84 L72 86 L108 74 L144 68 L180 70 L216 54 L252 50 L288 42 L324 32 L360 28 L400 22",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.75",
				strokeLinejoin: "round",
				strokeLinecap: "round"
			})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-grid pointer-events-none absolute inset-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "stagger-in mx-auto max-w-3xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-kicker text-xs font-medium text-primary uppercase",
						children: "Early access · Product-led billing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "headline-display mt-5 text-foreground",
						children: [
							"Your revenue is ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "italic",
								children: "not"
							}),
							" a spreadsheet."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: "Northline meters usage, invoices customers, and recovers failed payments — so the number you report matches the money in the bank."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#signup",
								children: ["Start free trial", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#pricing",
								children: "See pricing"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted-foreground",
						children: "14-day trial on every plan. No card required."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 sm:mt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductPreview, {})
			})]
		})]
	});
}
function Separator({ className, orientation = "horizontal", decorative = true, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		"data-slot": "separator",
		decorative,
		orientation,
		className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-px w-full" : "h-full w-px", className),
		...props
	});
}
function LogoBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border py-12 sm:py-16",
		"aria-label": "Social proof",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label-kicker text-center text-xs font-medium text-muted-foreground uppercase",
					children: "Trusted by revenue teams who outgrew the stack"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4",
					children: companies.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "font-serif text-xl italic tracking-tight text-muted-foreground/80 sm:text-2xl",
						children: name
					}, name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "grid grid-cols-2 gap-8 lg:grid-cols-4",
					children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs font-medium tracking-wide text-muted-foreground uppercase",
							children: stat.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 font-serif text-3xl tracking-tight text-foreground tabular-nums sm:text-4xl",
							children: stat.value
						})]
					}, stat.label))
				})
			]
		})
	});
}
function Sheet({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		"data-slot": "sheet",
		...props
	});
}
function SheetTrigger({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
		"data-slot": "sheet-trigger",
		...props
	});
}
function SheetPortal({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogPortal, {
		"data-slot": "sheet-portal",
		...props
	});
}
function SheetOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
		"data-slot": "sheet-overlay",
		className: cn("fixed inset-0 z-50 bg-background/80 data-[state=closed]:animate-none data-[state=open]:animate-none", className),
		...props
	});
}
function SheetContent({ className, children, side = "right", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		"data-slot": "sheet-content",
		className: cn("fixed z-50 flex h-full w-full max-w-sm flex-col gap-4 bg-card p-6 text-card-foreground shadow-border outline-none transition-transform duration-200 ease-out data-[state=closed]:duration-150", side === "right" && "inset-y-0 right-0 border-l border-border", side === "left" && "inset-y-0 left-0 border-r border-border", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			className: "absolute top-4 right-4 inline-flex size-11 items-center justify-center rounded-md text-muted-foreground transition-colors duration-150 hover:bg-secondary hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring outline-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function SheetHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "sheet-header",
		className: cn("flex flex-col gap-1.5 pr-8", className),
		...props
	});
}
function SheetTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
		"data-slot": "sheet-title",
		className: cn("text-lg font-medium tracking-tight", className),
		...props
	});
}
function scrollToHash(href) {
	const id = href.replace("#", "");
	const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
}
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(false);
	function go(href) {
		setOpen(false);
		window.setTimeout(() => {
			scrollToHash(href);
		}, 160);
	}
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const elements = navLinks.map((l) => l.href.slice(1)).map((id) => document.getElementById(id)).filter((el) => Boolean(el));
		if (elements.length === 0) return;
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target.id) setActive(`#${visible.target.id}`);
		}, {
			rootMargin: "-30% 0px -55% 0px",
			threshold: [
				.1,
				.25,
				.5
			]
		});
		for (const el of elements) observer.observe(el);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow] duration-200 ease-out", scrolled ? "bg-background/95 shadow-border" : "bg-transparent"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "Northline home"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 md:flex",
					"aria-label": "Primary",
					children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						"aria-current": active === link.href ? "page" : void 0,
						className: cn("text-sm font-medium transition-colors duration-150", active === link.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"),
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#signup",
							children: "Start free trial"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
					open,
					onOpenChange: setOpen,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "md:hidden",
							"aria-label": "Open menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
						side: "right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: "Menu" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "mt-4 flex flex-col gap-1",
							"aria-label": "Mobile",
							children: [navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: link.href,
								onClick: (event) => {
									event.preventDefault();
									go(link.href);
								},
								className: "flex min-h-11 items-center rounded-md px-3 text-base text-foreground hover:bg-secondary",
								children: link.label
							}, link.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#signup",
									onClick: (event) => {
										event.preventDefault();
										go("#signup");
									},
									children: "Start free trial"
								})
							})]
						})]
					})]
				})
			]
		})
	});
}
function Pricing() {
	const [annual, setAnnual] = (0, import_react.useState)(true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pricing",
		className: "py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label-kicker text-xs font-medium text-primary uppercase",
							children: "Pricing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "headline-section mt-4 text-foreground",
							children: "Start free. Scale with revenue."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base leading-relaxed text-muted-foreground",
							children: "Every plan includes a 14-day trial. Annual billing saves two months."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						role: "group",
						"aria-label": "Billing period",
						className: "inline-flex rounded-full bg-secondary p-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TogglePill, {
							pressed: !annual,
							onClick: () => setAnnual(false),
							label: "Monthly"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TogglePill, {
							pressed: annual,
							onClick: () => setAnnual(true),
							label: "Annual",
							hint: "−2 months"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 lg:grid-cols-3",
					children: plans.map((plan) => {
						const price = plan.monthly === null ? "Custom" : `$${annual ? Math.round(plan.monthly * .833) : plan.monthly}`;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: cn("flex flex-col rounded-2xl p-5", plan.featured ? "bg-secondary shadow-border ring-1 ring-primary/40" : "bg-card shadow-border"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-base font-medium tracking-tight",
										children: plan.name
									}), plan.featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "Most teams" }) : null]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: plan.blurb
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-6 flex items-baseline gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-serif text-4xl tracking-tight tabular-nums",
										children: price
									}), plan.monthly !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-foreground",
										children: "/mo"
									}) : null]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: plan.monthly === null ? "Volume pricing, billed annually" : annual ? "Billed annually" : "Billed monthly"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									className: "mt-6 w-full",
									variant: plan.featured ? "default" : "outline",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#signup",
										children: plan.cta
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 flex flex-col gap-2.5",
									children: plan.features.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2 text-sm leading-snug",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
											className: "mt-0.5 size-4 shrink-0 text-primary",
											strokeWidth: 1.75
										}), item]
									}, item))
								})
							]
						}, plan.id);
					})
				})
			]
		})
	});
}
function TogglePill({ pressed, onClick, label, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"aria-pressed": pressed,
		onClick,
		className: cn("inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-medium transition-[background-color,color] duration-150", pressed ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"),
		children: [label, hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("text-xs", pressed ? "opacity-80" : "opacity-60"),
			children: hint
		}) : null]
	});
}
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		"data-slot": "input",
		className: cn("h-11 min-h-11 w-full rounded-md border border-input bg-transparent px-3 text-sm text-foreground shadow-none outline-none transition-[box-shadow,border-color] duration-150 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40 disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$1, {
		"data-slot": "label",
		className: cn("text-sm font-medium leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
		...props
	});
}
var emailSchema = email();
function readList() {
	try {
		const raw = localStorage.getItem(WAITLIST_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}
function Signup() {
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [message, setMessage] = (0, import_react.useState)("");
	function onSubmit(event) {
		event.preventDefault();
		const form = event.currentTarget;
		const data = new FormData(form);
		const email = String(data.get("email") ?? "").trim().toLowerCase();
		const company = String(data.get("company") ?? "").trim();
		if (!emailSchema.safeParse(email).success) {
			setStatus("error");
			setMessage("Enter a valid work email.");
			return;
		}
		const list = readList();
		if (list.some((entry) => entry.email === email)) {
			setStatus("duplicate");
			setMessage("You’re already on the list. We’ll write when your workspace is ready.");
			return;
		}
		list.push({
			email,
			company,
			ts: Date.now()
		});
		localStorage.setItem(WAITLIST_KEY, JSON.stringify(list));
		setStatus("success");
		setMessage("You’re on the list. We’ll write when your workspace is ready.");
		form.reset();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "signup",
		className: "py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl bg-card p-6 shadow-border sm:p-10 lg:p-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 lg:grid-cols-2 lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label-kicker text-xs font-medium text-primary uppercase",
							children: "Early access"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "headline-section mt-4 text-foreground",
							children: "Get your books to match the bank."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-md text-base leading-relaxed text-muted-foreground",
							children: "Join the list. We open workspaces in the order we receive requests. 14-day trial on every plan after launch — no card required."
						})
					] }), status === "success" || status === "duplicate" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-h-40 items-center gap-3 rounded-xl bg-secondary p-5",
						role: "status",
						"aria-live": "polite",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-10 shrink-0 items-center justify-center rounded-full bg-success/15 text-success",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-foreground",
							children: message
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "flex flex-col gap-4",
						noValidate: true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "email",
										children: "Work email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "email",
										name: "email",
										type: "email",
										autoComplete: "email",
										required: true,
										placeholder: "maya@aster.io",
										"aria-invalid": status === "error",
										"aria-describedby": status === "error" ? "email-error" : void 0
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "company",
										children: "Company"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "company",
										name: "company",
										autoComplete: "organization",
										placeholder: "Aster Labs"
									})]
								})]
							}),
							status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								id: "email-error",
								className: "text-sm text-destructive",
								role: "alert",
								children: message
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-3 sm:flex-row sm:items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "submit",
									size: "lg",
									children: ["Request access", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "We’ll only email about your workspace."
								})]
							})
						]
					})]
				})
			})
		})
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "stories",
		className: "border-y border-border py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-kicker text-xs font-medium text-primary uppercase",
						children: "Stories"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "headline-section mt-4 text-foreground",
						children: "Finance stopped dreading month-end."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#signup",
						children: ["Join them", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 lg:grid-cols-3",
				children: testimonials.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: cn("flex flex-col justify-between rounded-xl bg-card p-5 shadow-border", index === 0 && "lg:col-span-1"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-5xl leading-none text-primary/35",
							"aria-hidden": true,
							children: "“"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-base leading-relaxed text-foreground",
							children: item.quote
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
							className: "mt-6 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-10 items-center justify-center rounded-full bg-secondary text-xs font-medium tracking-wide text-primary",
								"aria-hidden": true,
								children: item.initials
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-medium text-foreground",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-muted-foreground",
									children: item.role
								})]
							})]
						})
					]
				}, item.name))
			})]
		})
	});
}
function Value() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "product",
		className: "py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-kicker text-xs font-medium text-primary uppercase",
						children: "Why Northline"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "headline-section mt-4 text-foreground",
						children: "Three systems. One source of truth."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-base leading-relaxed text-muted-foreground",
						children: "Metering lives in your product. Invoices live in a billing tool. Collections live in someone’s inbox. Northline closes the loop so finance, product, and support see the same customer."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 md:grid-cols-3",
				children: valuePoints.map((point, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl bg-card p-5 shadow-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-serif text-3xl text-primary/70 tabular-nums",
							children: ["0", index + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-lg font-medium tracking-tight",
							children: point.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: point.body
						})
					]
				}, point.title))
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "main",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoBar, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Value, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signup, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Home as component };
