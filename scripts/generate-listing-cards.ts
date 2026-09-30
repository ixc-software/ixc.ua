/**
 * Rebuild homepage listing cards from the full news and blog sources.
 * Invoked by `npm run dev`, `npm run build`, and GitHub Actions — not by hand.
 */
import { writeFileSync } from 'node:fs';
import newsData from '../src/newsData.ts';
import { blogPosts } from '../src/content/blogPosts.ts';

const langs = ['en', 'ru', 'uk', 'zh'] as const;
const banner = `/* Listing fields only. Article bodies stay in the page chunks.
   Written by npm run generate:listing-cards (dev, build, and GitHub Actions).
*/\n`;

const newsCards = newsData.map((n) => ({
  slug: n.slug,
  date: n.date,
  link: n.link,
  image: n.image,
  local_image: n.local_image,
  en: { title: n.en?.title || '' },
  ru: { title: n.ru?.title || n.en?.title || '' },
  uk: { title: n.uk?.title || n.en?.title || '' },
  zh: { title: n.zh?.title || n.en?.title || '' },
}));

const blogCards = blogPosts.map((p) => {
  const card: Record<string, unknown> = {
    slug: p.slug,
    date: p.date,
    author: p.author,
    category: p.category,
    tags: p.tags,
    image: p.image,
    localImage: p.localImage,
  };
  if (p.path) card.path = p.path;
  if (p.updated) card.updated = p.updated;
  if (p.imageObjectFit) card.imageObjectFit = p.imageObjectFit;
  for (const lang of langs) {
    const loc = p[lang];
    card[lang] = { title: loc.title, description: loc.description, excerpt: loc.excerpt };
  }
  return card;
});

writeFileSync(
  'src/content/newsCards.ts',
  `${banner}export type NewsCard = {
  slug: string
  date: string
  link?: string
  image?: string
  local_image?: string
  en: { title: string }
  ru: { title: string }
  uk: { title: string }
  zh: { title: string }
}

export const newsCards: NewsCard[] = ${JSON.stringify(newsCards, null, 2)}
`
);

writeFileSync(
  'src/content/blogCards.ts',
  `${banner}import type { Language } from '../i18n/translations'

export type BlogCardLocale = { title: string; description: string; excerpt: string }

export type BlogCard = {
  slug: string
  path?: string
  date: string
  updated?: string
  author: string
  category: string
  tags: string[]
  image: string
  localImage: string
  imageObjectFit?: 'cover' | 'contain'
  en: BlogCardLocale
  ru: BlogCardLocale
  uk: BlogCardLocale
  zh: BlogCardLocale
}

export const blogCards: BlogCard[] = ${JSON.stringify(blogCards, null, 2)}

export function getPostPath(post: Pick<BlogCard, 'slug' | 'path'>): string {
  return post.path ?? \`/blog/\${post.slug}\`
}

export function getLocalizedBlogCard(post: BlogCard, lang: Language) {
  const loc = post[lang] ?? post.en
  return {
    slug: post.slug,
    date: post.date,
    updated: post.updated,
    author: post.author,
    category: post.category,
    tags: post.tags,
    image: post.image,
    localImage: post.localImage,
    imageObjectFit: post.imageObjectFit,
    ...loc,
  }
}
`
);

console.log(`Wrote ${newsCards.length} news cards and ${blogCards.length} blog cards`);
