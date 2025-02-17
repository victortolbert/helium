---
title: AI
---

```ts
import { experimental_generateImage as generateImage } from 'ai'
import { replicate } from '@ai-sdk/replicate'

const { image } = await generateImage({
  model: replicate.image('black-forest-labs/flux-1.1-pro-ultra'),
  prompt: 'A futuristic cityscape at sunset',
})
```

----

```ts
import { experimental_generateImage as generateImage } from 'ai'
import { fireworks } from '@ai-sdk/fireworks'

const { image } = await generateImage({
  model: fireworks.image('accounts/fireworks/models/SSD-1B'),
  prompt: 'A futuristic cityscape at sunset',
})
```

----


```ts
const { image } = await generateImage({
  model: replicate.image('black-forest-labs/flux-1.1-pro-ultra'),
  prompt: 'A futuristic cityscape at sunset',
  size: "16:9",
  n: 3,
  seed: 0,
  providerOptions: {
    replicate: { style: 'realistic_image' },
  },
})
```
