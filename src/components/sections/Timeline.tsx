"use client";

import { motion } from "framer-motion";

const experience = [
  {
    company: "Tech Corp",
    role: "Senior Frontend Engineer",
    date: "2022 - Present",
    description: "Leading the frontend team, refactoring legacy codebase to Next.js, and improving performance by 40%.",
  },
  {
    company: "Digital Agency",
    role: "Full Stack Developer",
    date: "2020 - 2022",
    description: "Built scalable web applications for various clients using React, Node.js, and PostgreSQL.",
  },
  {
    company: "Startup Inc",
    role: "Junior Developer",
    date: "2019 - 2020",
    description: "Collaborated on the development of the MVP and implemented key features for the launch.",
  },
];

export function Timeline() {
  return (
    <div className="border-l border-border/50 ml-3 space-y-12">
      {experience.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative pl-8"
        >
          {/* Dot */}
          <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="font-semibold text-lg">{item.role}</h3>
            <span className="text-sm text-muted-foreground tabular-nums">{item.date}</span>
          </div>
          <div className="text-sm font-medium text-foreground/80 mb-2">{item.company}</div>
          <p className="text-muted-foreground">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
