"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend & Mobile",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "React Native", level: 80 },
      { name: "Android Java", level: 70 },
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "MySQL / SQL", level: 95 },
      { name: "Supabase / Firebase", level: 85 },
      { name: "Python / C++", level: 75 },
      { name: "Docker / Git", level: 85 },
    ],
  },
];

export function SkillsList() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {skillCategories.map((category, index) => (
        <div
          key={category.title}
          className="rounded-xl border border-border/50 bg-card p-6"
        >
          <h3 className="mb-6 text-xl font-semibold uppercase tracking-wider text-muted-foreground">
            {category.title}
          </h3>
          <div className="space-y-6">
            {category.skills.map((skill) => (
              <div key={skill.name}>
                <div className="mb-2 flex justify-between text-sm font-medium">
                  <span>{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
