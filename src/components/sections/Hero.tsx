"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/", icon: Twitter },
  { name: "Email", href: "mailto:hello@example.com", icon: Mail },
];

const stats = [
  { label: "Years Experience", value: "4+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Happy Clients", value: "10+" },
];

export function Hero() {
  return (
    <section className="py-20 flex flex-col justify-center min-h-[60vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-border/50">
          <Image
            src="/images/avatar.png"
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
             <span>Hey, my friends! 👋</span>
          </div>
          
          <div className="text-lg text-muted-foreground">
            <span className="font-semibold text-foreground">Arya</span> — Software Engineer
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            I craft digital products that people actually enjoy using.
          </h1>
        </div>
        
        <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
          Not just functional — delightful. I obsess over the details that make software feel right. Currently based in Indonesia, shipping pixels worldwide.
        </p>

        <div className="flex gap-4 pt-2">
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Let&apos;s talk
          </Link>
          <Link
            href="/projects"
            className="inline-flex h-10 items-center justify-center rounded-full border border-border bg-background px-6 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            View Projects
          </Link>
        </div>

        <div className="flex gap-5 pt-8 text-muted-foreground">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label={link.name}
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-8 pt-12 border-t border-border/50 mt-12">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
