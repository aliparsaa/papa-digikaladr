"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { href: "#hero", label: "خانه" },
  { href: "#products", label: "محصولات" },
  { href: "#education", label: "آموزش" },
  { href: "#specs", label: "مشخصات فنی" },
  { href: "#contact", label: "تماس با ما" },
  { href: "/articles", label: "مقالات"} ,
]
export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="glass-nav fixed top-0 right-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-med flex items-center justify-center group-hover:scale-105 transition-transform">
            <span className="text-champagne font-black text-lg">د</span>
          </div>
          <div>
            <h1 className="text-med font-extrabold text-base leading-tight">دکتر آرمیس</h1>
            <span className="text-slate-custom text-[11px] tracking-wide">doctoraramis.ir</span>
          </div>
        </a>

        {/* لینک‌های دسکتاپ */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] text-slate-custom hover:text-med transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* دکمه منوی موبایل */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-med p-1"
          aria-label="منو"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* منوی موبایل */}
      {open && (
        <div className="md:hidden px-6 pb-4 border-t border-slate-100">
          <div className="flex flex-col gap-1 pt-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-slate-custom hover:text-med py-2.5 font-medium"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}