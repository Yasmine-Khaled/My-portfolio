"use client";

import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-sm font-semibold uppercase tracking-[0.3em] text-muted">
          Yasmine Khaled
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-fg">
              {link.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}