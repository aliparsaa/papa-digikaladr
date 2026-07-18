import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "جوانسازی | Steigen",
  description:
    "با خدمات جوانسازی، شادابی پوست، بهبود کیفیت چهره و تجربه‌های مدرن زیبایی در Steigen آشنا شوید.",
};

export default function RejuvenationPage() {
  const allPosts = getAllPosts();
  const relatedArticles = allPosts
    .filter((post) => post.category === "Rejuvenation")
    .slice(0, 3);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-16">
        <span className="mb-4 inline-block rounded-full bg-teal-400/10 px-4 py-2 text-sm text-teal-200">
          Steigen / Rejuvenation
        </span>

        <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
          جوانسازی
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
          جوانسازی در Steigen به عنوان یک تجربه مدرن و حرفه‌ای معرفی می‌شود که
          بر کیفیت پوست، طراوت چهره و هماهنگی زیبایی‌شناسانه تمرکز دارد.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-2xl font-semibold text-white">
            نکات کلیدی جوانسازی
          </h2>

          <ul className="space-y-4 text-slate-300">
            {[
              "تمرکز بر شادابی پوست و بازگرداندن درخشندگی طبیعی چهره",
              "روایت حرفه‌ای و لوکس برای ارائه خدمات زیبایی",
              "ساختار آموزشی شفاف برای افزایش اعتماد مخاطب",
              "امکان توسعه صفحه برای سئو، سوالات متداول و محتوای تکمیلی",
            ].map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-teal-300">✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 leading-8 text-slate-400">
            این صفحه در ادامه می‌تواند با بخش‌هایی مانند مزایا، روند درمان،
            سوالات متداول، مراقبت‌های قبل و بعد، و بلاک‌های دعوت به اقدام تکمیل
            شود.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-linear-to-b from-teal-400/10 to-blue-400/10 p-8">
          <h3 className="mb-6 text-xl font-semibold text-white">
            دسترسی سریع
          </h3>

          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="rounded-xl bg-white/5 px-4 py-3 text-white transition hover:bg-white/10"
            >
              بازگشت به صفحه اصلی
            </Link>

            <Link
              href="/threadlift"
              className="rounded-xl bg-white/5 px-4 py-3 text-white transition hover:bg-white/10"
            >
              مشاهده صفحه Threadlift
            </Link>
          </div>
        </div>
      </div>

      {relatedArticles.length > 0 && (
        <div className="mt-16">
          <h3 className="mb-8 text-2xl font-semibold text-white">
            مقالات مرتبط
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedArticles.map((post) => (
              <Link
                key={post.slug}
                href={`/articles/${post.slug}`}
                className="group rounded-2xl border border-white/10 bg-white/2 p-6 transition hover:border-teal-400/40 hover:bg-white/4"
              >
                <h4 className="text-lg font-bold text-white transition group-hover:text-teal-200">
                  {post.title}
                </h4>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
