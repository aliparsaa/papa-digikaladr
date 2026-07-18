"use client"
import { useRef } from "react"
import { products } from "@/lib/data"
import { Ruler, MoveHorizontal } from "lucide-react"
import { useToast } from "@/components/landing/Toast"
import ScrollReveal from "./ScrollReveal"

// ← این کامپوننت را حتماً قبل از Products تعریف کنید
function ProductCard({
  product,
  index,
  onDetail,
}: {
  product: (typeof products)[0]
  index: number
  onDetail: () => void
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rx = ((y - centerY) / centerY) * -7
    const ry = ((x - centerX) / centerX) * 7
    card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`
  }

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = ""
  }

  return (
    <ScrollReveal delay={Math.min(index + 1, 5) * 0.1}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="product-card bg-white rounded-2xl overflow-hidden border border-slate-100 cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.12s ease-out, box-shadow 0.35s ease",
        }}
      >
        <div className="relative h-52 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
          <img
            src={`https://picsum.photos/seed/${product.seed}/400/300`}
            alt={product.name}
            className="w-full h-full object-cover grayscale opacity-40"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
          <span className="absolute top-4 right-4 bg-med/90 text-champagne text-[11px] font-bold px-3 py-1 rounded-full">
            {product.type}
          </span>
        </div>
        <div className="p-6">
          <h4 className="font-bold text-med text-lg mb-2">{product.name}</h4>
          <p className="text-slate-custom text-sm mb-4 leading-6">{product.desc}</p>
          <div className="flex gap-3 mb-5 text-xs flex-wrap">
            <span className="flex items-center gap-1.5 text-med bg-med/5 px-3 py-1.5 rounded-full font-medium">
              <Ruler className="w-3.5 h-3.5" /> {product.gauge}
            </span>
            <span className="flex items-center gap-1.5 text-med bg-med/5 px-3 py-1.5 rounded-full font-medium">
              <MoveHorizontal className="w-3.5 h-3.5" /> {product.length}
            </span>
          </div>
          <button
            onClick={onDetail}
            className="w-full bg-transparent border-2 border-med/12 text-med py-2.5 rounded-full text-sm font-semibold hover:bg-med hover:text-white transition-all"
          >
            مشاهده جزئیات تخصصی
          </button>
        </div>
      </div>
    </ScrollReveal>
  )
}

export default function Products() {
  const { showToast } = useToast()

  return (
    <section id="products" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* ... heading etc. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {products.map((p, i) => (
            <ProductCard
              key={p.name}
              product={p}
              index={i}
              onDetail={() => showToast(`جزئیات تخصصی «${p.name}» به‌زودی اضافه می‌شود`)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}