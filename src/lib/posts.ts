// src/lib/posts.ts
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

// ─── Schema & Types ────────────────────────────────────────
const PostMetaSchema = z.object({
  title: z.string(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be YYYY-MM-DD"),
  excerpt: z.string(),
  tags: z.array(z.string()).default([]),
  category: z.string().default("General"), // 👈 ادغام حرفه‌ای دسته‌بندی با مقدار پیش‌فرض زاد
  published: z.boolean().default(true),
  coverImage: z.string().optional(),
  author: z.string().optional(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
});

export type PostMeta = z.infer<typeof PostMetaSchema>;
export type Post = PostMeta & { 
  slug: string; 
  content: string; 
  readingTime: string; 
};

// ─── Helpers ──────────────────────────────────────────────
const postsDirectory = path.join(process.cwd(), "content/articles");

function ensurePostsDirectory(): void {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

// ─── Public API ────────────────────────────────────────────
export function getPostSlugs(): string[] {
  ensurePostsDirectory();
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.mdx?$/, ""));
}

export function getPostBySlug(slug: string): Post | null {
  ensurePostsDirectory();

  const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
  const mdPath = path.join(postsDirectory, `${slug}.md`);
  const fullPath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null;

  if (!fullPath) return null;

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // بررسی و اعتبارسنجی فرانت‌متر با Zod (به همراه اعمال خودکار دسته‌بندی پیش‌فرض)
    const parsed = PostMetaSchema.parse(data);

    return {
      ...parsed,
      slug, // استفاده مستقیم از نام فایل به عنوان Slug برای پایداری آدرس‌ها
      content,
      readingTime: calculateReadingTime(content),
    };
  } catch (error) {
    console.error(`Error parsing frontmatter in post "${slug}":`, error);
    return null;
  }
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts: Post[] = [];

  for (const slug of slugs) {
    try {
      const post = getPostBySlug(slug);
      if (post && post.published) {
        posts.push(post);
      }
    } catch (e) {
      console.error(`Error loading post "${slug}":`, e);
    }
  }

  // مرتب‌سازی نزولی بر اساس تاریخ انتشار
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getAllPublishedPosts(): Post[] {
  return getAllPosts();
}
