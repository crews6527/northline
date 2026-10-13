import { useState } from "react";
import { Button } from "@/components/ui/button";
import { WAITLIST_KEY } from "@/lib/landing-content";
export function Signup() {
  const [message, setMessage] = useState("");
  function clearDemoEntry() {
    try { localStorage.removeItem(WAITLIST_KEY); setMessage("Saved demo signup entries were removed from this browser."); }
    catch { setMessage("Browser storage is unavailable. Remove this site's saved data in your browser settings."); }
  }
  return <section id="signup" className="py-20 sm:py-28"><div className="mx-auto max-w-6xl px-4 sm:px-6"><div className="rounded-2xl bg-card p-6 shadow-border sm:p-10">
    <p className="label-kicker text-xs font-medium text-primary uppercase">Development status</p>
    <h2 className="headline-section mt-4 text-foreground">Ask about Northline</h2>
    <p className="mt-4 max-w-xl text-muted-foreground">Northline is a billing and collections concept under development. This preview does not create an account, start a trial, process payments, or add you to an email list.</p>
    <div className="mt-6 flex flex-wrap gap-3"><Button asChild><a href="mailto:digitalstore6527@gmail.com?subject=Northline%20inquiry">Email Prompt Copy Studio</a></Button><Button type="button" variant="outline" onClick={clearDemoEntry}>Remove saved demo signup data</Button></div>
    <p className="mt-4 text-sm" role="status" aria-live="polite">{message}</p>
  </div></div></section>;
}
