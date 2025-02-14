<script lang="ts" setup>
//
interface BitBucketLinkProps {
  repo?: string
  branch?: string
  path?: string
  summary?: string
}

withDefaults(defineProps<BitBucketLinkProps>(), {
  repo: 'abbvieadmp/nova-ds',
  branch: 'develop',
  path: 'figma_plugin/README.md',
  summary: 'Jira',
})
</script>

<template>
  <ULink :to="`https://bitbucket.org/${repo}/src/${branch}/${path}?mode=edit&at=${branch}`">
    <slot>{{ summary }}</slot>
  </ULink>
</template>
