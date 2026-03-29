import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    body: z.string().optional(),
  }),
});

export const collections = { blog, pages };
