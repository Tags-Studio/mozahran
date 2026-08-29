import { createFileRoute, Link } from "@tanstack/react-router";
import { getPublishedPosts } from "../lib/blogScheduler";
import { ArrowUpLeft, BookOpen, Calendar, Clock } from "lucide-react";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
});

function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#2C241E] p-4 sm:p-6 lg:p-8 selection:bg-[#664936] selection:text-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#AB9678]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#664936]/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Nav */}
      <nav className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-2 sm:gap-3 mb-16">
        <Link
          to="/"
          className="flex-1 min-w-[110px] rounded-full py-4 text-center text-sm font-medium tracking-wide transition-colors bg-pill text-foreground/80 hover:text-foreground"
        >
          الرئيسية
        </Link>
        <Link
          to="/blog"
          className="flex-1 min-w-[110px] rounded-full py-4 text-center text-sm font-medium tracking-wide transition-colors bg-primary text-primary-foreground"
        >
          المدونة
        </Link>
        <a
          href="/#about"
          className="flex-1 min-w-[110px] rounded-full py-4 text-center text-sm font-medium tracking-wide transition-colors bg-pill text-foreground/80 hover:text-foreground"
        >
          من أنا
        </a>
        <a
          href="/#portfolio-grid"
          className="flex-1 min-w-[110px] rounded-full py-4 text-center text-sm font-medium tracking-wide transition-colors bg-pill text-foreground/80 hover:text-foreground"
        >
          معرض الأعمال
        </a>
        <a
          href="/#services"
          className="flex-1 min-w-[110px] rounded-full py-4 text-center text-sm font-medium tracking-wide transition-colors bg-pill text-foreground/80 hover:text-foreground"
        >
          الخدمات
        </a>
        <a
          href="/#contact"
          className="flex-1 min-w-[110px] rounded-full py-4 text-center text-sm font-medium tracking-wide transition-colors bg-pill text-foreground/80 hover:text-foreground"
        >
          تواصل
        </a>
      </nav>

      {/* Header */}
      <section className="relative mx-auto max-w-[1200px] text-center py-12 px-4 sm:px-6">
        <span className="rounded-full bg-[#664936]/10 px-4 py-1.5 text-xs font-bold text-[#664936] sm:text-sm border border-[#664936]/15">
          مدونة التوجيه الفني والتصميم
        </span>
        <h1 className="mt-6 text-4xl sm:text-6xl font-black leading-tight text-[#2C241E]">
          مقالات في الهوية البصرية، <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#664936] via-[#AB9678] to-[#664936]">
            والتصميم والتسويق الرقمي
          </span>
        </h1>
        <p className="mt-6 mx-auto max-w-xl text-lg leading-relaxed text-[#6B5E54]">
          أفكار، إرشادات وتوصيات عملية من واقع خبرتنا لمساعدتك على بناء حضور بصري قوي وناجح لمشروعك.
        </p>
      </section>

      {/* Blog Cards Grid */}
      <section className="relative mx-auto max-w-[1200px] px-4 py-8 sm:px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group relative bg-white rounded-3xl p-8 sm:p-10 border border-[#E8E2D8] shadow-sm hover:shadow-[0_20px_50px_rgba(102,73,54,0.06)] hover:border-[#AB9678]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-[#8C827A] mb-4">
                  <span className="bg-[#FAF8F5] text-[#664936] border border-[#E8E2D8] px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime} دقائق قراءة</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-black text-[#2C241E] group-hover:text-[#664936] transition-colors leading-snug mb-4">
                  <Link to="/blog/$slug" params={{ slug: post.slug }}>
                    {post.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-sm leading-relaxed text-[#6B5E54] mb-8">
                  {post.excerpt}
                </p>
              </div>

              {/* Action Link */}
              <div className="border-t border-[#E8E2D8]/60 pt-4 flex justify-between items-center">
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="inline-flex items-center gap-2 font-bold text-sm text-[#664936] group-hover:text-[#AB9678] transition-colors"
                >
                  <ArrowUpLeft className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5" />
                  اقرأ المقال الكامل
                </Link>
                <div className="text-xs text-[#8C827A]">الكاتب: {post.author}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative mx-auto max-w-[1200px] px-4 sm:px-6 mb-16">
        <div className="rounded-[2.5rem] bg-[#2C241E] p-10 sm:p-16 text-white text-center relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')] mix-blend-overlay"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black mb-6">هل تبحث عن هوية بصرية متميزة لمشروعك؟</h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              دعنا نتحدث عن مشروعك ونرسم معاً حلاً فنيّاً متكاملاً يجذب عملائك ويبني ثقة مستدامة.
            </p>
            <a
              href="https://wa.me/201009215131"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#AB9678] text-white px-8 py-4 font-bold transition-transform hover:scale-[1.02]"
            >
              تواصل معي على واتساب
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-4 py-8 border-t border-[#E8E2D8]/60 text-xs text-[#8C827A] mt-12">
        <div>© 2026 محمد زهران. جميع الحقوق محفوظة.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-[#2C241E]">تويتر</a>
          <a href="#" className="hover:text-[#2C241E]">إنستغرام</a>
          <a href="#" className="hover:text-[#2C241E]">يوتيوب</a>
        </div>
      </footer>
    </main>
  );
}
