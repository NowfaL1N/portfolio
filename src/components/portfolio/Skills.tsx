"use client";

import { useState } from "react";

interface SkillCategory {
  name: string;
  label: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Programming",
    label: "Programming Languages",
    skills: ["Python", "Java", "JavaScript"],
  },
  {
    name: "Web",
    label: "Web Development",
    skills: ["HTML5", "CSS3", "React.js", "Next.js", "Node.js"],
  },
  {
    name: "AI",
    label: "Artificial Intelligence",
    skills: ["AI Fundamentals", "Machine Learning Basics", "Prompt Engineering", "Azure AI", "OpenAI"],
  },
  {
    name: "Database",
    label: "Database",
    skills: ["MongoDB", "Supabase"],
  },
  {
    name: "Cloud",
    label: "Cloud & Deployment",
    skills: ["Vercel", "Azure"],
  },
  {
    name: "API",
    label: "API Development",
    skills: ["REST APIs", "API Integration"],
  },
  {
    name: "UI/UX",
    label: "UI / UX",
    skills: ["Tailwind CSS", "shadcn/ui", "Responsive Web Design"],
  },
  {
    name: "Tools",
    label: "Tools & IDEs",
    skills: ["Visual Studio Code", "Cursor AI", "GitHub Copilot", "Claude", "Antigravity", "Codex"],
  },
  {
    name: "Version Control",
    label: "Version Control",
    skills: ["Git", "GitHub"],
  },
];

const SOFT_SKILLS = [
  "Problem Solving",
  "Team Collaboration",
  "Communication",
  "Time Management",
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-24 lg:py-32 bg-surface border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono text-xs text-accent tracking-widest uppercase mb-2 block">
              Technical Stack
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              Skills
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-[40ch]">
            Technologies and tools I use across software development, cybersecurity, and AI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Category selector */}
          <div className="lg:col-span-3">
            <div className="flex flex-row lg:flex-col gap-1 flex-wrap lg:flex-nowrap">
              {SKILL_CATEGORIES.map((category, index) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(index)}
                  className={`text-left px-4 py-3 font-mono text-xs transition-all uppercase tracking-wider
                    border-b-2 lg:border-b-0 lg:border-l-2
                    ${
                      activeCategory === index
                        ? "text-accent border-accent bg-[rgb(180_244_97/0.05)] font-bold"
                        : "text-muted-foreground border-transparent hover:text-foreground hover:border-border"
                    }
                  `}
                  aria-pressed={activeCategory === index}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Skills display */}
          <div className="lg:col-span-9">
            <div className="mb-4">
              <span className="font-mono text-xs text-muted uppercase tracking-widest">
                {SKILL_CATEGORIES[activeCategory].label}
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {SKILL_CATEGORIES[activeCategory].skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 border border-border bg-background text-sm font-mono
                    text-foreground hover:border-accent hover:text-accent transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Soft Skills subsection at bottom */}
            <div className="mt-16 pt-10 border-t border-border">
              <span className="font-mono text-xs text-muted uppercase tracking-widest block mb-6">
                Soft Skills
              </span>
              <div className="flex flex-wrap gap-3">
                {SOFT_SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 border border-border/60 bg-transparent text-sm font-mono
                      text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
