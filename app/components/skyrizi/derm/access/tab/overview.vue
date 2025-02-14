<script setup lang="ts">
interface Card {
  icon: string
  title: string
  description: string
}

interface Props {
  cards?: Card[]
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div>
    <!-- <Placeholder class="h-44" /> -->

    <div
      class="-mt-24 mb-16 flex items-center justify-center text-center text-2xl text-white uppercase"
    >
      <div>SKYRIZI Commercial Access</div>
      <UIcon name="i-ph-line-vertical" />
      <div class="font-bold drop-shadow-lg">
        Across Local Payers
      </div>
    </div>

    <div
      class="bg-orgin-border -mt-7 -mr-px -ml-px grid grid-cols-2 gap-4 rounded-t-lg bg-white"
      style="
        background-image: url(&quot;/content/dam/skyrizihcpivy/isa/derm/skyrizi/access/baseball-hero.png&quot;);
        background-repeat: no-repeat;
        background-size: contain;
      "
    >
      <div class="mt-4 mb-4 ml-32 flex">
        <CircularChart :value="99" />
        <CircularChart :value="97" />
      </div>
      <div class="m-16 text-black">
        <h4 class="text-center font-bold uppercase">
          Preferred* coverage means SKYRIZI is AVAILABLE:
        </h4>

        <ul class="ml-4 list-outside list-disc">
          <li>With no advanced systemic failure required<sup>‡</sup></li>
          <li>At the lowest branded copay/coinsurance tier</li>
        </ul>

        <p class="text-sm">
          National Commercial and Medicare Part D Formulary coverage under the
          pharmacy benefit as of May 2023.
        </p>
      </div>
    </div>

    <section class="-mr-px -ml-px bg-blue-50 text-black">
      <div
        class="flex items-center justify-center pt-4 text-2xl font-bold text-skyrizi-blue uppercase"
      >
        <span class="flex items-center">
          <span>Encourage your patients to enroll in</span>
          <LogoSkyriziComplete />
        </span>
      </div>
      <div v-if="cards" class="mt-4 grid grid-cols-3 gap-4 px-8">
        <MediaObject
          v-for="card in cards"
          :key="card.title"
          :icon="card.icon"
          :title="card.title"
          :description="card.description"
        />
      </div>
      <div class="mt-4 px-8 text-xs leading-none">
        <p>
          <sub>‡</sub>Advanced systemics such as phosphodiesterase-4 (PDE4)
          inhibitors, Janus kinase (JAK) inhibitors, or biologics.
        </p>
        <p>
          <sub>||</sub>Nurse Ambassadors are provided by AbbVie and do not
          provide medical advice or work under the direction of the prescribing
          health care professional (HCP). They are trained to direct patients to
          speak with their HCP about any treatment-related questions, including
          further referrals.
        </p>
      </div>
    </section>
  </div>
</template>
