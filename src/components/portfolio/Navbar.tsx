"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHasScrolled(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-1px 0px 0px 0px" }
    );

    const sentinel = document.getElementById("scroll-sentinel");
    if (sentinel) observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div id="scroll-sentinel" className="absolute top-0 h-px w-full" />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          hasScrolled
            ? "bg-background/85 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 lg:px-12"
          aria-label="Main navigation"
        >
          <a
            href="#"
            className="font-mono text-sm font-bold tracking-wider uppercase text-foreground hover:text-accent transition-colors flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            NOWFAL N
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-xs font-mono tracking-tight text-muted-foreground hover:text-foreground transition-colors uppercase"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden fixed inset-0 top-16 bg-background z-40 border-t border-border overflow-y-auto"
          >
            <ul className="flex flex-col items-start px-6 pt-8 pb-12 gap-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.href} className="w-full">
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="text-xl font-mono tracking-tight font-medium text-foreground hover:text-accent transition-colors block py-2 border-b border-border/40"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
