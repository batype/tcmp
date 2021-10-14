export const routes = [
  { exact: true, path: '/', component: '@/pages/index' },
  { exact: true, path: '/login', component: '@/pages/login/index' },
  {
    path: '/home',
    component: '@/pages/homeIndex/index',
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
    ],
  },
  { component: '@/pages/404' },
];
