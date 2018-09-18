function plugin1 (Vue) {
  const context = require.context('./http', false, /\.js$/)
  context.keys().forEach((keys) => {
    if (keys !== './index.js') {
      const name = keys.match(/([0-9A-Za-z]*)\.js$/i)[1]
      Vue[`$${name}`] = Vue.prototype[`$${name}`] = context(keys).default
      console.log(name)
    }
  })
}
export { plugin1 }
