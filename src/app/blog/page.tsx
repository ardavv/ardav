import { BlogCard } from "@/components/features/BlogCard";
import { getBlogs } from "@/lib/data";

export const revalidate = 60;

export const metadata = {
  title: "Blog - Arya",
  description: "Thoughts on software development, design, and product.",
};

export default async function BlogPage() {
  const posts = await getBlogs();

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
