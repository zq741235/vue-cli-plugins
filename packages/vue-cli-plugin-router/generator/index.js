module.exports = (api, options = {}, rootOptions = {}) => {
  api.injectImports(api.entryFile, `import router from './router'`)
  api.injectRootOptions(api.entryFile, `router`)
  api.extendPackage({
    dependencies: {
      'vue-router': '^3.0.1'
    }
  })
  api.render('./template',options)
  // api.render('./template/src/router',null,{root:'./src'})
 
  // if (options.demoRouter) { 
  //   api.render('./template/src/views')
  // } 
  api.postProcessFiles(files => {
    const appFile = files[`src/App.vue`]
    if (rootOptions.router) {
      delete files[`src/router.js`]
    }
    if (appFile&&options.demoRouter) {
      files[`src/App.vue`] = appFile.replace(
        /^<template>[^]+<\/script>/,
        `
<template>
<div id="app">
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</div>
</template>
      `.trim()
      )
    }
  })
}
