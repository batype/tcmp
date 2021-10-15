// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/shaosong/Documents/umiJS/tcmp0.1/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "exact": true,
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__index' */'@/pages/index')})
  },
  {
    "exact": true,
    "path": "/login",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__login__index' */'@/pages/login/index')})
  },
  {
    "exact": true,
    "path": "/register",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__register__UserRegister__index' */'@/pages/register/UserRegister/index')})
  },
  {
    "path": "/home",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BlogLayout__BlogLayout' */'@/layouts/BlogLayout/BlogLayout.jsx')}),
    "routes": [
      {
        "exact": true,
        "path": "/home/index",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__homePage__index' */'/Users/shaosong/Documents/umiJS/tcmp0.1/src/pages/homePage/index.jsx')})
      },
      {
        "exact": true,
        "path": "/home/blog",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__homePage__blog__index' */'/Users/shaosong/Documents/umiJS/tcmp0.1/src/pages/homePage/blog/index')})
      }
    ]
  },
  {
    "path": "/main",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__index' */'@/layouts/index')}),
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'@/wrappers/auth')})],
    "routes": [
      {
        "path": "/main/list",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__component__list' */'/Users/shaosong/Documents/umiJS/tcmp0.1/src/pages/component/list')}),
        "exact": true
      },
      {
        "path": "/main/card",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__component__card' */'/Users/shaosong/Documents/umiJS/tcmp0.1/src/pages/component/card')}),
        "exact": true
      },
      {
        "path": "/main/accountcenter",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__setting__AccountCenter__index' */'/Users/shaosong/Documents/umiJS/tcmp0.1/src/pages/setting/AccountCenter/index')}),
        "exact": true
      },
      {
        "path": "/main/accountsettings",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__setting__Accountsettings__index' */'/Users/shaosong/Documents/umiJS/tcmp0.1/src/pages/setting/Accountsettings/index')}),
        "exact": true
      }
    ]
  },
  {
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'@/pages/404')}),
    "exact": true
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
