import jQuery from 'jquery'

export default defineNuxtPlugin((nuxtApp) => {
  window.$ = window.jQuery = jQuery
})
