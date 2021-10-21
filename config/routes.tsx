export const routes = [
  { exact: true, path: '/', component: '@/pages/index' },
  { exact: true, path: '/login', component: '@/pages/login/index' },
  {
    exact: true,
    path: '/register',
    component: '@/pages/register/UserRegister/index',
  },

  {
    path: '/home',
    component: '@/layouts/BlogLayout/BlogLayout.jsx',
    routes: [
      {
        exact: true,
        path: '/home/index',
        component: 'homePage/index.jsx',
      },
      {
        exact: true,
        path: '/home/blog',
        component: 'homePage/blog/index',
      },
      {
        exact: true,
        path: '/home/blog/context',
        component: 'homePage/blog/context/index',
      },
      { component: '@/pages/404' },
    ],
  },
  {
    path: '/main',
    component: '@/layouts/index',
    wrappers: ['@/wrappers/auth'],
    routes: [
      { path: '/main/list', component: 'component/list' },
      { path: '/main/card', component: 'component/card' },
      {
        path: '/main/accountcenter',
        component: 'setting/AccountCenter/index',
      },
      {
        path: '/main/accountsettings',
        component: 'setting/Accountsettings/index',
      },
      { component: '@/pages/404' },
    ],
  },
  {
    exact: true,
    path: '/acupuncture/main',
    component: '@/pages/acupuncture/main/index',
  },
  { component: '@/pages/404' },
];
