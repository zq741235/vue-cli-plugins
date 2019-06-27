export default [
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about'),
    meta: {
      title: 'about'
    }
  }
]
