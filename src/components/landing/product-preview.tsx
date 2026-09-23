import { Badge } from "@/components/ui/badge";
import { NorthMark } from "@/components/landing/logo";
import { cn } from "@/lib/utils";

const navItems = ["Overview", "Customers", "Invoices", "Usage", "Settings"];

const invoices = [
  { name: "Aster Labs", amount: "$12,400", status: "Paid" },
  { name: "Helix Cloud", amount: "$8,210", status: "Retrying" },
  { name: "Copper AI", amount: "$21,050", status: "Paid" },
  { name: "Nimbus Health", amount: "$4,800", status: "Draft" },
] as const;

function StatusBadge({ status }: { status: (typeof invoices)[number]["status"] }) {
  const styles: Record<typeof status, string> = {
    Paid: "bg-success/15 text-success",
    Retrying: "bg-destructive/15 text-destructive",
    Draft: "bg-secondary text-muted-foreground",
  };
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-2 py-0.5 text-xs font-medium",
        styles[status],
      )}
    >
      {status}
    </span>
  );
}

export function ProductPreview() {
  return (
    <div className="rounded-xl bg-card p-1 shadow-preview">
      <div className="overflow-hidden rounded-lg bg-background">
        <div className="flex items-center gap-2 border-b border-border px-3 py-2">
          <span className="size-2 rounded-full bg-secondary" />
          <span className="size-2 rounded-full bg-secondary" />
          <span className="size-2 rounded-full bg-secondary" />
          <div className="mx-auto flex h-7 w-full max-w-xs items-center justify-center rounded-md bg-secondary text-xs text-muted-foreground">
            app.northline.dev
          </div>
        </div>

        <div className="grid md:grid-cols-4">
          <aside className="hidden border-r border-border p-4 md:block">
            <div className="mb-6 flex items-center gap-2 text-sm font-medium">
              <NorthMark className="size-4" />
              Northline
            </div>
            <ul className="flex flex-col gap-0.5">
              {navItems.map((item) => (
                <li
                  key={item}
                  className={cn(
                    "rounded-md px-2.5 py-2 text-sm",
                    item === "Overview"
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  {item}
                </li>
              ))}
            </ul>
          </aside>

          <div className="p-4 sm:p-5 md:col-span-3">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  October 2026
                </p>
                <p className="text-base font-medium">Revenue overview</p>
              </div>
              <Badge variant="muted">Live</Badge>
            </div>

            <div className="mb-4 grid grid-cols-2 gap-2 lg:grid-cols-4">
              <Kpi label="MRR" value="$248,410" delta="+12.4%" good />
              <Kpi label="Net retention" value="118%" delta="+3.1%" good />
              <Kpi label="Failed payments" value="$6,240" delta="-18%" good />
              <Kpi label="Active meters" value="34" delta="+4" good />
            </div>

            <div className="grid gap-3 lg:grid-cols-3">
              <div className="rounded-lg bg-card p-3 shadow-border lg:col-span-2">
                <p className="mb-2 text-xs font-medium text-muted-foreground">
                  Recognized MRR
                </p>
                <MrrChart />
              </div>
              <div className="rounded-lg bg-card p-3 shadow-border">
                <p className="mb-2 text-xs font-medium text-muted-foreground">
                  Latest invoices
                </p>
                <ul className="flex flex-col gap-2">
                  {invoices.map((row) => (
                    <li
                      key={row.name}
                      className="flex items-center justify-between gap-2 text-sm"
                    >
                      <span className="truncate text-foreground">{row.name}</span>
                      <span className="flex items-center gap-2">
                        <span className="tabular-nums text-muted-foreground">
                          {row.amount}
                        </span>
                        <StatusBadge status={row.status} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Kpi({
  label,
  value,
  delta,
  good,
}: {
  label: string;
  value: string;
  delta: string;
  good: boolean;
}) {
  return (
    <div className="rounded-lg bg-card p-3 shadow-border">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="mt-1 text-lg font-medium tabular-nums tracking-tight">
        {value}
      </p>
      <p
        className={cn(
          "mt-0.5 text-xs tabular-nums",
          good ? "text-success" : "text-destructive",
        )}
      >
        {delta}
      </p>
    </div>
  );
}

function MrrChart() {
  return (
    <svg
      viewBox="0 0 400 120"
      className="h-28 w-full text-primary"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mrrFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.28" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 92 L36 84 L72 86 L108 74 L144 68 L180 70 L216 54 L252 50 L288 42 L324 32 L360 28 L400 22 L400 120 L0 120 Z"
        fill="url(#mrrFill)"
      />
      <path
        d="M0 92 L36 84 L72 86 L108 74 L144 68 L180 70 L216 54 L252 50 L288 42 L324 32 L360 28 L400 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
