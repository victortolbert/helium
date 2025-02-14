// templates.js
export const templates = {
    htl: (state) => `<!--/*
  * ${state.componentName} Component
  * ${state.description}
  */-->
<div data-component="${state.componentName.toLowerCase()}"
     data-sly-use.model="com.example.models.${state.componentName}Model">
    ${state.props
        .map(prop =>
            `<div data-property="${prop.name.toLowerCase()}"
           \${model.${prop.name} @ context='html'}></div>`
        )
        .join('\n    ')}
</div>`,

    policy: (state) => `<?xml version="1.0" encoding="UTF-8"?>
<jcr:root xmlns:sling="http://sling.apache.org/jcr/sling/1.0"
          xmlns:jcr="http://www.jcp.org/jcr/1.0"
          jcr:primaryType="nt:unstructured"
          components="${state.componentName.toLowerCase()}">
    <jcr:content jcr:primaryType="nt:unstructured">
        ${state.props
            .map(prop =>
                `<${prop.name.toLowerCase()}
              jcr:primaryType="nt:unstructured"
              required="${prop.required}"
              type="${prop.type}"/>`
            )
            .join('\n        ')}
    </jcr:content>
</jcr:root>`,

    vue: (state) => `<template>
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
</style>`
};
