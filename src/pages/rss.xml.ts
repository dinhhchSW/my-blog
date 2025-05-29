import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
  const blogPosts = await getCollection('blog');

  return rss({
    title: 'My Astro Blog',
    description: 'Các bài viết mới nhất từ blog của tôi',
    site: import.meta.env.SITE,
    items: blogPosts.map(post => ({
      title: post.data.title,
      link: `/blog/${post.id}`,
      pubDate: post.data.pubDate,
      description: post.data.description,
    })),
  });
}
