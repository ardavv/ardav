import { Timeline } from "@/components/sections/Timeline";
import { SkillsList } from "@/components/features/SkillsList";
import Image from "next/image";

export const metadata = {
  title: "About - Arya",
  description: "More about my background and experience.",
};

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-20">
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 border-b border-border/40 pb-12">
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-border/50">
            <Image
                src="/images/avatar.png"
                alt="Profile"
                fill
                className="object-cover"
                priority
            />
          </div>
          <div className="text-center sm:text-left space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">Arya</h1>
             <p className="text-xl text-muted-foreground font-medium">Software Engineer</p>
          </div>
        </div>

        <div className="prose prose-zinc dark:prose-invert max-w-none pt-4">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I&apos;m a software engineer passionate about building digital products that solve real-world problems. 
            With a background in Computer Science and over 4 years of experience, I specialize in the React ecosystem 
            and modern web technologies.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            When I&apos;m not coding, I enjoy reading about system design, contributing to open source, 
            and exploring new coffee shops.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold tracking-tight mb-8">Experience</h2>
        <Timeline />
      </section>

      <section>
        <h2 className="text-2xl font-bold tracking-tight mb-8">Skills</h2>
        <SkillsList />
      </section>
    </div>
  );
}
