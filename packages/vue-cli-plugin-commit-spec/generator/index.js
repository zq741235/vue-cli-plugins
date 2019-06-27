module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    devDependencies: {
      "@commitlint/cli": "^7.5.2",
      "@commitlint/config-conventional": "^7.5.0",
      "commitizen": "^3.0.7",
      "cz-conventional-changelog": "^2.1.0",
      "husky": "^1.3.1",
      "lint-staged": "^8.1.5",
      "standard-changelog": "^2.0.7"
    }
  })
  // 更新版本号并生成日志
  api.extendPackage({
    scripts: {
      version: 'standard-changelog  -f && git add CHANGELOG.md'
    }
  })
  // 提交交互
  api.extendPackage({
    scripts: {
      commit: 'git-cz'
    }
  })
  api.extendPackage({
    config: {
      commitizen: {
        path: 'cz-conventional-changelog'
      }
    }
  })
  api.render('./template')
  // 复制并用 ejs 渲染 `./template` 内所有的文件
  // api.render('./template')

  //   if (options.foo) {
  //     // 有条件地生成文件
  //   }
}
