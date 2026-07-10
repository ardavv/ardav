"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    let delayTimer: NodeJS.Timeout;

    // Membungkus logika ke dalam setTimeout 0ms melempar eksekusi ke antrean macro-task.
    // Ini menghindari bentrok dengan aturan linter React yang melarang update state sinkron di dalam useEffect.
    const initTimer = setTimeout(() => {
      const hasLoaded = sessionStorage.getItem("portfolio_loaded");

      if (hasLoaded) {
        if (isMounted) setIsLoading(false);
      } else {
        document.body.style.overflow = "hidden";
        delayTimer = setTimeout(() => {
          if (isMounted) setIsLoading(false);
          document.body.style.overflow = "unset";
          sessionStorage.setItem("portfolio_loaded", "true");
        }, 2000);
      }
    }, 0);

    return () => {
      isMounted = false;
      clearTimeout(initTimer);
      clearTimeout(delayTimer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
        >
          <div className="relative flex flex-col items-center gap-6">
            {/* Avatar */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-border/50"
            >
              <Image
                src="/images/avatar.png"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl font-bold tracking-tight text-foreground"
            >
              Arya's Portfolio
            </motion.h1>

            {/* Loading Bar */}
            <div className="h-1 w-48 overflow-hidden rounded-full bg-secondary">
              <motion.div
                className="h-full bg-foreground" // White bar on dark theme
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
