export class TemplateManager {
    constructor() {
        this.templates = new Map();
        this.cache = new Map();
        this.errors = [];
        this.loadingPromises = new Map();
    }

    // Define methods using class method syntax instead of prototype
    registerTemplate = (name, { path, type, validator }) => {
        if (this.templates.has(name)) {
            throw new Error(`Template "${name}" already registered`);
        }

        this.templates.set(name, {
            path,
            type,
            validator: validator || (() => true),
            loaded: false,
        });
    }

    validateTemplateData(name, data) {
      const template = this.templates.get(name)
      if (!template) {
          throw new Error(`Template "${name}" not found`)
      }
      const isValid = template.validator(data)
      if (!isValid) {
          console.log('Template validation failed:', {
              template: name,
              data: JSON.stringify(data, null, 2)
          })
      }
      return isValid
  }

  // Load template with caching and error handling
  async loadTemplate(name) {
    if (!this.templates.has(name)) {
      throw new Error(`Template "${name}" not registered`)
    }

    // Return cached promise if loading is in progress
    if (this.loadingPromises.has(name)) {
      return this.loadingPromises.get(name)
    }

    // Return cached template if available
    if (this.cache.has(name)) {
      return this.cache.get(name)
    }

    const template = this.templates.get(name)
    const loadingPromise = (async () => {
      try {
        const response = await fetch(template.path)
        if (!response.ok) {
          throw new Error(`Failed to load template "${name}": ${response.statusText}`)
        }
        const content = await response.text()
        this.cache.set(name, content)
        template.loaded = true
        return content
      }
      catch (error) {
        this.errors.push({
          template: name,
          error: error.message,
          timestamp: new Date(),
        })
        throw error
      }
      finally {
        this.loadingPromises.delete(name)
      }
    })()

    this.loadingPromises.set(name, loadingPromise)
    return loadingPromise
  }

  // Load all registered templates
  async loadAllTemplates() {
    const loadPromises = Array.from(this.templates.keys()).map(name =>
      this.loadTemplate(name).catch(error => ({
        name,
        error,
      })),
    )

    const results = await Promise.allSettled(loadPromises)
    const failed = results
      .filter(result => result.status === 'rejected')
      .map(result => result.reason)

    if (failed.length > 0) {
      throw new Error(`Failed to load some templates: ${JSON.stringify(failed)}`)
    }
  }

  // Render template with error handling and data validation
  async renderTemplate(name, data) {
    try {
      if (!this.validateTemplateData(name, data)) {
        throw new Error(`Invalid data for template "${name}"`)
      }

      const template = await this.loadTemplate(name)
      // Using Function instead of eval for better security
      const templateFn = new Function('state', `return \`${template}\``)
      return templateFn(data)
    }
    catch (error) {
      this.errors.push({
        template: name,
        error: error.message,
        timestamp: new Date(),
        data,
      })
      throw error
    }
  }

  // Get template loading status
  getStatus() {
    return {
      registered: this.templates.size,
      loaded: Array.from(this.templates.values()).filter(t => t.loaded).length,
      cached: this.cache.size,
      errors: this.errors,
    }
  }

  // Clear cache for specific or all templates
  clearCache(name) {
    if (name) {
      this.cache.delete(name)
      return
    }
    this.cache.clear()
  }
}

// Example usage with the AEM generator
const templateValidators = {
    htl: (data) => {
        console.log('HTL Validator received:', data);

        // Check each required property
        const checks = {
            hasComponentName: Boolean(data?.componentName),
            hasProps: Array.isArray(data?.props),
            validProps: data?.props?.every(prop => prop.name || prop.type)
        };

        console.log('Validation checks:', checks);

        return checks.hasComponentName && checks.hasProps;
    },
    policy: (data) => {
        return data.componentName && Array.isArray(data.props) // Allow empty props array
    },
    vue: (data) => {
        return data.componentName && Array.isArray(data.props) // Allow empty props array
    }
}

// Initialize and configure the template manager
function initializeTemplateManager() {
  const manager = new TemplateManager()

  // Register templates with validators
  manager.registerTemplate('htl', {
    path: './templates/htl.html',
    type: 'html',
    validator: templateValidators.htl,
  })

  manager.registerTemplate('policy', {
    path: './templates/policy.xml',
    type: 'xml',
    validator: templateValidators.policy,
  })

  manager.registerTemplate('vue', {
    path: './templates/vue.vue',
    type: 'vue',
    validator: templateValidators.vue,
  })

  return manager
}

// Integration with Vue application
function integateWithVue(app, templateManager) {
  app.config.globalProperties.$templates = templateManager

  // Add template rendering method
  app.mixin({
    methods: {
      async renderTemplate(name, data) {
        try {
          return await templateManager.renderTemplate(name, data)
        }
        catch (error) {
          console.error(`Template rendering error: ${error.message}`)
          throw error
        }
      },
    },
  })

  // Add template status computed property
  app.mixin({
    computed: {
      templateStatus() {
        return templateManager.getStatus()
      },
    },
  })
}

// Example implementation in main.js
export async function initializeApp() {
    const templateManager = initializeTemplateManager();

    try {
        await templateManager.loadAllTemplates();
        const { createApp, reactive, ref, watch } = window.Vue;

        const app = createApp({
            setup() {
              const state = reactive({
                  componentName: '',
                  description: '',
                  props: [{ name: '', type: 'String', required: false }],
                  currentTab: 'HTL Template'
              });

              const currentCode = ref('');

              // Debug state changes
              watch(() => ({...state}), (newState) => {
                  console.log('State updated:', newState);
              }, { deep: true });

              // Create update function with error handling
              const updateCode = async () => {
                  try {
                      const templateData = {
                          componentName: state.componentName,
                          description: state.description,
                          props: [...state.props],
                          currentTab: state.currentTab
                      };

                      console.log('Rendering template with data:', templateData);

                      switch (state.currentTab) {
                          case 'HTL Template':
                              currentCode.value = await templateManager.renderTemplate('htl', templateData);
                              break;
                          case 'Policy':
                              currentCode.value = await templateManager.renderTemplate('policy', templateData);
                              break;
                          case 'Vue Prototype':
                              currentCode.value = await templateManager.renderTemplate('vue', templateData);
                              break;
                          default:
                              currentCode.value = '';
                      }
                  } catch (error) {
                      console.error('Template rendering error:', error);
                      currentCode.value = `Error rendering template: ${error.message}`;
                  }
              };

              return {
                  state,
                  currentCode,
                  templateStatus: templateManager.getStatus(),
                  addProp() {
                      state.props.push({ name: '', type: 'String', required: false });
                  },
                  removeProp(index) {
                      // Only remove if there would still be at least one prop left
                      if (state.props.length > 1) {
                          state.props.splice(index, 1);
                      }
                  }
              };
          }
        });

        integateWithVue(app, templateManager);
        return app;

    } catch (error) {
        console.error('Failed to initialize application:', error);
        throw error;
    }
}
