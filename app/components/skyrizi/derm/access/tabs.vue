<script setup lang="ts">
const count = ref(0)

const items = ref([
  {
    label: 'Overview',
    content: 'This is the overview content.',
    slot: 'overview',
    cards: [
      {
        icon: 'i-skyrizi-affordability',
        title: 'Affordability',
        description:
          'Eligible commercially insured patients may pay as little as $5 per quarterly dose<sup>§</sup>',
      },
      {
        icon: 'i-skyrizi-support',
        title: 'One-to-one support',
        description:
          'Insurance Specialists to help navigate insurance and Nurse Ambassadors<sub>||</sub> to help patients start and stay on therapy',
      },
      {
        icon: 'i-skyrizi-eligibility',
        title: 'Bridge Program Eligibility',
        description:
          'No cost-product available for eligible patients in the event of a delay in coverage due to step-therapy requirement<sup>¶</sup>',
      },
    ],
  },
  {
    label: 'National',
    content: 'This is the national content.',
    slot: 'national',
  },
  {
    label: 'Local',
    content: 'This is the local content.',
    slot: 'local',
  },
])
</script>

<template>
  <UTabs
    :items
    class="w-full"
    :ui="{
      root: '-mt-6',
      list: 'bg-skyrizi-blue text-white max-w-sm',
      label: 'font-bold uppercase text-white',
    }"
  >
    <template #overview="{ item }">
      <section>
        <SkyriziDermAccessTabOverview :cards="item.cards" />
      </section>
    </template>

    <template #national>
      <div class="mx-4">
        <SkyriziDermAccessTabNational />
      </div>
    </template>

    <template #local>
      <SkyriziDermAccessTabLocal />
    </template>
  </UTabs>
</template>
