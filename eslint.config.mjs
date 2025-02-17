// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    ignores: [
      '*.min.js',
      '*.map',
      '*.snap',
      '**/build/**',
      '**/dist/**',
      '**/.nuxt/**',
      '**/.output/**',
      '**/CONTRIBUTING.md',
      '**/3.contribution.md',
    ],
  },
).overrideRules({
  'vue/max-attributes-per-line': ['warn', { singleline: 3 }],
  'vue/no-unused-vars': 'off',
  'vue/require-prop-types': 'off',
  'vue/multi-word-component-names': 'off',
  'vue/no-v-html': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-unused-vars': 'off',
  '@typescript-eslint/no-empty-object-type': 'off',
})
