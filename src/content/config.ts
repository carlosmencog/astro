import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string().optional(),
    thumbnail: z.string().optional(),
    body: z.string().optional(),
  }),
});

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    body: z.string().optional(),
  }),
});

export const collections = { blog, pages };
