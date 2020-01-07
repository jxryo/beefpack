<template>
  <div>
    <Menu mode="horizontal" :theme="theme1" active-name="1">
      <submenu name="hk">
        <template slot="title">
          <Icon type="ios-color-wand"/>
          <router-link style="color: white" to="/">来点好康的</router-link>
        </template>
        <menu-item name="hot_topic" v-on:click="hot_sort()">
          <Icon type="md-flame"/>
          最热的
        </menu-item>
        <menu-item name="new_topic" v-on:click="new_sort()">
          <Icon type="logo-snapchat"/>
          最新的
        </menu-item>
      </submenu>
      <menu-item>
        <Icon type="logo-steam"/>
        <router-link style="color: white" to="/game_page">玩个游戏</router-link>
      </menu-item>
      <menu-item>
        <Icon type="ios-color-palette" />
        <router-link style="color: white" to="/zmd">看看图</router-link>
      </menu-item>
      <template v-if="is_admin()">
        <menu-item>
          <Icon type="ios-infinite" />
          <router-link style="color:black" to="/admin">管理后台</router-link>
        </menu-item>
      </template>
      <menu-item style="position: relative;left: 1000px">
        <div v-on:click="loginChange">
          <div id="login_out">
            <Icon type="md-person-add"/>
            <router-link style="color: white" to="/login">登录</router-link>
          </div>
          <template v-if="is_login">
            <div id="login_in">
              <Icon type="md-person-add"/>
              我的
            </div>
          </template>
        </div>
      </menu-item>
    </Menu>
  </div>
</template>

<script>
  export default {
    name: "top_bar",
    data(){
      return {
        theme1:'primary',
        is_login: false,
        loginChange:false
      }
    },
    methods:{
      is_admin:function () {

        return false
      },
      hot_sort:function () {
        //最热门的
      },
      new_sort:function () {
        //最新的
      },
      is_login:function () {
        //判断是否登录
      }
    }

  }

</script>

<style scoped>

</style>
