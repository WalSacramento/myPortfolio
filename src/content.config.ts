import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Posts do blog: arquivos Markdown em src/content/blog/
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Skills e ferramentas do meu fluxo, versionadas como Markdown em src/content/skills/
const skills = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/skills' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    category: z.string(),
    level: z.enum(['iniciante', 'intermediario', 'avancado']).default('intermediario'),
    order: z.number().default(100),
  }),
});

export const collections = { blog, skills };
