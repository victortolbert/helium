const generateID = () => Math.floor(Math.random() * 1000)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('id', {
    getSSRProps() {
      const id = generateID()
      console.log('Server id', id)
      return { id }
    },
  })
})
