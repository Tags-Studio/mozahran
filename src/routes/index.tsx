import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpLeft,
  Instagram,
  Youtube,
  Twitter,
  Palette,
  Package,
  Share2,
  Film,
  Search,
  Layers,
  FileCheck2,
  Target,
  Sparkles,
  Award,
} from "lucide-react";
import heroImg from "@/assets/hero-portrait.png";
import PortfolioGrid from "@/components/PortfolioGrid";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "محمد زهران — آرت دايركتور ومصمم جرافيك" },
      {
        name: "description",
        content:
          "محمد زهران — آرت دايركتور ومصمم جرافيك. أصمم هويات بصرية متكاملة للشركات في السعودية ومصر منذ عام 2012: شعارات، دليل هوية، مطبوعات، ومحتوى بصري.",
      },
      { property: "og:title", content: "محمد زهران — آرت دايركتور ومصمم جرافيك" },
      {
        property: "og:description",
        content:
          "أبني هويات بصرية واضحة وقابلة للنمو للشركات في السعودية ومصر منذ 2012.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "محمد زهران — آرت دايركتور ومصمم جرافيك" },
      {
        name: "twitter:description",
        content: "هوية بصرية احترافية للشركات في السعودية ومصر.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const NAV = [
  { label: "الرئيسية", href: "#home" },
  { label: "من أنا", href: "#about" },
  { label: "معرض الأعمال", href: "#portfolio-grid" },
  { label: "الخدمات", href: "#services" },
  { label: "لماذا أنا", href: "#why" },
  { label: "تواصل", href: "#contact" },
];

function Index() {
  return (
    <main className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      {/* Nav */}
      <nav className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-2 sm:gap-3">
        {NAV.map((item, i) => (
          <a
            key={item.label}
            href={item.href}
            className={
              "flex-1 min-w-[110px] rounded-full py-4 text-center text-sm font-medium tracking-wide transition-colors " +
              (i === 0
                ? "bg-primary text-primary-foreground"
                : "bg-pill text-foreground/80 hover:text-foreground")
            }
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative mx-auto mt-4 max-w-[1400px] overflow-hidden rounded-[2rem] bg-surface text-surface-foreground sm:mt-6"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 60% at 70% 40%, oklch(0.35 0.22 265 / 0.55), transparent 60%)",
          }}
        />

        <img
          src={heroImg}
          alt="محمد زهران — آرت دايركتور ومصمم جرافيك"
          width={1024}
          height={1024}
          className="pointer-events-none absolute bottom-0 left-0 h-[70%] w-auto object-contain object-bottom md:h-[90%]"
        />

        <div className="relative grid min-h-[80vh] grid-cols-1 gap-6 p-6 sm:p-10 md:min-h-[85vh] md:grid-cols-12 md:p-14">
          <div className="col-span-12 flex flex-col items-center text-center">
            <span className="rounded-full bg-primary/20 px-4 py-1.5 text-xs font-medium text-surface-foreground/90 sm:text-sm">
              محمد زهران — آرت دايركتور ومصمم جرافيك
            </span>
            <h1
              className="mt-4 pointer-events-none font-black leading-[0.95] tracking-tight text-surface-foreground"
              style={{ fontSize: "clamp(2.25rem, 7vw, 6rem)" }}
            >
              أصمم هويات بصرية تجعل مشروعك
              <br />
              أوضح وأكثر ثقة
            </h1>
          </div>

          <div className="col-span-12 mt-auto flex flex-col justify-end gap-6 md:col-span-5 md:col-start-8 md:items-start md:text-right">
            <p className="max-w-md text-base leading-relaxed text-surface-foreground/85 sm:text-lg">
              من الشعار إلى دليل الهوية والمطبوعات والمحتوى البصري، أبني
              للشركات والمشروعات في السعودية ومصر حضورًا متناسقًا وواضحًا
              وقابلًا للنمو.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-primary py-3 pl-3 pr-6 text-base font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                اطلب عرض سعر
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/15">
                  <ArrowUpLeft className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5" />
                </span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-surface-foreground/25 px-6 py-3 text-base font-medium text-surface-foreground/90 transition-colors hover:bg-surface-foreground/10"
              >
                شاهد أعمالي
              </a>
            </div>
            <div className="flex gap-3">
              {[Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust stats */}
      <section className="mx-auto mt-6 grid max-w-[1400px] grid-cols-1 gap-3 sm:grid-cols-3">
        {[
          { k: "منذ عام 2012", v: "خبرة متراكمة في بناء الهويات البصرية" },
          { k: "السعودية ومصر", v: "تنفيذ للمشروعات في المنطقة" },
          { k: "ملفات منظمة", v: "جاهزة للطباعة والتطبيق الفعلي" },
        ].map((s) => (
          <div key={s.k} className="rounded-3xl bg-pill p-6">
            <div className="text-lg font-semibold text-foreground">{s.k}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
          </div>
        ))}
      </section>

      {/* System / Philosophy */}
      <section className="mx-auto mt-6 max-w-[1400px] overflow-hidden rounded-[2rem] bg-surface p-8 text-surface-foreground sm:p-12 md:p-16">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="text-xs font-medium uppercase tracking-widest text-surface-foreground/60">
              نظام بصري احترافي
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              محمد زهران — نظام بصري احترافي
            </h2>
          </div>
          <p className="md:col-span-7 text-base leading-loose text-surface-foreground/85 sm:text-lg">
            هويتك البصرية هي أول انطباع يكتسبه عميلك المحتمل. إذا لم يكن
            المظهر البصري واضحًا أو موحدًا، فقد تخسر الثقة قبل أن تبدأ
            المحادثة. أنا هنا لأبني لك نظامًا بصريًا كاملًا ومتناسقًا يجعلك
            تظهر باحترافية في كل نقطة تواصل مع عملائك — بدءًا من الشعار،
            مرورًا بالمطبوعات، ووصولًا إلى السوشيال ميديا.
          </p>
        </div>
      </section>

      {/* Why Me */}
      <section id="why" className="mx-auto mt-6 max-w-[1400px]">
        <div className="rounded-[2rem] bg-pill p-8 sm:p-12 md:p-16">
          <div className="max-w-3xl">
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              لماذا تختارني؟
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
              لا أصمم مجرد شكل، بل أبني نظامًا يخدم عملك وأهدافك
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              {
                Icon: Target,
                t: "استراتيجية قبل التصميم",
                d: "أفهم تفاصيل نشاطك وجمهورك المستهدف بدقة قبل بناء أي عنصر بصري.",
              },
              {
                Icon: Layers,
                t: "هوية قابلة للتطبيق",
                d: "أصمم نظامًا مرنًا وواضحًا يعمل بكفاءة عبر كافة قنوات ومنصات التواصل.",
              },
              {
                Icon: Award,
                t: "خبرة مع قطاعات متنوعة",
                d: "قدمت حلولاً بصرية مبتكرة للعديد من الشركات والمشروعات الناجحة في السعودية ومصر.",
              },
              {
                Icon: FileCheck2,
                t: "تسليم احترافي منظم",
                d: "أضمن استلامك لملفاتك بنظام وترتيب دقيق يسهّل استخدامها للطباعة والنشر الرقمي.",
              },
            ].map(({ Icon, t, d }) => (
              <div
                key={t}
                className="group flex gap-4 rounded-3xl bg-background p-6 transition-colors hover:bg-background/70"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto mt-6 max-w-[1400px]">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="rounded-[2rem] bg-primary p-8 text-primary-foreground sm:p-12 md:col-span-5 md:p-14">
            <span className="text-xs font-medium uppercase tracking-widest text-primary-foreground/70">
              من أنا
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              خبرة بدأت في عالم التصميم عام 2012، لتتحول إلى شغف يومي ببناء
              الهويات البصرية
            </h2>
            <div className="mt-8 flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-primary-foreground/15">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <div className="text-lg font-semibold">محمد زهران</div>
                <div className="text-sm text-primary-foreground/75">
                  آرت دايركتور ومصمم جرافيك
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-pill p-8 sm:p-12 md:col-span-7 md:p-14">
            <p className="text-base leading-loose text-foreground sm:text-lg">
              أنا محمد زهران، آرت دايركتور ومصمم جرافيك أساعد الشركات
              والمشروعات على تأسيس حضور بصري قوي وواضح. أعمل مع عملاء في مصر
              والسعودية، وأحرص دائمًا على ربط قرارات التصميم بأهداف العلامة
              التجارية وسلوك الجمهور المستهدف لضمان الفعالية والتميز.
            </p>
            <p className="mt-5 text-base leading-loose text-muted-foreground sm:text-lg">
              لا أتعامل مع الهوية البصرية باعتبارها مجرد شعار، بل كمنظومة
              متكاملة تشمل الألوان، والخطوط، والتطبيقات العملية، والمحتوى
              البصري، مما يمنح مشروعك صورة أكثر احترافية وثباتًا أمام عملائه.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto mt-6 max-w-[1400px]">
        <div className="rounded-[2rem] bg-surface p-8 text-surface-foreground sm:p-12 md:p-16">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-medium uppercase tracking-widest text-surface-foreground/60">
                خدماتي
              </span>
              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                خدمات بصرية مترابطة تدعم نمو مشروعك
              </h2>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              {
                Icon: Palette,
                t: "بناء الهويات البصرية والشعارات",
                d: "تصميم شعارات فريدة وأدلة استخدام متكاملة للعلامات التجارية.",
              },
              {
                Icon: Package,
                t: "تصميم المطبوعات والتغليف",
                d: "إخراج وتجهيز تصاميم العبوات والعلب والهدايا الدعائية والمواد الورقية للطباعة.",
              },
              {
                Icon: Share2,
                t: "المحتوى البصري للسوشيال ميديا",
                d: "بناء قوالب احترافية ومنشورات دورية متناسقة لشبكات التواصل الاجتماعي.",
              },
              {
                Icon: Film,
                t: "توجيه وإنتاج الموشن جرافيك",
                d: "تحريك وتوجيه الرسوم لإنتاج مقاطع فيديو تشرح أفكارك بشكل مبهر ومقنع.",
              },
            ].map(({ Icon, t, d }) => (
              <div
                key={t}
                className="group rounded-3xl bg-surface-foreground/5 p-6 transition-colors hover:bg-surface-foreground/10"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <ArrowUpLeft className="h-5 w-5 text-surface-foreground/40 transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-surface-foreground/75">
                  {d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <PortfolioGrid />

      {/* Principles */}
      <section className="mx-auto mt-6 max-w-[1400px]">
        <div className="rounded-[2rem] bg-pill p-8 sm:p-12 md:p-16">
          <div className="max-w-3xl">
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              مبادئي وطريقة تفكيري
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
              التصميم الجيد يجب أن يكون جميلًا وقابلًا للاستخدام الفعلي
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                n: "01",
                Icon: Search,
                t: "أفهم قبل أن أصمم",
                d: "أبدأ بدراسة السوق والمنافسين والجمهور، ثم أبني اتجاهًا فنيًا يخدم أهدافًا محددة ومدروسة.",
              },
              {
                n: "02",
                Icon: Layers,
                t: "الاتساق أهم من اللقطة الواحدة",
                d: "أركز على تصميم لغة بصرية متكاملة تسري بنسق واحد عبر الموقع والمطبوعات والإعلانات، بدلًا من عناصر متفرقة.",
              },
              {
                n: "03",
                Icon: FileCheck2,
                t: "التسليم جزء من الجودة",
                d: "أهتم بتنظيم الملفات المصدرية وتحديد الأكواد اللونية وتوفير مقاسات دقيقة لتطبيق الهوية بثقة وسهولة.",
              },
            ].map(({ n, Icon, t, d }) => (
              <div
                key={n}
                className="rounded-3xl bg-background p-6 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-primary/30">
                    {n}
                  </span>
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="contact"
        className="mx-auto mt-6 max-w-[1400px] overflow-hidden rounded-[2rem] bg-primary p-8 text-primary-foreground sm:p-12 md:p-16"
      >
        <div className="grid gap-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              جاهز نبني هوية مشروعك القادم؟
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              تواصل معي لنبدأ حوارًا حول رؤيتك، ونضع معًا خطة بصرية واضحة
              تخدم أهداف علامتك التجارية.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-wrap gap-3 md:justify-end">
            <a
              href="mailto:hello@example.com"
              className="group inline-flex items-center gap-3 rounded-full bg-primary-foreground py-3 pl-3 pr-6 text-base font-medium text-primary transition-transform hover:scale-[1.02]"
            >
              تواصل معي
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/15">
                <ArrowUpLeft className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto mt-6 flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-2 py-6 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} محمد زهران. جميع الحقوق محفوظة.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-foreground">تويتر</a>
          <a href="#" className="hover:text-foreground">إنستغرام</a>
          <a href="#" className="hover:text-foreground">يوتيوب</a>
        </div>
      </footer>
    </main>
  );
}
