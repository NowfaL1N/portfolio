export interface EducationItem {
  degree: string;
  field?: string;
  institution: string;
  location: string;
  period: string;
  statusOrScore: string;
  isCurrent?: boolean;
}

const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "M.Tech",
    field: "Computer Science and Engineering",
    institution: "Amrita Vishwa Vidyapeetham",
    location: "Ettimadai, Coimbatore",
    period: "2026 – 2028 (Expected)",
    statusOrScore: "Currently Pursuing",
    isCurrent: true,
  },
  {
    degree: "B.E.",
    field: "Computer Science and Engineering",
    institution: "JCT College of Engineering and Technology",
    location: "Coimbatore",
    period: "2022 – 2026",
    statusOrScore: "CGPA: 8.3 / 10",
  },
  {
    degree: "Higher Secondary (HSS)",
    institution: "Vijayamadha Convent HSS",
    location: "Chittur, Palakkad",
    period: "2020 – 2022",
    statusOrScore: "Score: 80.8%",
  },
  {
    degree: "Secondary School (SSLC)",
    institution: "Sree Narayana Public School",
    location: "Kollengode, Palakkad",
    period: "2019 – 2020",
    statusOrScore: "Score: 71.2%",
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono text-xs text-accent tracking-widest uppercase mb-2 block">
              Academic Background
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              Education
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-[40ch]">
            Computer science foundation & advanced engineering studies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {EDUCATION_DATA.map((item) => (
            <div
              key={item.degree + item.institution}
              className={`group relative p-8 border transition-colors ${
                item.isCurrent
                  ? "border-accent/40 bg-surface-elevated/40"
                  : "border-border bg-surface hover:border-border-subtle hover:bg-surface-elevated/20"
              }`}
            >
              {item.isCurrent && (
                <span className="absolute top-6 right-6 inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-medium text-accent bg-accent/10 border border-accent/30 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Pursuing
                </span>
              )}

              <div className="flex flex-col h-full justify-between gap-6">
                <div>
                  <span className="font-mono text-xs text-muted block mb-1">
                    {item.period}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
                    {item.degree}
                    {item.field ? ` — ${item.field}` : ""}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground mt-2">
                    {item.institution}
                  </p>
                  <p className="text-xs text-muted mt-0.5">{item.location}</p>
                </div>

                <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                  <span className="font-mono text-xs text-foreground bg-surface-elevated px-3 py-1 border border-border">
                    {item.statusOrScore}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
