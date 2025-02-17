---
title:  Linting
---

```js
// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
	// Your custom configs here
	{
		ignores: [
			"*.min.js",
			"*.map",
			"*.snap",
			"**/build/**",
			"**/dist/**",
			"**/.nuxt/**",
			"**/.output/**",
		],
	},
).prepend(
  // ...Prepend some flat configs in front
)
.overrideRules({
	"vue/max-attributes-per-line": ["warn", { singleline: 3 }],
});
```
