import { BlogCard } from "@/components/features/BlogCard";
import { getAllPosts } from "@/lib/mdx";

export const metadata = {
  title: "Blog - Arya",
  description: "Thoughts on software development, design, and product.",
};

export default function BlogPage() {
  const posts = getAllPosts("blog");

  return (
    <div className="space-y-12 pb-20">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Writing</h1>
        <p className="text-muted-foreground text-lg max-w-xl">
          Thoughts on software development, design, and product building.
        </p>
      </div>

      <div className="flex flex-col">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
