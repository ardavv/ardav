import { Timeline } from "@/components/sections/Timeline";
import { SkillsList } from "@/components/features/SkillsList";
import { Stats } from "@/components/features/Stats";
import Image from "next/image";

import { getExperience } from "@/lib/data";
import { PageContainer } from "@/components/layout/PageContainer";
import Link from "next/link";
import SideRays from "@/components/ui/SideRays";

export const revalidate = 60;

export const metadata = {
  title: "About - Arya",
  description: "More about my background and experience.",
};

export default async function AboutPage() {
  const experience = await getExperience();

  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-150 -z-10 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 40%, transparent 100%)",
        }}
      >
        <SideRays
          speed={2.5}
          rayColor1="#EAB308"
          rayColor2="#96c8ff"
          intensity={2}
          spread={2}
          origin="top-right"
          tilt={0}
          saturation={1.5}
          blend={0.75}
          falloff={1.6}
          opacity={1}
        />
      </div>
      <PageContainer className="space-y-16 relative z-10">
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
              <h1 className="text-4xl font-bold tracking-tight">
                Arya Davi S.
              </h1>
              <p className="text-xl text-muted-foreground font-medium">
                Software Engineer
              </p>
            </div>
          </div>

          <div className="prose prose-zinc dark:prose-invert max-w-none pt-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a software engineer passionate about building digital
              products that solve real-world problems. With a background in
              Computer Science and over 2 years of experience, I specialize in
              the React ecosystem and modern web technologies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I&apos;m not coding, I enjoy watching{" "}
              <Link
                href="https://youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi&si=A74RPgaUV89pG-V_"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-foreground transition-colors font-medium"
              >
                3Blue1Brown&apos;s
              </Link>{" "}
              neural network series before bed and playing pool as a hobby.
            </p>
          </div>

          <Stats />
        </section>

        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-8">Experience</h2>
          <Timeline items={experience} />
        </section>

        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-8">Skills</h2>
          <SkillsList />
        </section>
      </PageContainer>
    </>
  );
}
