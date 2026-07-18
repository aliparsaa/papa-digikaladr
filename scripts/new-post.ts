import fs from "node:fs";
import path from "node:path";

const title = process.argv[2];

if (!title) {
  console.error('Please provide a title. Example: bun run new:post "My Article"');
  process.exit(1);
}

const slug = title
  .trim()
  .toLowerCase()
  .replace(/[^\w\s-]/g, "")
  .replace(/\s+/g, "-")
  .replace(/-+/g, "-");

const date = new Date().toISOString().split("T")[0];

const content = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
excerpt: "توضیحات کوتاه مقاله..."
tags: []
published: true
author: ""
seoTitle: ""
seoDescription: ""
---

# ${title}

محتوای مقاله اینجا قرار می‌گیرد.
`;

const filePath = path.join(process.cwd(), "content/articles", `${slug}.mdx`);

fs.mkdirSync(path.dirname(filePath), { recursive: true });
fs.writeFileSync(filePath, content, "utf8");

console.log(`✅ Created: ${filePath}`);
