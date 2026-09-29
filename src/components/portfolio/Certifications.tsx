export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credential?: string;
}

const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    date: "Feb 2026",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    credential: "Elite Certification",
    date: "May 2025",
  },
  {
    title: "Masterclass in Cyber Security",
    issuer: "NoviTech R&D Pvt. Ltd",
    date: "Apr 2025",
  },
  {
    title: "Data Structures and Algorithms using Java",
    issuer: "NPTEL",
    date: "Oct 2024",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono text-xs text-accent tracking-widest uppercase mb-2 block">
              Verified Credentials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              Certifications
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-[40ch]">
            Continuous learning across cybersecurity, algorithms, and cloud systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.title + cert.date}
              className="p-6 border border-border bg-surface hover:border-accent/40 hover:bg-surface-elevated/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-muted block mb-3">
                  {cert.date}
                </span>
                <h3 className="text-base font-bold tracking-tight text-foreground leading-snug mb-2">
                  {cert.title}
                </h3>
                <p className="text-xs text-muted-foreground font-mono">
                  {cert.issuer}
                </p>
              </div>

              {cert.credential ? (
                <div className="mt-6 pt-4 border-t border-border/60">
                  <span className="text-[11px] font-mono font-medium text-accent bg-accent/10 border border-accent/30 px-2 py-0.5 rounded">
                    {cert.credential}
                  </span>
                </div>
              ) : (
                <div className="mt-6 pt-4 border-t border-border/60">
                  <span className="text-[11px] font-mono text-muted">
                    Verified Course
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
