import { specsData } from "@/lib/data"
import ScrollReveal from "./ScrollReveal"

export default function SpecsTable() {
  return (
    <section id="specs" className="py-20 md:py-28 px-6 bg-slate-50/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-champagne text-xs font-semibold tracking-widest">مقایسه فنی</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h3 className="text-3xl md:text-4xl font-black text-med mt-3">PDO در مقابل PCL</h3>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-slate-custom mt-4 text-sm">مشخصات فنی دقیق برای انتخاب بهینه</p>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={0.3}>
          <div className="rounded-2xl overflow-hidden shadow-xl shadow-med/5 border border-slate-100">
            <table className="specs-table w-full">
              <thead>
                <tr>
                  <th className="py-4 px-6 text-right text-sm bg-med text-champagne font-semibold">ویژگی</th>
                  <th className="py-4 px-6 text-center text-sm bg-med text-champagne font-semibold">PDO</th>
                  <th className="py-4 px-6 text-center text-sm bg-med text-champagne font-semibold">PCL</th>
                </tr>
              </thead>
              <tbody>
                {specsData.map((spec, idx) => (
                  <tr key={idx} className="transition-colors hover:bg-champagne/5">
                    <td className="py-4 px-6 text-right text-sm font-medium text-med">{spec.feature}</td>
                    <td className="py-4 px-6 text-center text-sm text-slate-custom">{spec.pdo}</td>
                    <td className="py-4 px-6 text-center text-sm text-slate-custom">{spec.pcl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}