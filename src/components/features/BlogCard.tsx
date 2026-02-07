"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Blog } from "@/lib/data";
import NextImage from "next/image";

export function BlogCard({ post }: { post: Blog }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.article
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="group flex flex-col gap-4 border-b border-border/40 py-8 transition-colors hover:bg-accent/5 px-4 rounded-lg -mx-4"
      >
        {post.image && (
           <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border/50">
             <NextImage
               src={post.image}
               alt={post.title}
               fill
               className="object-cover transition-transform duration-300 group-hover:scale-105"
             />
           </div>
        )}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-1">
          {post.date && (
            <time dateTime={post.date}>
              {format(parseISO(post.date), "MMMM d, yyyy")}
            </time>
          )}
          {post.reading_time && (
            <>
              <span>•</span>
              <span>{post.reading_time}</span>
            </>
          )}
        </div>
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="text-muted-foreground line-clamp-2">{post.summary}</p>
        </div>
      </motion.article>
    </Link>
  );
}
