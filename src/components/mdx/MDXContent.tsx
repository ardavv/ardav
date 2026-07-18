import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import remarkGfm from 'remark-gfm';

// Custom Image Component
function CustomImage({ src, alt, title, ...props }: any) {
  return (
    <span className="my-6 flex flex-col items-center w-full">
      <Zoom>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt || "Project Image"}
          className="w-full h-auto max-h-[80vh] object-contain rounded-xl border border-border/50 bg-muted/20 mx-auto"
          loading="lazy"
          {...props}
        />
      </Zoom>

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
  Image: CustomImage,
  Grid: ({ children, className }: any) => (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full", className)}>
      {children}
    </div>
  ),
  ModelDemo: ({ url, height = "600px" }: { url: string; height?: string }) => (
    <div className="my-8 flex flex-col gap-3 rounded-xl border border-border/50 bg-card p-2 md:p-4 shadow-sm">
      <div className="flex items-center gap-2 px-2 pb-2">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
          <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
        </div>
        <span className="text-xs font-medium text-muted-foreground ml-2 flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Live Interactive Demo
        </span>
      </div>
      <div className="relative w-full overflow-hidden rounded-lg bg-background border border-border/30">
        <iframe
          src={url}
          style={{ height, width: "100%", border: "none" }}
          title="AI Model Demo"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"
        />
      </div>
    </div>
  ),
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
    <div className="leading-7 [&:not(:first-child)]:mt-4 text-muted-foreground">
      {children}
    </div>
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
  table: ({ children }: any) => (
    <div className="my-6 w-full overflow-x-auto rounded-lg border border-border/50">
      <table className="w-full text-sm text-left">{children}</table>
    </div>
  ),
  thead: ({ children }: any) => (
    <thead className="bg-muted/50 text-foreground font-semibold">
      {children}
    </thead>
  ),
  tbody: ({ children }: any) => (
    <tbody className="divide-y divide-border/50">
      {children}
    </tbody>
  ),
  tr: ({ children }: any) => (
    <tr className="hover:bg-muted/20 transition-colors">
      {children}
    </tr>
  ),
  th: ({ children }: any) => (
    <th className="px-4 py-3 border-b border-border/50 whitespace-nowrap">
      {children}
    </th>
  ),
  td: ({ children }: any) => (
    <td className="px-4 py-3 text-muted-foreground">
      {children}
    </td>
  ),
};

export function MDXContent({ source }: { source: string }) {
  return (
    <div className="max-w-none">
      <MDXRemote 
        source={source} 
        components={components} 
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          }
        }}
      />
    </div>
  );
}
