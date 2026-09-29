export interface ExperienceItem {
  role: string;
  organization: string;
  type: string;
  period: string;
  highlights: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Cybersecurity Intern",
    organization: "Office of the Deputy Commissioner of Police, Coimbatore",
    type: "Offline Internship",
    period: "Mar 2026 – Apr 2026",
    highlights: [
      "Completed a hands-on cybersecurity internship in a law enforcement environment.",
      "Gained practical exposure to core cybersecurity concepts and information security practices.",
      "Studied cybercrime awareness, threat mitigation, and digital investigation concepts.",
    ],
  },
  {
    role: "Python Programming Intern",
    organization: "CodSoft",
    type: "Remote Internship",
    period: "Aug 2025 – Sep 2025",
    highlights: [
      "Completed a 4-week virtual internship focused on Python software development.",
      "Worked on real tasks and software projects, strengthening coding and problem-solving skills.",
      "Gained hands-on Python development experience in a structured professional environment.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono text-xs text-accent tracking-widest uppercase mb-2 block">
              Practical Training
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              Experience & Internships
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-[40ch]">
            Hands-on technical experience in cybersecurity and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EXPERIENCES.map((item) => (
            <div
              key={item.role + item.organization}
              className="p-8 border border-border bg-surface hover:border-accent/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="font-mono text-xs text-accent bg-accent/10 border border-accent/20 px-2.5 py-1">
                    {item.type}
                  </span>
                  <span className="font-mono text-xs text-muted">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-foreground mb-1">
                  {item.role}
                </h3>

                <p className="text-sm font-medium text-muted-foreground mb-6">
                  {item.organization}
                </p>

                <ul className="space-y-3">
                  {item.highlights.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-xs text-foreground/90 leading-relaxed">
                      <span className="text-accent font-mono">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
