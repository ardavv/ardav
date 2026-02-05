import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { MDXContent } from "@/components/mdx/MDXContent";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { format, parseISO } from "date-fns";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateStaticParams() {
  const posts = getAllPosts("blog");
  return posts.map((post) => ({ slug: post.slug }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function BlogLayout({ params }: { params: any }) {
  const { slug } = await params;
  const post = getPostBySlug(slug, "blog");

  if (!post) {
    notFound();
  }

  const { metadata, content } = post;

  return (
    <article className="pb-20">
      <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-10">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
      </Link>

      <div className="mx-auto max-w-2xl text-center mb-16">
        <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground mb-6">
           <time dateTime={metadata.date}>
             {format(parseISO(metadata.date), "MMMM d, yyyy")}
           </time>
           {metadata.readingTime && (
             <>
               <span>•</span>
               <span>{metadata.readingTime}</span>
             </>
           )}
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-foreground">{metadata.title}</h1>
      </div>

      <div className="mx-auto max-w-2xl">
        <MDXContent source={content} />
      </div>
    </article>
  );
}
