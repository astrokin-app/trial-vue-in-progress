import Vue from 'vue';
import Router from 'vue-router';
import Homepage from './src/views/HomePage.vue'
import SearchPage from './src/views/SearchPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/search:lots',
      name: 'lots',
      component: SearchPage
    },
    {
      path: '/search:sales',
      name: 'sales',
      component: SearchPage
    }
  ]

});