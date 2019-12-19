let router = [
  {
    path: '/home',
    redirect: '/homePage',
    component: () => import('components/common/Home.vue'),
    children: [
      {
        path: '/homePage',
        name: 'homePage',
        component: () => import('view/homePage.vue'),
        meta: {
          title: '首页',
        }
      }
    ]
  },

  {
    path: '/',
    name: 'login',
    component: () => import('view/login/index.vue')
  },
]

export default router;