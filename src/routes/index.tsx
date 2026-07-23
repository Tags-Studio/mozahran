import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Youtube, Twitter } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tag Studio — Brand Identity & Design for Companies" },
      {
        name: "description",
        content:
          "Tag Studio designs cohesive visual identities for companies in Saudi Arabia and Egypt — from logo to brand guidelines, print, and visual content since 2012.",
      },
      { property: "og:title", content: "Tag Studio — Brand Identity & Design" },
      {
        property: "og:description",
        content:
          "Strategy, design, and organized delivery. Building consistent, scalable brand systems since 2012.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Tag Studio — Brand Identity & Design" },
      {
        name: "twitter:description",
        content:
          "Strategy, design, and organized delivery for companies in Saudi Arabia and Egypt.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const NAV = ["Home", "About", "Work", "Blog", "Contact"];

function Index() {
  return (
    <main className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      {/* Navigation pills */}
      <nav className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-2 sm:gap-3">
        {NAV.map((item, i) => (
          <a
            key={item}
            href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
            className={
              "flex-1 min-w-[110px] rounded-full py-4 text-center text-sm font-medium tracking-wide transition-colors " +
              (i === 0
                ? "bg-primary text-primary-foreground"
                : "bg-pill text-foreground/80 hover:text-foreground")
            }
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Hero card */}
      <section className="relative mx-auto mt-4 max-w-[1400px] overflow-hidden rounded-[2rem] bg-surface text-surface-foreground sm:mt-6">
        {/* Radial glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 60% at 30% 40%, oklch(0.35 0.22 265 / 0.55), transparent 60%)",
          }}
        />

        {/* Portrait image */}
        <img
          src={heroImg}
          alt="Tag Studio brand identity composition"
          width={1408}
          height={1408}
          className="pointer-events-none absolute inset-y-0 left-1/2 h-full w-auto -translate-x-1/2 object-cover opacity-90 mix-blend-luminosity md:mix-blend-normal"
        />

        <div className="relative grid min-h-[80vh] grid-cols-1 gap-6 p-6 sm:p-10 md:min-h-[85vh] md:grid-cols-12 md:p-14">
          {/* Big name spanning full width */}
          <h1 className="col-span-12 pointer-events-none text-center font-black leading-[0.85] tracking-tight text-surface-foreground"
              style={{ fontSize: "clamp(3.5rem, 14vw, 15rem)" }}>
            Tag Studio
          </h1>

          {/* Left column: tagline + socials */}
          <div className="col-span-12 mt-auto flex flex-col justify-end gap-6 md:col-span-5">
            <p className="max-w-sm text-base leading-relaxed text-surface-foreground/85 sm:text-lg">
              We design cohesive visual identities that make your business
              clearer and more confident — from logo to brand guidelines,
              print, and visual content.
            </p>
            <div className="flex gap-3">
              {[Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right column: sub-copy + CTA */}
          <div className="col-span-12 flex flex-col items-start gap-5 md:col-span-5 md:col-start-8 md:items-end md:text-right">
            <p className="max-w-sm text-base leading-relaxed text-surface-foreground/85 sm:text-lg">
              Merging brand strategy with disciplined craft to build systems
              that don't just look great — they scale effortlessly across
              every touchpoint.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-primary py-3 pl-6 pr-3 text-base font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Let's Talk
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/15">
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="mx-auto mt-6 grid max-w-[1400px] grid-cols-1 gap-3 sm:grid-cols-3">
        {[
          { k: "Since 2012", v: "Building brand identities" },
          { k: "KSA & Egypt", v: "Project delivery across the region" },
          { k: "Print-ready", v: "Organized files, ready to apply" },
        ].map((s) => (
          <div key={s.k} className="rounded-3xl bg-pill p-6">
            <div className="text-lg font-semibold text-foreground">{s.k}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
          </div>
        ))}
      </section>
    </main>
  );
}
