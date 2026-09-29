import { Mascot } from "./Mascot";
import { Mail } from "lucide-react";
import type { SVGProps } from "react";

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}


export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
    >
      {/* Grid background overlay */}
      <div className="absolute inset-0 grid-bg grid-fade" aria-hidden="true" />

      {/* Thin accent divider line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-border"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 lg:px-12 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Content */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Metadata Label */}
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
              <p className="font-mono text-xs text-accent tracking-widest uppercase font-semibold">
                Computer Science Student & Developer
              </p>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.02] text-balance">
              <span className="block text-muted-foreground/80 font-mono text-2xl sm:text-3xl mb-1 tracking-normal font-normal">
                Hello, I&apos;m
              </span>
              <span className="block text-foreground">NOWFAL N</span>
              <span className="block text-accent">Cybersecurity, AI & Web Dev</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-[54ch]">
              Computer Science student interested in programming, cybersecurity,
              web development, AI, ethical hacking, and emerging technologies.
              Focused on building secure systems and innovative software solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center h-12 px-8 bg-accent text-background
                  font-mono font-bold text-xs tracking-wider uppercase
                  hover:bg-accent-dim transition-all
                  active:scale-[0.98]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center h-12 px-8
                  border border-border text-foreground
                  font-mono font-medium text-xs tracking-wider uppercase
                  hover:border-foreground transition-all
                  active:scale-[0.98]"
              >
                Get In Touch
              </a>
            </div>

            {/* Meta & Social Bar */}
            <div className="pt-6 border-t border-border/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/NowfaL1N"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 border border-border bg-surface text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                >
                  <GitHubIcon width={18} height={18} aria-hidden />
                </a>
                <a
                  href="https://www.linkedin.com/in/nowfal-n-codes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 border border-border bg-surface text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                >
                  <LinkedInIcon width={18} height={18} aria-hidden />
                </a>
                <a
                  href="mailto:nowfalnasar61@gmail.com"
                  aria-label="Send Email"
                  className="p-2 border border-border bg-surface text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                >
                  <Mail size={18} />
                </a>
              </div>

              <div className="font-mono text-xs text-muted-foreground">
                <span className="text-muted">Location:</span> Coimbatore, India
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Mascot Co-Pilot */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
            <Mascot />
          </div>
        </div>
      </div>
    </section>
  );
}
