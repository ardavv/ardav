import { getProjectBySlug, getProjects } from "@/lib/data";
import { MDXContent } from "@/components/mdx/MDXContent";
import NextImage from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Globe } from "lucide-react";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateStaticParams() {
  const posts = await getProjects();
  return posts.map((post) => ({ slug: post.slug }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function ProjectLayout({ params }: { params: any }) {
  const { slug } = await params;
  const post = await getProjectBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pb-20">
      <Link href="/projects" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-10">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
      </Link>

      <div className="mx-auto max-w-2xl space-y-8 text-center mb-16">
        {post.image && (
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/50 shadow-lg mb-8">
            <NextImage
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">{post.title}</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">{post.summary}</p>
        
        {/* Boxed Tech Stack */}
        <div className="flex flex-wrap justify-center gap-2">
          {post.tech_stack?.map((tech: string) => (
            <span key={tech} className="px-3 py-1 bg-secondary/50 border border-border/50 text-secondary-foreground rounded-md text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-center gap-4 pt-4">
           {post.link && (
             <a 
               href={post.link} 
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
         {post.content && <MDXContent source={post.content} />}
      </div>
    </article>
  );
}
