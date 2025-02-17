---
title: Motion
---

```css
@theme {
  --ease-fluid: cubic-bezier(0.3, 0, 0, 1);
  --ease-snappy: cubic-bezier(0.2, 0, 0, 1);

  --animate-marquee: marquee 3s linear infinite;

  @keyframes marquee {
    to {
      transform: translateY(-50%);
    }
  }
}
```
