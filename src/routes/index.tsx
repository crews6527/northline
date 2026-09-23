import { createFileRoute } from "@tanstack/react-router";
import { Features } from "@/components/landing/features";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { LogoBar } from "@/components/landing/logos";
import { Nav } from "@/components/landing/nav";
import { Pricing } from "@/components/landing/pricing";
import { Signup } from "@/components/landing/signup";
import { Testimonials } from "@/components/landing/testimonials";
import { Value } from "@/components/landing/value";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <LogoBar />
        <Value />
        <Features />
        <Pricing />
        <Testimonials />
        <Signup />
      </main>
      <Footer />
    </div>
  );
}
