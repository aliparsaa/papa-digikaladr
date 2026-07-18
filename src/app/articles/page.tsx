import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function ArticlesPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="mb-10 text-4xl font-bold text-white">Articles</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/articles/${post.slug}`}
            className="edu-card rounded-2xl p-6 transition hover:-translate-y-1"
          >
            <p className="mb-2 text-sm text-champagne">{post.category}</p>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              {post.title}
            </h2>
            <p className="text-sm text-slate-300">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
