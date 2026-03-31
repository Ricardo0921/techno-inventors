import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleEn: z.string().optional(),
    description: z.string(),
    descriptionEn: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.enum(['noticias', 'programas', 'competencias', 'comunidad', 'tecnología']).default('noticias'),
    categoryEn: z.string().optional(),
    author: z.string().default('Techno Inventors'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
