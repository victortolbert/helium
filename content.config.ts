import { defineCollection, defineContentConfig, z } from '@nuxt/content'

// export const collections = {
// }

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/**',
      // Define custom schema for docs collection
      schema: z.object({
        tags: z.array(z.string()),
        image: z.string(),
        date: z.date(),
      }),
    }),
    components: defineCollection({
      source: 'components/**.yml',
      type: 'data',
      schema: z.object({
        name: z.string(),
        thumbnail: z.string(),
        url: z.string(),
      }),
    }),
    authors: defineCollection({
      type: 'data',
      source: 'authors/**.yml',
      schema: z.object({
        name: z.string(),
        avatar: z.string(),
        url: z.string(),
      }),
    }),
    people: defineCollection({
      type: 'data',
      source: 'people/**.json',
      schema: z.object({
        name: z.string(),
        data: z.object({
          name: z.string(),
          email: z.string(),
          image: z.string(),
        }),
      }),
    }),
  },
})
