module.exports = (api, options = {}) => {
  api.injectImports(api.entryFile, `import './plugins/axios'`)
  api.extendPackage({
    dependencies: {
      axios: '^0.18.0',
      qs: '^6.7.0'
    }
  })
  if(options.demoAxios){
    api.extendPackage({
      vue: {
        devServer: {
          proxy: {
            '/api': {
              logLevel: 'debug',
              target: 'http://rap2api.taobao.org/app/mock/223127',
              cookieDomainRewrite: '',
              router: {
                // 'dev:devPort': 'proxy:proxyPort'
              }
            }
          }
        }
      }
    })
  }
  // api.render('./template/src/api')
  // api.render('./template/src/plugins')
  api.render('./template',options)

  // api.render(files => {
  //   console.log(files);
    
    // Object.keys(files)
    //   .filter(name => name.startsWith("src/"))
    //   .forEach(name => delete files[name])
  // })
}
