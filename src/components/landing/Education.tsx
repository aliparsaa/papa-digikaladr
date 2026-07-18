"use client"
import { useRef, type ComponentType } from "react"
import { educationModules } from "@/lib/data"
import {
  Clock,
  PlayCircle,
  ChevronRight,
  ChevronLeft,
  BookOpen,
  Target,
  ScanFace,
  ShieldCheck,
  Brain,
  TrendingUp,
} from "lucide-react"
import ScrollReveal from "./ScrollReveal"

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  "book-open": BookOpen,
  target: Target,
  "scan-face": ScanFace,
  "shield-check": ShieldCheck,
  brain: Brain,
  "trending-up": TrendingUp,
}

const levelColors: Record<string, string> = {
  مقدماتی: "bg-emerald-500/15 text-emerald-400",
  متوسط: "bg-amber-500/15 text-amber-400",
  پیشرفته: "bg-orange-500/15 text-orange-400",
  تخصصی: "bg-rose-500/15 text-rose-400",
}

export default function Education() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -330 : 330,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="education" className="py-20 md:py-28 px-6 bg-med relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-25" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-champagne/25 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <ScrollReveal>
              <span className="text-champagne text-xs font-semibold tracking-widest">
                آکادمی دکتر آرمیس
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h3 className="text-3xl md:text-4xl font-black text-white mt-3">
                آموزش تخصصی نخ‌های لیفت
              </h3>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-slate-custom mt-4 max-w-md text-sm leading-7">
                دسترسی به دانش روز دنیا در زمینه تکنیک‌های لیفت با نخ
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.3}>
            <div className="flex gap-2">
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-champagne/25 flex items-center justify-center text-champagne hover:bg-champagne/10 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-champagne/25 flex items-center justify-center text-champagne hover:bg-champagne/10 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
          </ScrollReveal>
        </div>

        <div
          ref={scrollRef}
          className="edu-scroll flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4"
        >
          {educationModules.map((mod) => {
            const Icon = iconMap[mod.icon] ?? BookOpen
            return (
              <div
                key={mod.title}
                className="edu-card rounded-2xl p-6 w-[300px] flex-shrink-0 snap-start"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-champagne/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-champagne" />
                  </div>
                  <span
                    className={`text-[11px] px-3 py-1 rounded-full font-medium ${
                      levelColors[mod.level] ?? ""
                    }`}
                  >
                    {mod.level}
                  </span>
                </div>
                <h4 className="text-white font-bold text-base mb-3 leading-7">
                  {mod.title}
                </h4>
                <div className="flex items-center gap-4 text-slate-custom text-sm mb-5">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {mod.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <PlayCircle className="w-4 h-4" />
                    {mod.lessons} درس
                  </span>
                </div>
                <button className="learn-btn w-full border border-champagne/25 text-champagne py-2.5 rounded-full text-sm font-semibold hover:bg-champagne/10 transition-all">
                  شروع یادگیری
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}