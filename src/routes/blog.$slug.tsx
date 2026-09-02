import { createFileRoute, Link, Navigate } from "@tanstack/react-router";
import { getPostBySlug } from "../lib/blogScheduler";
import { ArrowRight, Calendar, Clock, User, ArrowUpLeft, Sparkles } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPostPage,
});

function parseMarkdownToHtml(markdown: string): string {
  // Replace links first
  let html = markdown
    .replace(
      /\[(.*?)\]\((.*?)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary/80 font-bold hover:underline inline-flex items-center gap-1">$1</a>'
    )
    // Convert headers
    .replace(/^# (.*?)$/gm, '<h1 class="text-3xl sm:text-4xl font-black mt-10 mb-6 text-foreground tracking-tight">$1</h1>')
    .replace(/^## (.*?)$/gm, '<h2 class="text-2xl sm:text-3xl font-bold mt-12 mb-4 text-foreground border-b border-border/40 pb-3">$1</h2>')
    .replace(/^### (.*?)$/gm, '<h3 class="text-xl sm:text-2xl font-bold mt-8 mb-3 text-foreground">$1</h3>')
    // Convert bold
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-foreground">$1</strong>')
    // Convert lists
    .replace(/^\s*-\s*(.*?)$/gm, '<li class="mr-5 list-disc text-base leading-loose text-foreground/85 mb-2">$1</li>')
    .replace(/^\s*\*\s*(.*?)$/gm, '<li class="mr-5 list-disc text-base leading-loose text-foreground/85 mb-2">$1</li>')
    // Convert blockquotes
    .replace(/^>\s*(.*?)$/gm, '<blockquote class="border-r-4 border-primary bg-primary/5 p-5 my-6 rounded-l-2xl text-foreground/85 italic">$1</blockquote>')
    // Convert alert CTAs (e.g. 💬 [text](url) -> which becomes 💬 <a href="url">text</a>)
    .replace(
      /💬\s*<a href="(.*?)"(.*?)>(.*?)<\/a>/g,
      '<div class="my-8 p-6 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/25 rounded-2xl flex flex-wrap items-center justify-between gap-4 shadow-sm hover:border-primary/45 transition-colors"><div class="flex items-center gap-3"><span class="text-2xl shrink-0">💬</span><a href="$1" $2 class="text-primary hover:text-primary/80 font-bold text-base sm:text-lg hover:underline">$3</a></div><span class="text-xs font-semibold bg-primary text-primary-foreground px-4 py-1.5 rounded-full">استشارة فورية</span></div>'
    );

  // Paragraph wrapping
  html = html
    .split("\n\n")
    .map((para) => {
      const trimmed = para.trim();
      if (!trimmed) return "";
      if (
        trimmed.startsWith("<h") ||
        trimmed.startsWith("<li") ||
        trimmed.startsWith("<block") ||
        trimmed.startsWith("<div")
      ) {
        return trimmed;
      }
      return `<p class="text-base sm:text-lg leading-loose text-foreground/85 mb-6 text-right">${trimmed}</p>`;
    })
    .join("\n");

  return html;
}

function BlogPostPage() {
  const { slug } = Route.useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    // Graceful soft redirect to the main blog page to prevent 404 errors and protect SEO
    return <Navigate to="/blog" replace />;
  }

  const htmlContent = parseMarkdownToHtml(post.content);

  return (
    <main className="min-h-screen bg-background p-4 sm:p-6 lg:p-8 overflow-x-hidden max-w-full">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-[1000px] flex-wrap items-center gap-2 sm:gap-3 mb-10">
        <Link
          to="/"
          className="rounded-full bg-pill border border-border/40 px-5 py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
        >
          الرئيسية
        </Link>
        <Link
          to="/blog"
          className="rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium transition-colors"
        >
          المدونة
        </Link>
        <span className="text-muted-foreground text-sm">/</span>
        <span className="text-muted-foreground bg-pill border border-border/40 px-4 py-2 rounded-full text-xs font-medium truncate max-w-[200px] sm:max-w-xs">
          {post.title}
        </span>
      </nav>

      {/* Article Container */}
      <article className="mx-auto max-w-[1000px] bg-pill rounded-[2rem] border border-border/40 p-6 sm:p-12 md:p-16 shadow-[0_15px_30px_rgba(0,0,0,0.02)] mb-12">
        {/* Header */}
        <header className="border-b border-border/40 pb-8 mb-10 text-right">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 px-3.5 py-1 text-xs font-semibold mb-5">
            <Sparkles className="w-3 h-3" />
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground leading-[1.2] tracking-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-xs sm:text-sm font-medium text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-primary" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-primary" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-primary" />
              <span>{post.readTime} دقائق قراءة</span>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div
          className="prose max-w-none text-right"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        {/* Article Footer CTA */}
        <footer className="border-t border-border/40 mt-12 pt-8 flex flex-wrap justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            تاريخ النشر: <strong className="text-foreground">{post.date}</strong>
          </div>
          <a
            href={`https://wa.me/201009215131?text=${encodeURIComponent(
              `أهلاً محمد، قرأت مقالك "${post.title}" وأود استشارتك في مشروع مشابه.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            استشرني حول هذا المقال
            <span className="grid h-7 w-7 place-items-center rounded-full bg-primary-foreground/15">
              <ArrowUpLeft className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5" />
            </span>
          </a>
        </footer>
      </article>

      {/* Back link */}
      <div className="text-center mb-12">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowRight className="w-4 h-4 ml-1" />
          العودة إلى جميع مقالات المدونة
        </Link>
      </div>
    </main>
  );
}
