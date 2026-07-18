import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostSlugs } from "@/lib/posts";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="prose mx-auto py-10">
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      {post.excerpt ? <p>{post.excerpt}</p> : null}
      <MDXRemote source={post.content} />
    </article>
  );
}
