import { getProjectBySlug, getProjects } from "@/lib/data";
import { MDXContent } from "@/components/mdx/MDXContent";
import NextImage from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Globe, Github, Database } from "lucide-react";
import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getProjects();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  // REVISI 1: Ubah tipe parameter menjadi Promise
  params: Promise<{ slug: string }>;
}) {
  // REVISI 2: Await params sebelum mengekstrak properti slug
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    // REVISI 3: Gunakan fungsi notFound() bawaan Next.js agar server memberikan status HTTP 404 yang benar
    notFound();
  }

  return (
    <PageContainer className="max-w-3xl mx-auto space-y-8">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
      >
        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Projects
      </Link>

      <div className="mx-auto max-w-2xl space-y-8 text-center mb-16">
        {project.image && (
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/50 shadow-lg mb-8">
            <NextImage
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          {project.title}
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          {project.summary}
        </p>

        {/* Boxed Tech Stack */}
        <div className="flex flex-wrap justify-center gap-2">
          {project.tech_stack?.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-secondary/50 border border-border/50 text-secondary-foreground rounded-md text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 pt-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium bg-foreground text-background px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity shadow-sm"
            >
              <Github className="h-4 w-4" /> Source Code
            </a>
          )}
          {project.dataset && (
            <a
              href={project.dataset}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium bg-secondary text-secondary-foreground border border-border/50 px-6 py-2.5 rounded-full hover:bg-secondary/80 transition-colors shadow-sm"
            >
              <Database className="h-4 w-4" /> View Dataset
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium bg-primary/10 text-primary border border-primary/20 px-6 py-2.5 rounded-full hover:bg-primary/20 transition-colors shadow-sm"
            >
              <Globe className="h-4 w-4" /> Live Demo
            </a>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-2xl">
        {project.content && <MDXContent source={project.content} />}
      </div>
    </PageContainer>
  );
}
