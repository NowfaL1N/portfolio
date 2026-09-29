interface Principle {
  title: string;
  description: string;
}

const PRINCIPLES: Principle[] = [
  {
    title: "Simplicity first",
    description:
      "The best code is the code you don't write. I choose straightforward solutions over clever ones and avoid unnecessary abstraction.",
  },
  {
    title: "Performance matters",
    description:
      "Fast software respects the user's time. I think about bundle size, render performance, and perceived speed from the start.",
  },
  {
    title: "Accessibility is not optional",
    description:
      "Good software works for everyone. Semantic HTML, keyboard navigation, screen reader support, and sufficient contrast are baseline requirements.",
  },
  {
    title: "Ship, then iterate",
    description:
      "Working software in front of users teaches more than perfect plans in a document. I build incrementally and refine based on real feedback.",
  },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-16">
          How I think about engineering
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {PRINCIPLES.map((principle) => (
            <div
              key={principle.title}
              className="bg-background p-8 lg:p-12 flex flex-col gap-4"
            >
              <h3 className="text-lg font-bold tracking-tight text-accent">
                {principle.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[45ch]">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
