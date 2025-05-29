import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    categories: z.array(z.string()).optional(),
    // slug là auto từ file name nên không cần định nghĩa ở đây
  }),
});

export const collections = { blog };
