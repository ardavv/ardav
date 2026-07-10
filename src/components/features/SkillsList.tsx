"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "AI & Data Science",
    skills: [
      { name: "Python / C++", level: 90 },
      { name: "Machine Learning (TensorFlow/PyTorch)", level: 85 },
      { name: "Data Analysis (Pandas/NumPy)", level: 85 },
      { name: "Data Visualization (Matplotlib/Seaborn)", level: 90 },
      { name: "SQL / Databases", level: 95 },
      { name: "Deep Learning (Keras)", level: 75 },
    ],
  },
  {
    title: "Software Engineering",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "Node.js / Express", level: 90 },
      { name: "TypeScript / JavaScript", level: 85 },
      { name: "React Native / Mobile", level: 80 },
      { name: "Supabase / Firebase", level: 85 },
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
