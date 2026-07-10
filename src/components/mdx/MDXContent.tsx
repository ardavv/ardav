import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Custom Image Component with Capacitor
function CustomImage({ src, alt, title }: any) {
  return (
    // REVISI 1: Ubah <figure> menjadi <span>, tambahkan utility 'block'
    <span className="my-8 block">
      {/* REVISI 2: Ubah div menjadi span, tambahkan utility 'block' */}
      <span className="relative block overflow-hidden rounded-xl border border-border/50 bg-muted/20">
        <Image
          src={src}
          alt={alt || "Project Image"}
          // Pastikan prop layout/fill di sini sesuai dengan kebutuhanmu sebelumnya
          fill
          className="object-cover"
        />
      </span>

      {/* Jika kamu punya caption/title, gunakan span juga alih-alih figcaption */}
      {title && (
        <span className="mt-2 block text-center text-sm text-muted-foreground">
          {title}
        </span>
      )}
    </span>
  );
}
// Custom Pre/Code Block Component
function CustomPre({ children, ...props }: any) {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-border/50 bg-[#0d0d0d] shadow-2xl">
      {/* Window Header */}
      <div className="flex items-center gap-2 border-b border-white/5 bg-white/5 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-2 text-xs text-muted-foreground font-mono opacity-50">
          terminal
        </span>
      </div>
      {/* Code Content */}
      <div className="p-4 overflow-x-auto">
        <pre
          {...props}
          className="bg-transparent p-0 m-0 !bg-transparent font-mono text-sm leading-relaxed"
        >
          {children}
        </pre>
      </div>
    </div>
  );
}

// Custom Link
function CustomLink(props: any) {
  const isExternal = props.href?.startsWith("http");
  return (
    <a
      {...props}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="font-medium text-primary hover:text-primary/80 hover:underline underline-offset-4 transition-colors"
    />
  );
}

const components = {
  img: CustomImage,
  pre: CustomPre,
  a: CustomLink,
  h1: ({ children }: any) => (
    <h1 className="text-3xl font-bold tracking-tight mt-8 mb-4 text-foreground">
      {children}
    </h1>
  ),
  h2: ({ children }: any) => (
    <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-4 text-foreground">
      {children}
    </h2>
  ),
  h3: ({ children }: any) => (
    <h3 className="text-xl font-semibold tracking-tight mt-6 mb-3 text-foreground">
      {children}
    </h3>
  ),
  p: ({ children }: any) => (
    <p className="leading-7 [&:not(:first-child)]:mt-4 text-muted-foreground">
      {children}
    </p>
  ),
  ul: ({ children }: any) => (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-muted-foreground">
      {children}
    </ul>
  ),
  ol: ({ children }: any) => (
    <ol className="my-6 ml-6 list-decimal [&>li]:mt-2 text-muted-foreground">
      {children}
    </ol>
  ),
  li: ({ children }: any) => <li className="leading-7">{children}</li>,
  strong: ({ children }: any) => (
    <strong className="font-bold text-foreground">{children}</strong>
  ),
  blockquote: ({ children }: any) => (
    <blockquote className="mt-6 border-l-2 border-primary pl-6 italic text-muted-foreground">
      {children}
    </blockquote>
  ),
};

export function MDXContent({ source }: { source: string }) {
  return (
    <div className="max-w-none">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
