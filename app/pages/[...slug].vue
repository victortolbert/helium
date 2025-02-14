<!--  A catch-all page to fetch contents based on route path. -->
<script lang="ts" setup>
import type { ContentNavigationItem } from '@nuxt/content'
import { findPageBreadcrumb, findPageHeadline, mapContentNavigation } from '#ui-pro/utils/content'

defineProps<{
  title?: string
}>()

definePageMeta({
  title: 'Catch all page',
})

const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

function enableCustomLayout() {
  setPageLayout('catalog')
}

const open = ref(false)

defineShortcuts({
  o: () => open.value = !open.value,
})

const menu = ref([{
  label: 'Profile',
  icon: 'i-lucide-user',
}, {
  label: 'Billing',
  icon: 'i-lucide-credit-card',
}, {
  label: 'Settings',
  icon: 'i-lucide-cog',
}])

const items = ref([
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Guide',
    to: '/guide',
  },
  {
    label: 'Theme',
    to: '/theme',
  },
  {
    label: 'Icons',
    to: '/icons',
  },
  {
    label: 'Templates',
    to: '/templates',
  },
  {
    label: 'Layout',
    to: '/layout',
  },
  {
    label: 'Components',
    to: '/components',
  },
  {
    label: 'Examples',
    to: '/image-compare',
  },
  // {
  //   label: 'Typography',
  //   to: '/typography',
  // },
  // {
  //   label: 'Blog',
  //   to: '/blog',
  // },
])
// Find a single issue
// const { data: issue } = await useAsyncData('issues', () => {
//   return queryCollection('issues')
//     .path('issues')
//     .first()
// })

// Get all issues
const { data: issues } = await useAsyncData('issues', () => {
  return queryCollection('issues')
    .order('summary', 'ASC')
    .all()
})

const { data: issue } = await useAsyncData('issue', () => {
  return queryCollection('issues')
    .where('stem', '=', 'issues/458')
    .first()
})

const headline = computed(() => findPageHeadline(page.value))
const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
const breadcrumb = computed(() => mapContentNavigation(findPageBreadcrumb(navigation?.value, page.value)).map(({ icon, ...link }) => link))

console.log({ headline, navigation, breadcrumb })
</script>

<template>
  <UPage v-if="page" :title="page.title" class="w-full mt-8">
    <UPageHeader v-bind="page" :headline="headline">
      <template #headline>
        <UBreadcrumb :items="breadcrumb">
          <!-- <template #separator>
                <span class="mx-2 text-[var(--ui-text-muted)]">•</span>
              </template> -->
        </UBreadcrumb>
      </template>
    </UPageHeader>

    <UPageBody>
      <ContentRenderer v-if="page.body" :value="page" />

      <USeparator v-if="surround?.filter(Boolean).length" />

      <UContentSurround :surround="(surround as any)" />
    </UPageBody>

    <template v-if="page?.body?.toc?.links?.length" #right>
      <UContentToc :links="page.body.toc.links" />
    </template>
  </UPage>
</template>
