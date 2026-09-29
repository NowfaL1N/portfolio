export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Headline */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="font-mono text-xs text-accent tracking-widest uppercase block">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.1] text-balance">
              Building secure digital systems with a passion for
              <span className="text-accent"> cybersecurity</span> and
              <span className="text-accent"> innovative tech.</span>
            </h2>
          </div>

          {/* Right: Narrative based on resume */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <p className="text-muted-foreground leading-relaxed">
              I am an enthusiastic Computer Science student with a deep interest in
              programming, cybersecurity, AI, and web development. As a quick learner
              and dedicated problem solver, I enjoy exploring emerging technologies,
              ethical hacking principles, and secure software development.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing my M.Tech in Computer Science and Engineering at
              Amrita Vishwa Vidyapeetham after completing my B.E. at JCT College of
              Engineering and Technology. My goal is to build secure, efficient, and
              meaningful technology solutions that address real-world challenges.
            </p>

            {/* Resume Highlights Grid */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
              <div>
                <p className="font-mono text-xs text-muted mb-1 uppercase">Education</p>
                <p className="text-sm font-medium text-foreground">
                  M.Tech (Pursuing) & B.E. (CSE)
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-muted mb-1 uppercase">Core Focus</p>
                <p className="text-sm font-medium text-foreground">
                  Cybersecurity, Web & AI
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-muted mb-1 uppercase">Role</p>
                <p className="text-sm font-medium text-foreground">
                  CS Student & Developer
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-muted mb-1 uppercase">Strengths</p>
                <p className="text-sm font-medium text-foreground">
                  Problem Solving & Security
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
