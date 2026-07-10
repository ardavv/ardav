import { getAllPosts, getPostBySlug as getLocalPostBySlug } from "./mdx";

export interface Project {
  title: string;
  summary: string;
  image?: string | null;
  date: string;
  slug: string;
  tech_stack?: string[] | null;
  link?: string | null;
  content?: string; // Tambahkan properti opsional ini
}

export interface Blog {
  title: string;
  summary: string;
  image?: string | null;
  date: string;
  slug: string;
  reading_time?: string | null;
  published: boolean;
  content?: string; // Tambahkan properti opsional ini
}

export interface Experience {
  role: string;
  company: string;
  date_range: string;
  description: string;
}

export async function getProjects(): Promise<Project[]> {
  try {
    const posts = getAllPosts("projects");
    return posts.map((p) => ({
      title: p.title,
      summary: p.summary,
      image: p.image || null,
      date: p.date,
      slug: p.slug,
      tech_stack: p.techStack || null,
      link: p.link || null,
    }));
  } catch (error) {
    console.error("Error loading local projects:", error);
    return [];
  }
}

// PERBAIKAN: Masukkan post.content ke dalam return object
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const post = getLocalPostBySlug(slug, "projects");
  if (!post) return null;

  return {
    title: post.metadata.title,
    summary: post.metadata.summary,
    image: post.metadata.image || null,
    date: post.metadata.date,
    slug: post.metadata.slug,
    tech_stack: post.metadata.techStack || null,
    link: post.metadata.link || null,
    content: post.content, // Jalur konten diperbaiki di sini
  };
}

export async function getBlogs(): Promise<Blog[]> {
  try {
    const posts = getAllPosts("blog");
    return posts.map((p) => ({
      title: p.title,
      summary: p.summary,
      image: p.image || null,
      date: p.date,
      slug: p.slug,
      reading_time: p.readingTime || null,
      published: true,
    }));
  } catch (error) {
    console.error("Error loading local blogs:", error);
    return [];
  }
}

// PERBAIKAN: Masukkan post.content ke dalam return object
export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const post = getLocalPostBySlug(slug, "blog");
  if (!post) return null;

  return {
    title: post.metadata.title,
    summary: post.metadata.summary,
    image: post.metadata.image || null,
    date: post.metadata.date,
    slug: post.metadata.slug,
    reading_time: post.metadata.readingTime || null,
    published: true,
    content: post.content, // Jalur konten diperbaiki di sini
  };
}

export async function getExperience(): Promise<Experience[]> {
  return [
    {
      role: "Co-founder & Lead Developer",
      company: "GokilTech",
      date_range: "August 2023 - Present",
      description:
        "Memimpin pengembangan perangkat lunak dan mengelola deployment produksi untuk berbagai proyek dan lomba.",
    },
    {
      role: "PSTE Directorate Intern",
      company: "Ministry of Communication and Digital (Komdigi)",
      date_range: "August 2025 - January 2026",
      description:
        "Merancang dan mengembangkan website Manajemen Tugas (Mantu) untuk memudahkan manajemen tugas tiap divisi di direktorat PSTE",
    },
    {
      role: "Quality Assurance Tester Intern",
      company: "PT Sinergi Informatika Semen Indonesia",
      date_range: "July 2024 - September 2024",
      description:
        "Melakukan pengujian Quality Assurance terstruktur untuk menjaga stabilitas aplikasi.",
    },
  ];
}
