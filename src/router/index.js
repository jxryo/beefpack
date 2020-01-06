import Vue from 'vue'
import Router from 'vue-router'
// import test from '@/views/test'
import home from "@/views/home"
import mainPage from "../views/mainPage";
import login from "../views/login";
import login_page from "../components/login_page";
import register_page from "../components/register_page";
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
    },{
    path:'/login_page',
      name:'login_page',
      component:login_page
    },{
    path:'/register_page',
      name:'register_page',
      component:register_page
    }
  ]
})
