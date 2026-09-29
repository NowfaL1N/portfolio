export interface ResumeProject {
  id: string;
  title: string;
  label: string;
  description: string;
  features: string[];
  purpose: string;
  tags?: string[];
  link?: string;
  github?: string;
}

const PROJECTS: ResumeProject[] = [
  {
    id: "01",
    title: "Trustchain Escrow",
    label: "B.E Final Year Project",
    description:
      "A B2B Trust Chain Escrow Platform designed to replace the conventional escrow middleman with a secure and transparent digital trust-based workflow.",
    features: [
      "Role-based authentication",
      "Real-time transaction tracking",
      "Automated document verification",
      "Milestone-based payment management",
    ],
    purpose:
      "Improves transaction security, increases transparency between business parties, and significantly reduces administrative escrow complexity.",
    github: "https://github.com/NowfaL1N",
  },
  {
    id: "02",
    title: "Expense & Budget Management System",
    label: "Finance Management Application",
    description:
      "A comprehensive financial management application providing budget tracking, automated reporting, and interactive data analytics.",
    features: [
      "Budgeting & expense categorization",
      "Real-time expense analytics",
      "Automated monthly reporting",
      "JWT authentication & interactive dashboards",
    ],
    purpose:
      "Streamlines financial tracking and budget planning with secure user authentication and dynamic visual reports.",
    github: "https://github.com/NowfaL1N",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono text-xs text-accent tracking-widest uppercase mb-2 block">
              Featured Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              Projects
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-[44ch]">
            Selected engineering projects demonstrating secure architecture and full-stack software development.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="group p-8 lg:p-12 border border-border bg-surface hover:border-accent/40 hover:bg-surface-elevated/30 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Number, Tag & Title */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xl font-bold text-accent">
                      {project.id}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground bg-surface-elevated px-3 py-1 border border-border">
                      {project.label}
                    </span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs text-accent hover:underline"
                    >
                      <span>Explore on GitHub</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>

                {/* Key Features & Purpose */}
                <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 lg:pt-0 lg:border-l lg:border-border/60 lg:pl-12">
                  <div>
                    <h4 className="font-mono text-xs text-muted uppercase tracking-wider mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2 text-xs text-foreground">
                          <span className="text-accent font-mono">▸</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs text-muted uppercase tracking-wider mb-3">
                      Purpose & Impact
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {project.purpose}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
