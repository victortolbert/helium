<template>
  <div class="${state.componentName.toLowerCase()}">
    ${state.props
        .map(prop =>
            `<div class="${prop.name.toLowerCase()}">{{ ${prop.name} }}</div>`
        )
        .join('\n    ')}
  </div>
</template>

<script>
export default {
  name: '${state.componentName}',
  props: {
    ${state.props
        .map(prop =>
            `${prop.name}: {
      type: ${prop.type},
      required: ${prop.required}
    }`
        )
        .join(',\n    ')}
  }
}
</script>

<style scoped>
.${state.componentName.toLowerCase()} {
  /* Add your styles here */
}
</style>
