import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { WAITLIST_KEY } from "@/lib/landing-content";

const emailSchema = z.email();

type Status = "idle" | "error" | "success" | "duplicate";

type Entry = { email: string; company: string; ts: number };

function readList(): Entry[] {
  try {
    const raw = localStorage.getItem(WAITLIST_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Entry[]) : [];
  } catch {
    return [];
  }
}

export function Signup() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim().toLowerCase();
    const company = String(data.get("company") ?? "").trim();

    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
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

    list.push({ email, company, ts: Date.now() });
    localStorage.setItem(WAITLIST_KEY, JSON.stringify(list));
    setStatus("success");
    setMessage("You’re on the list. We’ll write when your workspace is ready.");
    form.reset();
  }

  const done = status === "success" || status === "duplicate";

  return (
    <section id="signup" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl bg-card p-6 shadow-border sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="label-kicker text-xs font-medium text-primary uppercase">
                Early access
              </p>
              <h2 className="headline-section mt-4 text-foreground">
                Get your books to match the bank.
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                Join the list. We open workspaces in the order we receive
                requests. 14-day trial on every plan after launch — no card
                required.
              </p>
            </div>

            {done ? (
              <div
                className="flex min-h-40 items-center gap-3 rounded-xl bg-secondary p-5"
                role="status"
                aria-live="polite"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                  <Check className="size-4" />
                </span>
                <p className="text-sm leading-relaxed text-foreground">{message}</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Work email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="maya@aster.io"
                      aria-invalid={status === "error"}
                      aria-describedby={status === "error" ? "email-error" : undefined}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      autoComplete="organization"
                      placeholder="Aster Labs"
                    />
                  </div>
                </div>
                {status === "error" ? (
                  <p id="email-error" className="text-sm text-destructive" role="alert">
                    {message}
                  </p>
                ) : null}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button type="submit" size="lg">
                    Request access
                    <ArrowRight />
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    We’ll only email about your workspace.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
