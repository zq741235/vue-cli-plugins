const Notfound = {
  template: '<div>404</div>'
}
const moduleRouter = (r => {
  return r.keys().map(key => r(key).default)
})(require.context('./module', false, /\.js$/))

let otherRouter = [
  {
    path: '/',
    redirect: { name: 'home' }
  },
  {
    path: '*',
    component: Notfound,
    name: '404',
    meta: { title: '404-页面不存在' }
  }
]

let allRouter = moduleRouter.reduce((acc, cur) => acc.concat(cur), otherRouter)
// result.push(...otherRouter)
export default allRouter
