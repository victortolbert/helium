<script lang="ts" setup>
const route = useRoute()
const { data: post } = await useAsyncData(() => {
  return queryCollection('blog').path(route.path).first()
})
console.log({ route, post })
</script>

<template>
  <div class="prose">
    <nuxt-link to="/blog">
      <small>« Back </small>
    </nuxt-link>

    <h1>{{ post?.title }}</h1>

    <ContentRenderer v-if="post" :value="post" />
  </div>
</template>
