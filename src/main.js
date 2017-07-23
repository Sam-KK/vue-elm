// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';

// 1、定义（路由）组件
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';
//
// 调用vue-router插件
import VueRouter from 'vue-router';
// import VueResource from 'vue-resource'
Vue.config.productionTip = false;

// 注册vue-router插件
Vue.use(VueRouter);
// Vue.use(VueResource);
/* eslint-disable no-new */

// 2. 定义路由
const routes = [
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
];
// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes, // （缩写）相当于 routes: routes
  component: App
});
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
router.push('/goods');
