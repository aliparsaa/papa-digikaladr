import { getAllPublishedPosts } from "@/lib/posts";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = getAllPublishedPosts();
  const baseUrl = "https://digikaladr.ir";

  const postUrls = posts
    .map((post) => {
      // بررسی معتبر بودن تاریخ
      const date = new Date(post.date);
      const isValidDate = !isNaN(date.getTime());

      return {
        url: `${baseUrl}/articles/${post.slug}`,
        // اگر تاریخ نامعتبر بود، تاریخ امروز را جایگزین می‌کند تا گوگل خطا ندهد
        lastModified: isValidDate ? date : new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      };
    });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    ...postUrls,
  ];
}
