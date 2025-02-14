---
title: aspect-ratio
description: Aspect ratio utilities like `aspect-video`
---


<div class="flex gap-8 overflow-x-scroll">

:placeholder{class="shrink-0 relative h-80 aspect-square flex flex-col before:absolute before:bottom-2 before:right-2 before:bg-white/50 before:font-bold before:text-xs before:text-black before:px-3 before:py-1 before:z-1 before:block before:border before:border-red-800 before:rounded before:content-[attr(data-component)]" data-component="--aspect-square"}

:placeholder{class="shrink-0 relative h-80 aspect-classic-film flex flex-col before:absolute before:bottom-2 before:right-2 before:bg-white/50 before:font-bold before:text-xs before:text-black before:px-3 before:py-1 before:z-1 before:block before:border before:border-red-800 before:rounded before:content-[attr(data-component)]" data-component="--aspect-classic-film"}

:placeholder{class="shrink-0 relative h-80 aspect-standard-monitor flex flex-col before:absolute before:bottom-2 before:right-2 before:bg-white/50 before:font-bold before:text-xs before:text-black before:px-3 before:py-1 before:z-1 before:block before:border before:border-red-800 before:rounded before:content-[attr(data-component)]" data-component="--aspect-standard-monitor"}

:placeholder{class="shrink-0 relative h-80 aspect-hd-video flex flex-col before:absolute before:bottom-2 before:right-2 before:bg-white/50 before:font-bold before:text-xs before:text-black before:px-3 before:py-1 before:z-1 before:block before:border before:border-red-800 before:rounded before:content-[attr(data-component)]" data-component="--aspect-hd-video"}

:placeholder{class="shrink-0 relative h-80 aspect-ipad-mini flex flex-col before:absolute before:bottom-2 before:right-2 before:bg-white/50 before:font-bold before:text-xs before:text-black before:px-3 before:py-1 before:z-1 before:block before:border before:border-red-800 before:rounded before:content-[attr(data-component)]" data-component="--aspect-ipad-mini"}

:placeholder{class="shrink-0 relative h-80 aspect-ipad-air flex flex-col before:absolute before:bottom-2 before:right-2 before:bg-white/50 before:font-bold before:text-xs before:text-black before:px-3 before:py-1 before:z-1 before:block before:border before:border-red-800 before:rounded before:content-[attr(data-component)]" data-component="--aspect-ipad-air"}

:placeholder{class="shrink-0 relative h-80 aspect-ipad-pro flex flex-col before:absolute before:bottom-2 before:right-2 before:bg-white/50 before:font-bold before:text-xs before:text-black before:px-3 before:py-1 before:z-1 before:block before:border before:border-red-800 before:rounded before:content-[attr(data-component)]" data-component="--aspect-ipad-pro"}

:placeholder{class="shrink-0 relative h-80 aspect-iphone flex flex-col before:absolute before:bottom-2 before:right-2 before:bg-white/50 before:font-bold before:text-xs before:text-black before:px-3 before:py-1 before:z-1 before:block before:border before:border-red-800 before:rounded before:content-[attr(data-component)]" data-component="--aspect-iphone"}

</div>

```css [aspect.css]
@theme {
  --aspect-iphone: 19.5 / 9;
  --aspect-ipad-pro: 4 / 3;
  --aspect-ipad-air: 23 / 16;
  --aspect-ipad-mini: 3 / 2;
  --aspect-hd-video: 16 / 9;
  --aspect-standard-monitor: 4 / 3;
  --aspect-classic-film: 3 / 2;
  --aspect-square: 1 / 1;
}
```
