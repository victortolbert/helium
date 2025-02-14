<template>
  <div>
    <div class="relative flex justify-between">
      <SlideLogo class="text-neutral-200 hover:text-white" />
      <section
        class="absolute -top-4 -right-4 hidden h-16 w-160 rounded-sm border border-neutral-100 bg-white p-1 shadow"
      >
        <div class="h-full overflow-y-scroll text-neutral-200">
          SKYRIZI is contraindicated in patients with a history of serious
          hypersensitivity reaction to risankizumab-rzaa or any of its
          excipients. Serious hypersensitivity reactions, including anaphylaxis,
          have been reported with use of SKYRIZI. If a serious hypersensitivity
          reaction occurs, discontinue SKYRIZI and initiate appropriate therapy
          immediately. SKYRIZI may increase the risk of infection. Instruct
          patients to report signs or symptoms of clinically important infection
          during treatment. Should such an infection occur, discontinue SKYRIZI
          until infection resolves. Evaluate patients for tuberculosis infection
          prior to initiating treatment with SKYRIZI. Avoid use of live vaccines
          in SKYRIZI patients.
        </div>
      </section>
    </div>

    <div class="mt-8">
      <div
        class="hidden text-center text-2xl font-bold text-neutral-200 uppercase"
      >
        <span>For Your Ps & PsA SKYRIZI Patients:</span>
        <span>Preferred NATIONAL Coverage & Exceptional Support</span>
      </div>

      <div
        class="flex items-center justify-center text-center text-2xl text-neutral-50 uppercase"
      >
        <div>SKYRIZI Commercial Access</div>
        <UIcon name="i-ph-line-vertical" />
        <div class="font-bold drop-shadow-lg">
          Across Local Payers
        </div>
      </div>
    </div>

    <UCard class="mt-4 h-108">
      <SkyriziDermAccessTabs />
    </UCard>

    <!-- <SkyriziSearchInput /> -->
    <!-- <SubscribeForm /> -->
  </div>
</template>
