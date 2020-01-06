import Vue from 'vue'
import Router from 'vue-router'
// import test from '@/views/test'
import home from "@/views/home"
import mainPage from "../views/mainPage";
import login from "../views/login";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/admin',
      name:'home',
      component: home
    },
    {
      path: '/',
      name: 'mainPage',
      component: mainPage
    },{
    path:'/login',
      name:'login',
      component:login
    }
  ]
})
