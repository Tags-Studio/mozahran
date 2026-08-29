import { createFileRoute, Link } from "@tanstack/react-router";
import { getPostBySlug } from "../lib/blogScheduler";
import { ArrowRight, Calendar, Clock, User, Share2 } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPostPage,
});

function parseMarkdownToHtml(markdown: string): string {
  // Replace links first
  let html = markdown
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-[#664936] hover:text-[#AB9678] font-bold hover:underline inline-flex items-center gap-1">$1</a>')
    // Convert headers
    .replace(/^# (.*?)$/gm, '<h1 class="text-3xl sm:text-4xl font-black mt-8 mb-4 text-[#2C241E]">$1</h1>')
    .replace(/^## (.*?)$/gm, '<h2 class="text-2xl sm:text-3xl font-black mt-10 mb-4 text-[#2C241E] border-b border-[#E8E2D8] pb-2">$1</h2>')
    .replace(/^### (.*?)$/gm, '<h3 class="text-xl sm:text-2xl font-bold mt-6 mb-3 text-[#2C241E]">$1</h3>')
    // Convert bold
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-[#2C241E]">$1</strong>')
    // Convert lists
    .replace(/^\s*-\s*(.*?)$/gm, '<li class="mr-4 list-disc text-sm sm:text-base leading-relaxed text-[#6B5E54]">$1</li>')
    .replace(/^\s*\*\s*(.*?)$/gm, '<li class="mr-4 list-disc text-sm sm:text-base leading-relaxed text-[#6B5E54]">$1</li>')
    // Convert blockquotes
    .replace(/^>\s*(.*?)$/gm, '<blockquote class="border-r-4 border-[#664936] bg-[#FAF8F5] p-4 my-4 italic text-[#6B5E54]">$1</blockquote>')
    // Convert alert CTAs (e.g. 💬 [text](url) -> which becomes 💬 <a href="url">text</a>)
    .replace(/💬\s*<a href="(.*?)"(.*?)>(.*?)<\/a>/g, '<div class="my-8 p-6 bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl flex items-center gap-3 shadow-sm hover:border-[#AB9678]/40 transition-colors"><span class="text-2xl shrink-0">💬</span><div><a href="$1" $2 class="text-[#664936] hover:text-[#AB9678] font-black text-base sm:text-lg hover:underline">$3</a></div></div>');

  // Paragraph wrapping
  html = html
    .split('\n\n')
    .map(para => {
      const trimmed = para.trim();
      if (!trimmed) return '';
      if (trimmed.startsWith('<h') || trimmed.startsWith('<li') || trimmed.startsWith('<block') || trimmed.startsWith('<div')) {
        return trimmed;
      }
      return `<p class="text-sm sm:text-base leading-loose text-[#6B5E54] mb-5">${trimmed}</p>`;
    })
    .join('\n');

  return html;
}

function BlogPostPage() {
  const { slug } = Route.useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] text-[#2C241E] flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-3xl font-black text-[#2C241E] mb-4">المقال غير موجود أو لم يُنشر بعد</h1>
        <p className="text-[#6B5E54] mb-8">عذراً، المقال الذي تبحث عنه غير متوفر حالياً أو لم يحن موعد نشره المجدول.</p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
        >
          <ArrowRight className="w-4 h-4 ml-1" />
          العودة للمدونة
        </Link>
      </div>
    );
  }

  const htmlContent = parseMarkdownToHtml(post.content);

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#2C241E] p-4 sm:p-6 lg:p-8 selection:bg-[#664936] selection:text-white">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#AB9678]/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Navigation */}
      <nav className="mx-auto flex max-w-[900px] flex-wrap items-center gap-2 sm:gap-3 mb-12">
        <Link
          to="/"
          className="rounded-full bg-pill px-5 py-2 text-sm font-bold text-foreground/80 hover:text-foreground"
        >
          الرئيسية
        </Link>
        <Link
          to="/blog"
          className="rounded-full bg-pill px-5 py-2 text-sm font-bold text-foreground/80 hover:text-foreground"
        >
          المدونة
        </Link>
        <span className="text-[#D8D2C9] text-sm">/</span>
        <span className="text-[#2C241E] bg-white px-3 py-1 rounded-full shadow-sm text-xs font-bold truncate max-w-[200px] sm:max-w-xs">
          {post.title}
        </span>
      </nav>

      {/* Blog Article Container */}
      <article className="mx-auto max-w-[900px] bg-white rounded-3xl border border-[#E8E2D8] shadow-sm p-6 sm:p-12 mb-16 relative overflow-hidden">
        {/* Post Metadata Header */}
        <header className="border-b border-[#E8E2D8]/60 pb-8 mb-8">
          <span className="inline-block px-3 py-1 bg-[#664936]/10 text-[#664936] border border-[#E8E2D8] text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#2C241E] leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-bold text-[#8C827A]">
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-[#664936]" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#664936]" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#664936]" />
              <span>{post.readTime} دقائق قراءة</span>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div 
          className="prose prose-stone max-w-none text-right"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        {/* Footer actions / share */}
        <footer className="border-t border-[#E8E2D8]/60 mt-12 pt-8 flex flex-wrap justify-between items-center gap-4">
          <div className="text-sm text-[#8C827A]">
            تاريخ النشر المجدول: <strong>{post.date}</strong>
          </div>
          <a
            href={`https://wa.me/201009215131?text=${encodeURIComponent(`أهلاً، لقد قرأت مقالك "${post.title}" وأود الاستفسار عن خدماتكم.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#664936] hover:bg-[#AB9678] px-6 py-3 text-xs sm:text-sm font-bold text-white transition-colors"
          >
            استشيرني بخصوص هذا المقال على واتساب
          </a>
        </footer>
      </article>

      {/* Back to Blog */}
      <div className="text-center mb-16">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-[#664936] hover:text-[#AB9678] font-bold"
        >
          <ArrowRight className="w-4 h-4 ml-1" />
          العودة إلى قائمة المقالات
        </Link>
      </div>
    </main>
  );
}
