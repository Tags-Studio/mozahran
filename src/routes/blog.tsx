import { createFileRoute, Link } from "@tanstack/react-router";
import { getPublishedPosts } from "../lib/blogScheduler";
import { ArrowUpLeft, Calendar, Clock, BookOpen, Sparkles } from "lucide-react";
import Navbar from "../components/Navbar";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "المدونة — محمد زهران | مقالات الهوية البصرية والتصميم" },
      {
        name: "description",
        content: "مقالات وأدلة عملية في الهوية البصرية، تصميم المطبوعات، السوشيال ميديا، والموشن جرافيك من واقع خبرة محمد زهران.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <main className="min-h-screen bg-background p-4 sm:p-6 lg:p-8 overflow-x-hidden max-w-full">
      {/* Navigation */}
      <Navbar activeTab="blog" />

      {/* Hero Section */}
      <section className="relative mx-auto mt-4 max-w-[1400px] overflow-hidden rounded-[2rem] bg-surface text-surface-foreground sm:mt-6 border border-border/30 hover:border-primary/20 hover:shadow-[0_40px_80px_rgba(59,130,246,0.15)] hover-3d p-8 sm:p-14 md:p-20">
        {/* Glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(60% 60% at 30% 40%, oklch(0.45 0.25 250 / 0.35), transparent 75%)",
          }}
        />

        <div className="relative z-10 max-w-3xl text-right">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-xs font-medium text-surface-foreground/90 sm:text-sm border border-primary/30">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            مدونة التوجيه الفني والتصميم
          </span>
          <h1
            className="mt-6 font-black leading-[1.2] tracking-tight text-surface-foreground"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
          >
            أفكار وأدلة عملية في <br />
            <span className="text-blue-400">الهوية البصرية والتصميم والتسويق</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-surface-foreground/80 sm:text-lg max-w-2xl">
            خلاصة تجارب وتوصيات عملية لمساعدتك على بناء حضور بصري متماسك ومقنع لمشروعك، وتجنب الأخطاء الشائعة في سوق التصميم.
          </p>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="mx-auto mt-8 max-w-[1400px]">
        <div className="mb-8 flex items-center justify-between px-2">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              المقالات المنشورة
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-foreground">
              أحدث المقالات والأدلة
            </h2>
          </div>
          <div className="text-sm font-medium text-muted-foreground bg-pill px-4 py-2 rounded-full border border-border/40">
            {posts.length} مقالات متاحة
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative overflow-hidden rounded-[2rem] bg-pill border border-border/40 p-8 shadow-[0_15px_30px_rgba(0,0,0,0.02)] hover-3d hover:shadow-[0_30px_60px_rgba(59,130,246,0.1)] hover:border-primary/35 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-muted-foreground mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold border border-primary/15">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    <span>{post.readTime} دقائق قراءة</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-foreground hover:text-primary transition-colors leading-snug mb-3 text-right">
                  <Link to="/blog/$slug" params={{ slug: post.slug }}>
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-sm leading-relaxed text-muted-foreground mb-6 text-right">
                  {post.excerpt}
                </p>
              </div>

              {/* Action Link */}
              <div className="border-t border-border/40 pt-5 flex justify-between items-center">
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  اقرأ المقال بالكامل
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <ArrowUpLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5" />
                  </span>
                </Link>
                <span className="text-xs text-muted-foreground">{post.author}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto mt-10 max-w-[1400px] overflow-hidden rounded-[2rem] bg-primary p-8 text-primary-foreground sm:p-12 md:p-16 border border-white/10 hover:-translate-y-1.5 hover:shadow-[0_45px_90px_rgba(59,130,246,0.22)] transition-all duration-700 ease-out">
        <div className="grid gap-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8 text-right">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              جاهز نبني هوية مشروعك القادم؟
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              تواصل معي لنبدأ حوارًا حول رؤيتك، ونضع معًا خطة بصرية واضحة تخدم أهداف علامتك التجارية.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-wrap gap-3 md:justify-end">
            <a
              href="https://wa.me/201009215131"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-primary-foreground py-3.5 pl-4 pr-7 text-base font-medium text-primary transition-transform hover:scale-[1.02]"
            >
              تواصل معي على واتساب
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/15">
                <ArrowUpLeft className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto mt-6 flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-2 py-6 text-sm text-muted-foreground">
        <div>© 2026 محمد زهران. جميع الحقوق محفوظة.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-foreground">تويتر</a>
          <a href="#" className="hover:text-foreground">إنستغرام</a>
          <a href="#" className="hover:text-foreground">يوتيوب</a>
        </div>
      </footer>
    </main>
  );
}
