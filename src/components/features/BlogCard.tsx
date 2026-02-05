"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { PostMetadata } from "@/lib/mdx";

export function BlogCard({ post }: { post: PostMetadata }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.article
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="group flex flex-col gap-2 border-b border-border/40 py-8 transition-colors hover:bg-accent/5 px-4 rounded-lg -mx-4"
      >
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-1">
          <time dateTime={post.date}>
            {format(parseISO(post.date), "MMMM d, yyyy")}
          </time>
          {post.readingTime && (
            <>
              <span>•</span>
              <span>{post.readingTime}</span>
            </>
          )}
        </div>
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="text-muted-foreground line-clamp-2">{post.summary}</p>
      </motion.article>
    </Link>
  );
}
