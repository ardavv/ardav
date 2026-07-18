"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

import Image from "next/image";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative flex flex-col justify-between rounded-xl border border-border/50 bg-card overflow-hidden transition-colors hover:bg-accent/5"
    >
      {project.image && (
        <div className="relative aspect-video w-full overflow-hidden border-b border-border/50">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
              <ArrowUpRight className="h-5 w-5" />
            </a>
          )}
        </div>
        <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">{project.summary}</p>

        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-col gap-1.5 mb-6">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs font-medium text-foreground bg-primary/10 border border-primary/20 px-2.5 py-1.5 rounded-md">
                <span className="leading-tight">{metric}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech_stack?.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      <Link href={`/projects/${project.slug}`} className="absolute inset-0" aria-label={`View project ${project.title}`} />
      {/* Interactive elements above like the external link should have higher z-index if needed, but here the whole card is clickable via Link overlay. 
          The external link icon needs z-10 relative.
       */}
    </motion.div>
  );
}
