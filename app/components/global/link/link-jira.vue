<script lang="ts" setup>
interface JiraLinkProps {
  id?: string
  summary?: string
  group?: string
}

withDefaults(defineProps<JiraLinkProps>(), {
  id: '574',
  group: 'ISAPP',
  summary: 'Jira',
})
</script>

<template>
  <ULink :to="`https://btsjira.abbvie.com/browse/${group}-${id}`">
    <slot>{{ summary }}</slot>
  </ULink>
</template>
