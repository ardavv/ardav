import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { MDXContent } from "@/components/mdx/MDXContent";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, Globe } from "lucide-react";
import Link from "next/link";
import { format, parseISO } from "date-fns";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateStaticParams() {
  const posts = getAllPosts("projects");
  return posts.map((post) => ({ slug: post.slug }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function ProjectLayout({ params }: { params: any }) {
  const { slug } = await params;
  const post = getPostBySlug(slug, "projects");

  if (!post) {
    notFound();
  }

  const { metadata, content } = post;

  return (
    <article className="pb-20">
      <Link href="/projects" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-10">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
      </Link>

      <div className="mx-auto max-w-2xl space-y-8 text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">{metadata.title}</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">{metadata.summary}</p>
        
        {/* Boxed Tech Stack */}
        <div className="flex flex-wrap justify-center gap-2">
          {metadata.techStack?.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-secondary/50 border border-border/50 text-secondary-foreground rounded-md text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-center gap-4 pt-4">
           {metadata.link && (
             <a 
               href={metadata.link} 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 text-sm font-medium bg-foreground text-background px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
             >
               <Globe className="h-4 w-4" /> Live Demo
             </a>
           )}
        </div>
      </div>

      <div className="mx-auto max-w-2xl">
         <MDXContent source={content} />
      </div>
    </article>
  );
}
