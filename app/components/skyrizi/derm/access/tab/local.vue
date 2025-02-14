<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

interface InsurancePlan {
  id: string
  plan: string
}
const data = ref<InsurancePlan[]>([
  {
    id: '1',
    plan: 'UHC / Oxford Health Plans',
  },
  {
    id: '2',
    plan: 'OptumRx Premium',
  },
  {
    id: '3',
    plan: 'Excellus BlueCross BlueShield Medicare',
  },
  {
    id: '4',
    plan: 'Express Scripts - National Preferred Formulary',
  },
  {
    id: '5',
    plan: 'Excellus BlueCross BlueShield',
  },
  {
    id: '6',
    plan: 'EmblemHealth / HIP',
  },
  {
    id: '7',
    plan: 'Fidelis Care Health Exchange',
  },
])

const columns: TableColumn<InsurancePlan>[] = [
  {
    accessorKey: 'plan',
    header: 'Insurance Plan',
  },
]
</script>

<template>
  <UCard>
    <div class="grid grid-cols-5 gap-8">
      <div class="col-span-3">
        <span class="font-bold text-skyrizi-blue">TOP PLANS LISTING SKYRIZI AS PREFERRED FOR Ps IN YOUR COUNTY</span>
        <UTable :data="data" :columns="columns" class="flex-1" />
      </div>
      <div class="col-span-2">
        <UModal>
          <ULink
            as="button"
            class="block font-bold text-skyrizi-blue underline hover:text-skyrizi-blue/90 active:text-skyrizi-blue"
          >
            Change location
          </ULink>

          <template #content>
            <Placeholder class="m-4 h-48" />
          </template>
        </UModal>

        <section class="mt-4">
          <UButton
            class="block rounded-full bg-skyrizi-dark-blue bg-skyrizi-dark-blue/90 px-8"
            size="sm"
          >
            SEND LOCAL COVERAGE EMAIL
          </UButton>
        </section>

        <section class="mt-4 grid gap-4 text-sm leading-none">
          <p class="font-bold">
            Coverage requirements and benefits designs vary by payer and may
            change over time. Please consult with payers directly for the most
            current reimbursement policies. The health plans and/or pharmacy
            benefit managers listed here have not endorsed and are not
            affiliated with this material.
          </p>
          <p>
            SKYRIZI is on a preferred tier or otherwise has preferred status on
            the plan's formulary.
          </p>
          <p>
            Local can include national, regional, state, State Medicaid, and
            Managed Medicaid plans within the given geography.
          </p>
        </section>

        <section class="mt-4">
          <UButton
            class="block rounded-full bg-skyrizi-plum px-8 font-bold uppercase hover:bg-skyrizi-plum/90"
            size="sm"
          >
            HUMIRA (adalimumab) ACCESS
          </UButton>
        </section>
      </div>
    </div>
  </UCard>
</template>
