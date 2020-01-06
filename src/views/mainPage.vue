<template>
  <div>
    <div>
      <Menu mode="horizontal" :theme="theme1" active-name="1">
        <submenu name="hk">
          <template slot="title">
            <Icon type="ios-color-wand"/>
            来点好康的
          </template>
          <menu-item name="hot_topic" :theme="theme2">
            <Icon type="md-flame"/>
            最热的
          </menu-item>
          <menu-item name="new_topic" :theme="theme2">
            <Icon type="logo-snapchat"/>
            最新的
          </menu-item>
        </submenu>
        <menu-item>
          <Icon type="logo-steam"/>
          玩个游戏
        </menu-item>
        <menu-item>

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

  </div>
</template>

<script>
  import router from 'vue-router'

  export default {
    name: "mainPage",
    data() {
      return {
        theme1: 'primary',
        theme2: 'dark',
        is_login:false
      }
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
