export default {
    plugin: {
        install(Vue) {
            const context = require.context('./components',false,/\.vue$/)
            context.keys().forEach((keys) => {
                if(keys !== './main.vue') {
                    const name = keys.match(/([0-9A-Za-z]*)\.vue$/i)[1]
                    Vue.components[name] = context(keys).default
                }
            })
        }
    }
}