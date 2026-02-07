import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { ContributionGraph } from "@/components/features/ContributionGraph";
import { TechStack } from "@/components/sections/TechStack";
import { ProjectCard } from "@/components/features/ProjectCard";
import { BlogCard } from "@/components/features/BlogCard";
import { getProjects, getBlogs } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default async function Home() {
  const allProjects = await getProjects();
  const allBlogs = await getBlogs();

  const projects = allProjects.slice(0, 2);
  const posts = allBlogs.slice(0, 3);

  return (
    <div className="space-y-24 pb-20">
      <Hero />
      <ContributionGraph />
      <TechStack />
      
      {/* Featured Projects */}
      <section className="border-t border-border/40 pt-16">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Featured Projects</h2>
          <Link href="/projects" className="group flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground">
            View All <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      
      {/* Latest Blog Posts */}
      <section className="border-t border-border/40 pt-16">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Latest Writing</h2>
          <Link href="/blog" className="group flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground">
            Read Blog <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="flex flex-col">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
