"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { SiGithub, SiThreads } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const GITHUB_USERNAME = "ardavv";
const LINKEDIN_URL = "https://www.linkedin.com/in/ardav26/";
const THREADS_URL = "https://www.threads.com/@ar_yaaa.__"; // Assuming Twitter/X handle
const EMAIL_ADDRESS = "aryadavi276@gmail.com";

const socialLinks = [
  {
    name: "GitHub",
    href: `https://github.com/${GITHUB_USERNAME}`,
    icon: SiGithub,
  },
  { name: "LinkedIn", href: LINKEDIN_URL, icon: Linkedin },
  { name: "Threads", href: THREADS_URL, icon: SiThreads },
  { name: "Email", href: `mailto:${EMAIL_ADDRESS}`, icon: Mail },
];

import { Stats } from "@/components/features/Stats";

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
            <span>Hi, I'm Arya! 👋</span>
          </div>

          <div className="text-lg text-muted-foreground">
            <span className="font-semibold text-foreground">Arya Davi S.</span>{" "}
            — Software Engineer
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            I build functional and delightful software.
          </h1>
        </div>

        <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
          I obsess over the details that make software feel right.
        </p>

        <div className="flex gap-4 pt-2">
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Let&apos;s talk
          </Link>
          <Link
            href="https://aryadavi-portfolio.my.canva.site"
            target="_blank"
            className="inline-flex h-10 items-center justify-center rounded-full border border-border bg-background px-6 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            View Portfolio Details
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

        <Stats className="mt-12" />
      </motion.div>
    </section>
  );
}
