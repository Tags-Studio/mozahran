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
        {/* Glow behind the mirrored portrait on the left */}
        <div
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(55% 55% at 20% 55%, oklch(0.45 0.25 250 / 0.45), transparent 75%)",
          }}
        />

        <div className="relative grid grid-cols-1 items-center gap-10 p-6 sm:p-10 md:grid-cols-2 md:p-16 z-10 min-h-[80vh] md:min-h-[85vh]">
          {/* Text Column (Right on desktop, Top on mobile) */}
          <div className="flex flex-col items-start text-right justify-center gap-6 order-1 md:order-2">
            <span className="rounded-full bg-primary/20 px-4 py-1.5 text-xs font-medium text-surface-foreground/90 sm:text-sm">
              محمد زهران — مصمم هويات بصرية
            </span>
            <h1
              className="font-black leading-[1.15] tracking-tight text-surface-foreground"
              style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
            >
              أصمم هويات بصرية تجعل
              <br />
              مشروعك <span className="text-blue-400">أوضح وأكثر ثقة</span>
            </h1>
            <p className="max-w-md text-base leading-relaxed text-surface-foreground/85 sm:text-lg">
              من الشعار إلى دليل الهوية والمطبوعات والمحتوى البصري، أبني
              للشركات والمشروعات في السعودية ومصر حضورًا متناسقًا وواضحًا
              وقابلًا للنمو.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/201009215131"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-primary py-3 pl-3 pr-6 text-base font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                اطلب عرض سعر
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/15">
                  <ArrowUpLeft className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5" />
                </span>
              </a>
              <a
                href="#portfolio-grid"
                className="inline-flex items-center gap-2 rounded-full border border-surface-foreground/25 px-6 py-3 text-base font-medium text-surface-foreground/90 transition-colors hover:bg-surface-foreground/10"
              >
                شاهد أعمالي
              </a>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-3 mt-2">
              {/* WhatsApp */}
              <a
                href="https://wa.me/201009215131"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.729-1.452L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.115-2.908-6.995-1.878-1.88-4.357-2.912-6.997-2.914-5.444 0-9.869 4.426-9.873 9.87.002 1.69.447 3.336 1.291 4.772L1.752 21.84l4.895-1.286zm11.517-5.59c-.31-.154-1.834-.904-2.115-1.007-.28-.103-.485-.155-.688.154-.203.31-.787.98-.965 1.186-.177.207-.355.23-.665.077-.31-.154-1.31-.483-2.497-1.542-.924-.824-1.548-1.842-1.73-2.15-.181-.31-.019-.477.136-.63.14-.137.31-.36.465-.54.155-.18.207-.31.31-.517.103-.207.052-.386-.026-.54-.078-.154-.689-1.66-.944-2.27-.249-.596-.501-.515-.689-.524-.177-.01-.38-.01-.58-.01-.202 0-.532.077-.81.38-.28.31-1.066 1.042-1.066 2.541 0 1.498 1.09 2.946 1.242 3.153.153.206 2.146 3.277 5.198 4.593.725.313 1.291.5 1.733.64.728.232 1.39.2 1.912.12.583-.088 1.834-.75 2.09-1.474.256-.723.256-1.343.18-1.474-.077-.13-.28-.206-.59-.36z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mohamed-zahran-884ba281/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Image Column (Left on desktop, Bottom on mobile) */}
          <div className="flex justify-center items-end h-full order-2 md:order-1 self-end">
            <img
              src={heroImg}
              alt="محمد زهران — آرت دايركتور"
              width={1024}
              height={1024}
              className="pointer-events-none max-h-[50vh] md:max-h-[75vh] w-auto object-contain object-bottom scale-x-[-1]"
            />
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
              href="https://wa.me/201009215131"
              target="_blank"
              rel="noopener noreferrer"
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
