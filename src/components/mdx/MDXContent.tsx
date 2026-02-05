import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Custom Image Component with Capacitor
function CustomImage({ src, alt, title }: any) {
  return (
    <figure className="my-8">
      <div className="relative overflow-hidden rounded-xl border border-border/50 bg-muted/20">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={630}
          className="w-full object-cover"
        />
      </div>
      {title && (
        <figcaption className="mt-3 text-center text-sm italic text-muted-foreground font-medium">
          {title}
        </figcaption>
      )}
    </figure>
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
        <span className="ml-2 text-xs text-muted-foreground font-mono opacity-50">terminal</span>
      </div>
      {/* Code Content */}
      <div className="p-4 overflow-x-auto">
        <pre {...props} className="bg-transparent p-0 m-0 !bg-transparent font-mono text-sm leading-relaxed">
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
};

export function MDXContent({ source }: { source: string }) {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none 
      prose-headings:font-bold prose-headings:tracking-tight 
      prose-p:text-lg prose-p:leading-relaxed prose-p:text-foreground/90
      
      /* Remove default pre styling since we handle it custom */
      prose-pre:bg-transparent prose-pre:p-0 prose-pre:m-0 prose-pre:border-none prose-pre:shadow-none
      prose-img:m-0
    ">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
