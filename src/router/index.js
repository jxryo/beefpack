import Vue from 'vue'
import Router from 'vue-router'
// import test from '@/views/test'
import home from "../views/home"
import mainPage from "../views/mainPage";
import login from "../views/login";
import login_page from "../components/login_page";
import register_page from "../components/register_page";
import game_page from "../views/game_page";
import top_bar from "../components/top_bar";
import top_bar_admin from "../components/top_bar_admin";
import zmd from "../components/zmd";
import card from "../components/card";
import App from "../App";
import affix_write_button from "../components/affix_write_button";
import write_artical from "../components/write_artical";
import test from "../views/test";
Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path:'/app',
    //   name:'App',
    //   component:App
    // },

    {
      path: '/admin',
      name: 'home',
      component: home
    },
    {
      path: '/',
      name: 'mainPage',
      component: mainPage
    }, {
      path: '/login',
      name: 'login',
      component: login
    }, {
      path: '/login_page',
      name: 'login_page',
      component: login_page
    }, {
      path: '/register_page',
      name: 'register_page',
      component: register_page
    }, {
      path: '/game_page',
      name: 'game_page',
      component: game_page
    }, {
      path: '/top_bar',
      name: 'top_bar',
      component: top_bar
    }, {
      path: '/top_bar_admin',
      name: 'top_bar_admin',
      component: top_bar_admin
    },
    {
      path: '/zmd',
      name: 'zmd',
      component: zmd
    }, {
      path: '/card',
      name: 'card',
      component: card
    },{
    path:'/affix_write_button',
      name:'affix_write_button',
      component:affix_write_button
    },{
    path:'/write_artical',
      name:'write_artical',
      component:write_artical
    },{
    path:'/test',
      name:'test',
      component:test
    }
  ]
})
