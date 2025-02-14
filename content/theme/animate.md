---
title: Animation
description: Animation utilities like `animate-spin`
---


#### `.animate-spin`

<div class="flex gap-8 flex-wrap">

:u-icon{ class="size-8" name="i-ph-bowling-ball-duotone" .animate-spin}

:u-icon{ class="size-8" name="i-ph-circle-dashed-duotone" .animate-spin}

:u-icon{ class="size-8" name="i-ph-arrow-clockwise-duotone" .animate-spin}

:u-icon{ class="size-8" name="i-ph-arrows-clockwise-duotone" .animate-spin}

:u-icon{ class="size-8" name="i-ph-atom-duotone" .animate-spin}

:u-icon{ class="size-8" name="i-ph-circle-notch-duotone" .animate-spin}

:u-icon{ class="size-8" name="i-ph-disc-duotone" .animate-spin}

:u-icon{ class="size-8" name="i-ph-yin-yang-duotone" .animate-spin}

:u-icon{ class="size-8" name="i-ph-gear-fine-duotone" .animate-spin}

:u-icon{ class="size-8" name="i-ph-spinner-gap-duotone" .animate-spin}

:u-icon{ class="size-8" name="i-ph-spinner-duotone" .animate-spin}

:u-icon{ class="size-8" name="i-ph-gear-duotone" .animate-spin}

:u-icon{ class="size-8" name="i-ph-spinner-ball-duotone" .animate-spin}

:u-icon{ class="size-8" name="i-ph-sphere-duotone" .animate-spin}

</div>

---

#### `.animate-pulse`

:u-icon{ class="size-8" name="i-ph-steering-wheel-duotone" .animate-pulse}

---

#### `.animate-bounce`

:u-icon{ class="size-8" name="i-ph-arrow-fat-down-duotone" .animate-bounce}

:u-icon{ class="size-8" name="i-ph-caret-down-duotone" .animate-bounce}

:u-icon{ class="size-8" name="i-ph-arrow-circle-down-duotone" .animate-bounce}

:u-icon{ class="size-8" name="i-ph-basketball-duotone" .animate-bounce}

:u-icon{ class="size-8" name="i-ph-beach-ball-duotone" .animate-bounce}

---

#### `.animate-ping`

:u-icon{ class="size-4" name="i-ph-circle-duotone" .animate-ping}

#### Theme

```css
@theme {
  --animate-spin: spin 1s linear infinite;
  --animate-ping: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  --animate-bounce: bounce 1s infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes ping {
    75%,
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  @keyframes pulse {
    50% {
      opacity: 0.5;
    }
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: none;
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
}
```
