export default {
    plugin(Vue){
        const context = require.context('./http',false,/\.js$/)
        context.keys().forEach((keys) => {
            if(keys !== './index.js'){
                const name = keys.match(/([0-9A_Za-z])*\.js$/i)[1]
                Vue[`$${name}`] = Vue.prototype[`$${name}`] = context(keys).default;
            }
        })
    }
}