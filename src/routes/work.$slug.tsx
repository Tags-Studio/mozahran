import { createFileRoute } from "@tanstack/react-router"
import { caseStudies } from "../lib/caseStudies"
import ZaatarCaseStudy from "../components/case-studies/ZaatarCaseStudy"
import AgriculturalCaseStudy from "../components/case-studies/AgriculturalCaseStudy"
import RagyBurgerCaseStudy from "../components/case-studies/RagyBurgerCaseStudy"
import SakenCaseStudy from "../components/case-studies/SakenCaseStudy"
import { Link } from "@tanstack/react-router"

export const Route = createFileRoute("/work/$slug")({
  component: CaseStudyPage,
})

function StandardCaseStudy({ slug }: { slug: string }) {
  const item = caseStudies.find((entry) => entry.slug === slug)

  if (!item) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h1 className="text-2xl font-bold">دراسة الحالة غير موجودة</h1>
        <Link to="/" className="mt-4 inline-block text-primary hover:underline">
          العودة للرئيسية
        </Link>
      </div>
    )
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 lg:px-8 text-right">
      <nav aria-label="مسار التنقل" className="mb-8 flex gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary">الرئيسية</Link>
        <span>/</span>
        <span className="text-foreground">{item.title}</span>
      </nav>

      <section className="mt-8 grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="font-semibold text-primary">{item.category}</p>
          <h1 className="mt-3 text-4xl font-bold">{item.title}</h1>
          <p className="mt-5 leading-8 text-muted-foreground">
            {item.solution}
          </p>
        </div>
        <img
          src={item.image}
          alt={item.title}
          width={900}
          height={700}
          className="rounded-3xl object-cover"
        />
      </section>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {[
          ["عن المشروع", `العميل: ${item.client} — ${item.location}`],
          ["التحدي", item.problem],
          ["الحل الإبداعي", item.solution],
          ["النتيجة", item.results],
        ].map(([title, text]) => (
          <section key={title} className="rounded-2xl border border-border p-6 bg-card">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="mt-3 leading-8 text-muted-foreground">{text}</p>
          </section>
        ))}
      </div>

      <section className="mt-8 rounded-2xl border border-border p-6 bg-card">
        <h2 className="text-2xl font-bold">تطبيقات الهوية</h2>
        <ul className="mt-4 list-disc pr-6 leading-8">
          {item.applications.map((application) => (
            <li key={application}>{application}</li>
          ))}
        </ul>
      </section>

      <div className="mt-12 text-center">
        <a
          href="https://wa.me/201009215131"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-3 text-base font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
        >
          ابدأ مشروعك
        </a>
      </div>
    </main>
  )
}

function CaseStudyPage() {
  const { slug } = Route.useParams()

  if (slug === "zaatar-w-simsim-brand-identity") {
    return <ZaatarCaseStudy />
  }

  if (slug === "agricultural-development-association-brand-identity") {
    return <AgriculturalCaseStudy />
  }

  if (slug === "ragy-burger-brand-identity") {
    return <RagyBurgerCaseStudy />
  }

  if (slug === "saken-corporate-housing-brand-identity") {
    return <SakenCaseStudy />
  }

  return <StandardCaseStudy slug={slug} />
}
