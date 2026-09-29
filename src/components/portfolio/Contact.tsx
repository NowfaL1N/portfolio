import type { SVGProps } from "react";
import { Mail } from "lucide-react";

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

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-surface border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: CTA */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="font-mono text-xs text-accent tracking-widest uppercase block">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.1]">
              Let&apos;s build something
              <span className="text-accent"> useful.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-[50ch]">
              I&apos;m open to opportunities, collaborations, and interesting
              conversations about technology, cybersecurity, and software development.
              Reach out and I&apos;ll get back to you.
            </p>

            <a
              href="mailto:nowfalnasar61@gmail.com"
              className="inline-flex items-center justify-center w-fit h-12 px-8 bg-accent text-background
                font-mono font-bold text-xs tracking-wider uppercase
                hover:bg-accent-dim transition-all active:scale-[0.98] mt-2"
            >
              Send a Message
            </a>
          </div>

          {/* Right: Contact links */}
          <div className="lg:col-span-6">
            <div className="flex flex-col gap-0">
              {[
                {
                  label: "Email",
                  href: "mailto:nowfalnasar61@gmail.com",
                  display: "nowfalnasar61@gmail.com",
                  icon: <Mail size={18} aria-hidden />,
                },
                {
                  label: "GitHub",
                  href: "https://github.com/NowfaL1N",
                  display: "github.com/NowfaL1N",
                  icon: <GitHubIcon width={18} height={18} aria-hidden />,
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/nowfal-n-codes/",
                  display: "linkedin.com/in/nowfal-n-codes",
                  icon: <LinkedInIcon width={18} height={18} aria-hidden />,
                },
                {
                  label: "Phone",
                  href: "tel:+918547328377",
                  display: "+91 8547328377",
                  icon: (
                    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.5 10.5a19.79 19.79 0 01-3-8.57A2 2 0 012.48 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  ),
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-4 py-5 border-t border-border
                    last:border-b hover:pl-3 transition-all duration-200"
                  target={link.href.startsWith("mailto") || link.href.startsWith("tel") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto") || link.href.startsWith("tel")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={`${link.label}: ${link.display}`}
                >
                  <span className="text-muted group-hover:text-accent transition-colors shrink-0">
                    {link.icon}
                  </span>
                  <span className="font-mono text-xs text-muted w-20 shrink-0 uppercase tracking-wider">
                    {link.label}
                  </span>
                  <span className="text-sm font-mono text-foreground group-hover:text-accent transition-colors">
                    {link.display}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
