import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Arya - Personal Portfolio",
  description:
    "Personal portfolio and blog showcasing digital products and thoughts.",
};

import { Preloader } from "@/components/layout/Preloader";

// ... imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          fontSans.variable,
        )}
      >
        <Preloader />
        <Navbar />
        <main className="mx-auto max-w-5xl px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
