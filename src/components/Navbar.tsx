"use client";

import { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, ArrowUpLeft, Sparkles } from "lucide-react";

export interface NavbarProps {
  activeTab?: "home" | "blog" | "about" | "work" | "services" | "contact";
}

const CASE_STUDIES = [
  {
    title: "هوية ساكن للإسكان المؤسسي",
    category: "هوية عقارية ومؤسسية",
    location: "الجبيل الصناعية",
    slug: "saken-corporate-housing-brand-identity",
    badge: "مشروع مميز",
  },
  {
    title: "هوية مطعم زعتر و سمسم",
    category: "هوية بصرية للمطاعم",
    location: "الرياض والقاهرة",
    slug: "zaatar-w-simsim-brand-identity",
  },
  {
    title: "هوية مطعم برجر راجي",
    category: "هوية بصرية للمطاعم",
    location: "الرياض",
    slug: "ragy-burger-brand-identity",
  },
  {
    title: "هوية جمعية التنمية الزراعية",
    category: "هوية مؤسسية واجتماعية",
    location: "الأحساء",
    slug: "agricultural-development-association-brand-identity",
  },
];

export default function Navbar({ activeTab = "home" }: NavbarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-2 sm:gap-3 relative z-40">
      {/* الرئيسية */}
      <Link
        to="/"
        className={
          "flex-1 min-w-[105px] rounded-full py-4 text-center text-sm font-medium tracking-wide transition-colors " +
          (activeTab === "home"
            ? "bg-primary text-primary-foreground"
            : "bg-pill text-foreground/80 hover:text-foreground")
        }
      >
        الرئيسية
      </Link>

      {/* من أنا */}
      <a
        href="/#about"
        className="flex-1 min-w-[105px] rounded-full py-4 text-center text-sm font-medium tracking-wide transition-colors bg-pill text-foreground/80 hover:text-foreground"
      >
        من أنا
      </a>

      {/* دراسات الحالة مع القائمة المنسدلة */}
      <div
        ref={dropdownRef}
        className="relative flex-1 min-w-[130px] group"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <a
          href="/#case-studies"
          onClick={(e) => {
            // If on mobile, first tap opens dropdown
            if (window.innerWidth < 768 && !dropdownOpen) {
              e.preventDefault();
              setDropdownOpen(true);
            }
          }}
          className={
            "w-full flex items-center justify-center gap-1.5 rounded-full py-4 text-center text-sm font-medium tracking-wide transition-colors " +
            (dropdownOpen
              ? "bg-primary text-primary-foreground"
              : "bg-pill text-foreground/80 hover:text-foreground")
          }
        >
          <span>دراسات الحالة</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              dropdownOpen ? "rotate-180" : ""
            }`}
          />
        </a>

        {/* Dropdown Menu */}
        <div
          className={`absolute top-[calc(100%+8px)] right-0 sm:right-1/2 sm:translate-x-1/2 w-80 sm:w-96 rounded-3xl bg-pill border border-border/40 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.15)] backdrop-blur-xl transition-all duration-200 z-50 ${
            dropdownOpen
              ? "opacity-100 visible translate-y-0 pointer-events-auto"
              : "opacity-0 invisible -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="px-3 py-2 text-xs font-bold text-muted-foreground border-b border-border/30 flex items-center justify-between mb-1">
            <span>دراسات الحالة المتكاملة</span>
            <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full">
              4 مشاريع
            </span>
          </div>

          <div className="space-y-1">
            {CASE_STUDIES.map((cs) => (
              <Link
                key={cs.slug}
                to="/work/$slug"
                params={{ slug: cs.slug }}
                onClick={() => setDropdownOpen(false)}
                className="group/item flex items-center justify-between p-3 rounded-2xl hover:bg-background transition-all text-right border border-transparent hover:border-border/40"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-foreground group-hover/item:text-primary transition-colors">
                      {cs.title}
                    </span>
                    {cs.badge && (
                      <span className="text-[10px] bg-amber-500/10 text-amber-600 px-1.5 py-0.2 rounded font-medium">
                        {cs.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-0.5 text-xs text-muted-foreground">
                    <span>{cs.category}</span>
                    <span>•</span>
                    <span>{cs.location}</span>
                  </div>
                </div>

                <div className="h-8 w-8 rounded-full bg-background group-hover/item:bg-primary group-hover/item:text-primary-foreground flex items-center justify-center transition-colors shrink-0 mr-2">
                  <ArrowUpLeft className="h-4 w-4 transition-transform group-hover/item:-translate-y-0.5 group-hover/item:-translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>

          {/* رابط إلى قسم المعرض بالكامل */}
          <div className="border-t border-border/30 mt-2 pt-2 text-center">
            <a
              href="/#case-studies"
              onClick={() => setDropdownOpen(false)}
              className="inline-flex items-center gap-1.5 py-1.5 text-xs font-bold text-primary hover:text-primary/80 transition-colors"
            >
              عرض جميع دراسات الحالة في المعرض
              <ArrowUpLeft className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      {/* معرض الأعمال */}
      <a
        href="/#portfolio-grid"
        className="flex-1 min-w-[105px] rounded-full py-4 text-center text-sm font-medium tracking-wide transition-colors bg-pill text-foreground/80 hover:text-foreground"
      >
        معرض الأعمال
      </a>

      {/* المدونة */}
      <Link
        to="/blog"
        className={
          "flex-1 min-w-[105px] rounded-full py-4 text-center text-sm font-medium tracking-wide transition-colors " +
          (activeTab === "blog"
            ? "bg-primary text-primary-foreground"
            : "bg-pill text-foreground/80 hover:text-foreground")
        }
      >
        المدونة
      </Link>

      {/* الخدمات */}
      <a
        href="/#services"
        className="flex-1 min-w-[105px] rounded-full py-4 text-center text-sm font-medium tracking-wide transition-colors bg-pill text-foreground/80 hover:text-foreground"
      >
        الخدمات
      </a>

      {/* تواصل */}
      <a
        href="/#contact"
        className="flex-1 min-w-[105px] rounded-full py-4 text-center text-sm font-medium tracking-wide transition-colors bg-pill text-foreground/80 hover:text-foreground"
      >
        تواصل
      </a>
    </nav>
  );
}
