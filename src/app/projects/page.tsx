import { ProjectCard } from "@/components/features/ProjectCard";
import { getProjects } from "@/lib/data";

export const revalidate = 60;

export const metadata = {
  title: "Projects - Arya",
  description: "Showcase of my digital products and experiments.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="space-y-12 pb-20">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="text-muted-foreground text-lg max-w-xl">
          A collection of digital products, experiments, and open-source contributions I&apos;ve worked on.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
