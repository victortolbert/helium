<script setup lang="ts">
interface Props {
  icon: string
  title: string
  description: string
}

const props = withDefaults(defineProps<Props>(), {
  icon: 'i-skyrizi-shield',
  title: 'Lorem ipsum',
  description:
    'Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.',
})
</script>

<template>
  <div class="sm:flex">
    <div class="mb-4 shrink-0 sm:mr-4 sm:mb-0">
      <UIcon :name="icon" class="size-12" />
    </div>

    <div>
      <h4 class="font-bold text-black uppercase" v-html="title" />
      <p
        class="text-sm leading-none font-semibold text-skyrizi-blue"
        v-html="description"
      />
    </div>
  </div>
</template>
