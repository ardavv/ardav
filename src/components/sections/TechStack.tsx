export function TechStack() {
  const stack = [
    "React", "Next.js", "TypeScript", "Node.js", "Python", "Java", "C/C++", "Go", "Wordpress", "MySQL", "PostgreSQL", "MongoDB", "Tailwind CSS", "Framer Motion", "Socket.io", "Docker", "Kubernetes", "Git", "GitHub"
  ];

  return (
    <section className="py-10">
      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Tech Stack</h3>
      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span 
            key={tech}
            className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-sm font-medium border border-border/50"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
