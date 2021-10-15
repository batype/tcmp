import { defineConfig } from 'umi';
import { routes } from './config/routes';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  fastRefresh: {},
  dynamicImport: {},
  dva: {},
  title: '中医TCM平台',
});
