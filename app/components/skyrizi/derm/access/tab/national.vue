<script setup lang="ts">
const count = ref(0)
// --color-skyrizi-blue: #00a3df;
// --color-skyrizi-plum: #b41955;
// --color-skyrizi-royal-blue: #004c97;
// --color-skyrizi-dark-navy-blue: #0e1d34;
// --color-skyrizi-mint-green: #6abc8d;
// --color-skyrizi-pine-green: #248a6b;
// --color-skyrizi-sandy-yellow: #f39200;
// --color-skyrizi-vermillion: #e84127;
// --color-skyrizi-fortify-green: #4dabb0;
// --color-skyrizi-motivate-blue: #0074bb;
// --color-skyrizi-advance-purple: #5f6dd1;
const items = ref([
  {
    label: 'Ps',
    slot: 'ps',
    status: {
      commercial: [
        {
          brand: 'Skyrizi',
          generic: 'risankizumab-rzaa',
          fillClass: 'bg-skyrizi',
          value: 99,
        },
        {
          brand: 'Humira®',
          generic: 'adalimumab',
          fillClass: 'bg-humira',
          value: 97,
        },
        {
          brand: 'Stelara®',
          generic: 'ustekinumab',
          fillClass: 'bg-stelara',
          value: 97,
        },
        {
          brand: 'Otezla®',
          generic: 'apremilast',
          fillClass: 'bg-otezla',
          value: 96,
        },
        {
          brand: 'Tremfya®',
          generic: 'guselkumab',
          fillClass: 'bg-tremfya',
          value: 95,
        },
        {
          brand: 'Enbrel®',
          generic: 'etanercept',
          fillClass: 'bg-enbrel',
          value: 78,
        },
        {
          brand: 'Taltz®',
          generic: 'ixekizumab',
          fillClass: 'bg-taltz',
          value: 62,
        },
        {
          brand: 'Cosentyx®',
          generic: 'secukinumab',
          fillClass: 'bg-cosentyx',
          value: 29,
        },
        {
          brand: 'Sotyktu™',
          generic: 'deucravac itinib',
          fillClass: 'bg-sotyktu',
          value: 23,
        },
        {
          brand: 'Cimzia®',
          generic: 'certolizumabpegol',
          fillClass: 'bg-cimzia',
          value: 13,
        },
      ],
      medicare: [
        {
          brand: 'Skyrizi',
          generic: 'risankizumab-rzaa',
          fillClass: 'bg-skyrizi',
          value: 97,
        },
        {
          brand: 'Humira®',
          generic: 'adalimumab',
          fillClass: 'bg-humira',
          value: 97,
        },
        {
          brand: 'Enbrel®',
          generic: 'etanercept',
          fillClass: 'bg-enbrel',
          value: 97,
        },
        {
          brand: 'Stelara®',
          generic: 'ustekinumab',
          fillClass: 'bg-stelara',
          value: 77,
        },
        {
          brand: 'Otezla®',
          generic: 'apremilast',
          fillClass: 'bg-otezla',
          value: 68,
        },
        {
          brand: 'Tremfya®',
          generic: 'guselkumab',
          fillClass: 'bg-tremfya',
          value: 51,
        },
        {
          brand: 'Cosentyx®',
          generic: 'secukinumab',
          fillClass: 'bg-cosentyx',
          value: 43,
        },
        {
          brand: 'Taltz®',
          generic: 'ixekizumab',
          fillClass: 'bg-taltz',
          value: 30,
        },
        {
          brand: 'Cimzia®',
          generic: 'certolizumabpegol',
          fillClass: 'bg-cimzia',
          value: 4,
        },
        {
          brand: 'Sotyktu™',
          generic: 'deucravac itinib',
          fillClass: 'bg-sotyktu',
          value: 1,
        },
      ],
    },
  },
  {
    label: 'PsA',
    slot: 'psa',
    status: {
      commercial: [
        {
          brand: 'Skyrizi',
          generic: 'risankizumab-rzaa',
          fillClass: 'bg-skyrizi',
          value: 99,
        },
        {
          brand: 'Humira®',
          generic: 'adalimumab',
          fillClass: 'bg-humira',
          value: 97,
        },
        {
          brand: 'Stelara®',
          generic: 'ustekinumab',
          fillClass: 'bg-stelara',
          value: 97,
        },
        {
          brand: 'Otezla®',
          generic: 'apremilast',
          fillClass: 'bg-otezla',
          value: 96,
        },
        {
          brand: 'Enbrel®',
          generic: 'etanercept',
          fillClass: 'bg-enbrel',
          value: 96,
        },
        {
          brand: 'Tremfya®',
          generic: 'guselkumab',
          fillClass: 'bg-tremfya',
          value: 95,
        },
        {
          brand: 'Cosentyx®',
          generic: 'secukinumab',
          fillClass: 'bg-cosentyx',
          value: 45,
        },
        {
          brand: 'Taltz®',
          generic: 'ixekizumab',
          fillClass: 'bg-taltz',
          value: 44,
        },
        {
          brand: 'Cimzia®',
          generic: 'certolizumabpegol',
          fillClass: 'bg-cimzia',
          value: 13,
        },
      ],
      medicare: [
        {
          brand: 'Skyrizi',
          generic: 'risankizumab-rzaa',
          fillClass: 'bg-skyrizi',
          value: 97,
        },
        {
          brand: 'Humira®',
          generic: 'adalimumab',
          fillClass: 'bg-humira',
          value: 97,
        },
        {
          brand: 'Enbrel®',
          generic: 'etanercept',
          fillClass: 'bg-enbrel',
          value: 97,
        },
        {
          brand: 'Stelara®',
          generic: 'ustekinumab',
          fillClass: 'bg-stelara',
          value: 77,
        },
        {
          brand: 'Otezla®',
          generic: 'apremilast',
          fillClass: 'bg-otezla',
          value: 68,
        },
        {
          brand: 'Tremfya®',
          generic: 'guselkumab',
          fillClass: 'bg-tremfya',
          value: 51,
        },
        {
          brand: 'Cosentyx®',
          generic: 'secukinumab',
          fillClass: 'bg-cosentyx',
          value: 43,
        },
        {
          brand: 'Taltz®',
          generic: 'ixekizumab',
          fillClass: 'bg-taltz',
          value: 30,
        },
        {
          brand: 'Cimzia®',
          generic: 'certolizumabpegol',
          fillClass: 'bg-cimzia',
          value: 4,
        },
      ],
    },
  },
])
</script>

<template>
  <div>
    <h2 class="mt-2 text-center text-2xl font-bold text-skyrizi-blue uppercase">
      PREFERRED FORMULARY STATUS UNDER THE PHARMACY BENEFIT as of December
      2023<sup class="ref-cue">2</sup><span class="asterisk ref-cue">*</span><sup class="par ref-cue">†</sup>
    </h2>
    <div class="mt-4 grid grid-cols-4 items-start gap-8">
      <div class="col-span-3">
        <UTabs
          orientation="vertical"
          variant="link"
          :items
          class="w-full"
          :ui="{ root: 'items-start', list: '' }"
        >
          <template #ps="{ item }">
            <div class="grid grid-cols-2 gap-8">
              <div class="grid gap-2">
                <div
                  v-for="status in item.status.commercial"
                  :key="status.brand"
                >
                  <div class="grid grid-cols-3 items-center">
                    <div class="col-span-1 grid text-xs leading-none">
                      <span class="font-semibold uppercase">{{
                        status.brand
                      }}</span>
                      <span class="whitespace-nowrap">({{ status.generic }})</span>
                    </div>
                    <div class="col-span-2">
                      <ProgressBar
                        :background-class="status.backgroundClass"
                        :fill-class="status.fillClass"
                        :value="status.value"
                        :max="100"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid gap-2">
                <div v-for="status in item.status.medicare" :key="status.brand">
                  <div class="grid grid-cols-3 items-center">
                    <div class="col-span-1 grid text-xs leading-none">
                      <span class="font-semibold uppercase">{{
                        status.brand
                      }}</span>
                      <span class="whitespace-nowrap">({{ status.generic }})</span>
                    </div>
                    <div class="col-span-2">
                      <ProgressBar
                        :background-class="status.backgroundClass"
                        :fill-class="status.fillClass"
                        :value="status.value"
                        :max="100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template #psa>
            <Placeholder class="h-86" />
          </template>
        </UTabs>
      </div>
      <div class="col-span-1">
        <div class="chart-txt grid gap-4 text-xs leading-3">
          <p>
            <strong>No conclusions regarding comparative safety or efficacy can be
              drawn from this information. Selection of a treatment regimen
              should be individualized for each patient based on factors
              including, but not limited to, product efficacy product safety
              profile, adverse events, dosage and administration, potential for
              drug interactions, patients' test results, and comorbid
              conditions.</strong>
          </p>
          <p>
            <strong>Most national and regional health plans may not approve
              non-preferred products</strong>
            for patients who have shown clinical stability solely through the
            use of samples or other free goods.
          </p>
          <p>
            <strong>The products listed here are not pharmaceutically equivalent or
              bioequivalent. They differ with respect to active and inactive
              ingredients, strength, dosage, indications, clinical efficacy,
              clinical safety, and line of therapy.</strong>
          </p>
          <p>
            <span class="purple">STELARA</span> and
            <span class="green">CIMZIA</span> are available as products on
            medical benefit plans.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
