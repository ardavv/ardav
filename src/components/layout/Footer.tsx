"use client";

import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import { SiGithub, SiThreads } from "@icons-pack/react-simple-icons";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

const GITHUB_USERNAME = "ardavv";
const LINKEDIN_URL = "https://www.linkedin.com/in/ardav26/";
const THREADS_URL = "https://www.threads.com/@ar_yaaa.__"; // Assuming Twitter/X handle
const EMAIL_ADDRESS = "aryadavi276@gmail.com";

const social = [
  {
    name: "GitHub",
    href: `https://github.com/${GITHUB_USERNAME}`,
    icon: SiGithub,
  },
  { name: "LinkedIn", href: LINKEDIN_URL, icon: Linkedin },
  { name: "Threads", href: THREADS_URL, icon: SiThreads },
  { name: "Email", href: `mailto:${EMAIL_ADDRESS}`, icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background pt-16 pb-8">
      <div className="mx-auto max-w-3xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 mb-20">
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Navigate
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              {social.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border/40 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            DM for{" "}
            <span className="text-foreground font-medium">Partnership</span>
          </div>
          <p>© {new Date().getFullYear()} Arya</p>
        </div>
      </div>
    </footer>
  );
}
