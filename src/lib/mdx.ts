import fs from "fs";
import path from "path";
import matter from "gray-matter";

const rootDirectory = path.join(process.cwd(), "src", "content");

export type Post = {
  metadata: PostMetadata;
  content: string;
};

export type PostMetadata = {
  title: string;
  summary: string;
  image?: string;
  date: string;
  slug: string;
  readingTime?: string;
  techStack?: string[]; // For specific projects
  metrics?: string[]; // For impact metrics
  link?: string; // For GitHub source code
  dataset?: string; // For Kaggle/dataset links
  demo?: string; // For external live demo links
};

export function getPostBySlug(slug: string, type: "blog" | "projects"): Post | null {
  try {
    const filePath = path.join(rootDirectory, type, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);
    return { metadata: { ...data, slug } as PostMetadata, content };
  } catch (error) {
    return null;
  }
}

export function getAllPosts(type: "blog" | "projects"): PostMetadata[] {
  const dirPath = path.join(rootDirectory, type);
  if (!fs.existsSync(dirPath)) return [];

  const files = fs.readdirSync(dirPath);
  const posts = files
    .filter((file) => path.extname(file) === ".mdx")
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const { metadata } = getPostBySlug(slug, type) as Post;
      return metadata;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}
