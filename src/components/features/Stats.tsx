"use client";

import { cn } from "@/lib/utils";

const defaultStats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Happy Clients", value: "5+" },
];

interface StatsProps {
  className?: string;
  items?: typeof defaultStats;
}

export function Stats({ className, items = defaultStats }: StatsProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-3 gap-8 border-t border-border/50 pt-8",
        className,
      )}
    >
      {items.map((stat) => (
        <div key={stat.label}>
          <div className="text-3xl font-bold text-foreground">{stat.value}</div>
          <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
