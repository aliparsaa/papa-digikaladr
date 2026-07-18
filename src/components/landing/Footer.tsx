"use client"
import { Phone, Globe } from "lucide-react"

// آیکون اینستاگرام سفارشی با SVG
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 shrink-0"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

export default function Footer() {
  return (
    <footer id="contact" className="bg-med py-16 px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-l from-transparent via-champagne/25 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center">
                <span className="text-champagne font-black text-lg">د</span>
              </div>
              <div>
                <h4 className="text-white font-bold text-base">دکتر آرمیس</h4>
                <span className="text-slate-custom text-[11px]">doctoraramis.ir</span>
              </div>
            </div>
            <p className="text-slate-custom text-sm leading-7">
              مرجع تخصصی فروش و آموزش نخ‌های لیفت استایژن در ایران
            </p>
          </div>

          <div>
            <h4 className="text-champagne font-semibold mb-5 text-sm">دسترسی سریع</h4>
            <div className="flex flex-col gap-3">
              <a href="#products" className="text-slate-custom text-sm hover:text-white transition-colors">محصولات</a>
              <a href="#education" className="text-slate-custom text-sm hover:text-white transition-colors">آموزش تخصصی</a>
              <a href="#specs" className="text-slate-custom text-sm hover:text-white transition-colors">مشخصات فنی</a>
            </div>
          </div>

          <div>
            <h4 className="text-champagne font-semibold mb-5 text-sm">ارتباط با ما</h4>
            <div className="flex flex-col gap-3.5">
              <a href="tel:+989122805180" className="flex items-center gap-2.5 text-slate-custom text-sm hover:text-white transition-colors">
                <Phone className="w-4 h-4 shrink-0" /> 09122805180
              </a>
              <a href="https://doctoraramis.ir" className="flex items-center gap-2.5 text-slate-custom text-sm hover:text-white transition-colors">
                <Globe className="w-4 h-4 shrink-0" /> Doctoraramis.ir
              </a>
              <a href="#" className="flex items-center gap-2.5 text-slate-custom text-sm hover:text-white transition-colors">
                <InstagramIcon /> @doctoraramis
              </a>
            </div>
          </div>
        </div>
        <div className="h-px bg-linear-to-l from-transparent via-champagne to-transparent mt-12 mb-6 opacity-40" />
        <p className="text-center text-slate-custom text-xs">
          تمامی حقوق مادی و معنوی این سایت متعلق به دکتر آرمیس می‌باشد
        </p>
      </div>
    </footer>
  )
}