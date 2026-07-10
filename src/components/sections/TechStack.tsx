"use client";

import LogoLoop from "@/components/ui/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiCplusplus,
  SiGo,
  SiWordpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiSocketdotio,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithub,
  SiPandas,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiNumpy,
  SiJupyter,
} from "@icons-pack/react-simple-icons";
import { Coffee, BrainCircuit, LineChart, BarChart2 } from "lucide-react"; // Ikon alternatif

export function TechStack() {
  // Memetakan teks stack lama ke dalam objek berserta ikon
  // Catatan: SimpleIcons tidak memiliki logo Java akibat masalah trademark Oracle, jadi kita pakai lucide-react.
  const techItems = [
    { name: "Docker", icon: SiDocker },
    { name: "Kubernetes", icon: SiKubernetes },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Pandas", icon: SiPandas },
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "PyTorch", icon: SiPytorch },
    { name: "Scikit-Learn", icon: SiScikitlearn },
    { name: "NumPy", icon: SiNumpy },
    { name: "Jupyter", icon: SiJupyter },
    { name: "Keras", icon: BrainCircuit },
    { name: "Matplotlib", icon: LineChart },
    { name: "Seaborn", icon: BarChart2 },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Python", icon: SiPython },
    { name: "Java", icon: Coffee },
    { name: "C/C++", icon: SiCplusplus },
    { name: "Go", icon: SiGo },
    { name: "Wordpress", icon: SiWordpress },
    { name: "MySQL", icon: SiMysql },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Socket.io", icon: SiSocketdotio },
  ];

  // Memasukkan style badge aslimu menjadi node React untuk animasi
  const techLogos = techItems.map((tech) => ({
    node: (
      <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 text-secondary-foreground rounded-full border border-border/50 whitespace-nowrap">
        <tech.icon className="w-4 h-4" />
        <span className="text-sm font-medium">{tech.name}</span>
      </div>
    ),
    title: tech.name,
  }));

  return (
    <section className="py-10">
      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
        Tech Stack
      </h3>

      {/* Kontainer height wajib didefinisikan agar LogoLoop tidak memakan area tak terhingga */}
      <div className="relative h-[50px] w-full">
        <LogoLoop
          logos={techLogos}
          speed={50}
          direction="left"
          logoHeight={40}
          gap={16}
          pauseOnHover={true}
          hoverSpeed={10}
          fadeOut={true}
          fadeOutColor="#0a0a0a" // Kode warna ini ditarik dari variabel --background di globals.css agar gradien halusnya tidak bentrok
        />
      </div>
    </section>
  );
}
