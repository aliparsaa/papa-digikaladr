import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts"; // برای نمایش مقالات مرتبط

export const metadata: Metadata = {
  title: "Threadlift | Steigen",
  description: "Learn about threadlift solutions at Steigen.",
};

export default function ThreadliftPage() {
  // گرفتن مقالات مرتبط (مثلاً مقالاتی که در دسته Threadlift هستند)
  const allPosts = getAllPosts();
  const relatedArticles = allPosts.filter(post => post.category === "Threadlift").slice(0, 3);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      {/* Header Section */}
      <div className="mb-16">
        <span className="mb-4 inline-block rounded-full bg-blue-900/30 px-4 py-2 text-sm text-blue-200">
          Steigen / Threadlift
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
          Threadlift
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
          Threadlift is a modern aesthetic approach focused on lifting support, 
          contour refinement, and a more youthful facial profile.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        
        {/* Left Column - Core Info */}
        <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-2xl font-semibold text-white">Core Presentation</h2>
          <ul className="space-y-4 text-slate-300">
            {[
              "Facial lifting support with elegant contour definition",
              "Structured patient communication and visual education",
              "Modern positioning for minimally invasive aesthetic care",
              "Premium branding for advanced medical-aesthetic services"
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-champagne">✦</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Navigation */}
        <div className="rounded-2xl border border-white/10 bg-linear-to-b from-blue-900/20 to-teal-900/10 p-8">
          <h3 className="mb-6 text-xl font-semibold text-white">Quick Navigation</h3>
          <div className="flex flex-col gap-4">
            <Link href="/" className="rounded-xl bg-white/5 px-4 py-3 text-white transition hover:bg-white/10">
              Back to Home
            </Link>
            <Link href="/rejuvenation" className="rounded-xl bg-white/5 px-4 py-3 text-white transition hover:bg-white/10">
              Go to Rejuvenation
            </Link>
          </div>
        </div>
      </div>

      {/* Dynamic Related Articles Section (جدید) */}
      {relatedArticles.length > 0 && (
        <div className="mt-16">
          <h3 className="mb-8 text-2xl font-semibold text-white">Related Articles</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {relatedArticles.map((post) => (
              <Link 
                key={post.slug} 
                href={`/articles/${post.slug}`}
                className="group rounded-2xl border border-white/10 p-6 transition hover:border-blue-500/50"
              >
                <h4 className="text-lg font-bold text-white group-hover:text-champagne">{post.title}</h4>
                <p className="mt-2 text-sm text-slate-400">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
