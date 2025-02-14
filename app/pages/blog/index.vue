<script lang="ts" setup>
// const { data: posts } = await useAsyncData('blog', () => queryCollection('posts').all())
const posts = ref([
  {
    title: 'Architecture & Engineering',
    description: 'Discover Nuxt Icon v1!',
    image: '/resources/images/product-card.png',
    date: '2024-11-25',
    path: '/blog/architecture-engineering',
  },
  {
    title: 'IVY',
    description: 'Nuxt 3.14 is out!',
    image: 'https://nuxt.com/assets/blog/v3.14.png',
    date: '2024-11-04',
    path: '/blog/ivy',

  },
  {
    title: 'NOVA Helium',
    description: 'Nuxt 3.14 is out!',
    image: 'https://nuxt.com/assets/blog/v3.14.png',
    date: '2024-11-04',
    path: '/blog/nova-helium',

  },
  {
    title: 'NOVA Nebula',
    description: 'Nuxt 3.13 is out!',
    image: 'https://nuxt.com/assets/blog/v3.13.png',
    date: '2024-08-22',
    path: '/blog/nova-nebula',
  },
])
</script>

<template>
  <UPage>
    <UPageHero title="Blog" />

    <UPageBody>
      <UContainer>
        <UBlogPosts>
          <UBlogPost
            v-for="(post, index) in posts"
            :key="index"
            v-bind="post"
            :to="post.path"
          />
        </UBlogPosts>
      </UContainer>
    </UPageBody>
  </UPage>
</template>
