 
module.exports = (api, options = {}) => {
    api.injectImports(api.entryFile, `import store from './store'`)
    api.injectRootOptions(api.entryFile, `store`)
    api.extendPackage({
      dependencies: {
        vuex: '^3.1.0'
      }
    })
    api.render('./template',options)
}
  