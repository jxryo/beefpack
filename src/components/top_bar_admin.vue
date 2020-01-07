<template>
  <div>
    <Menu mode="horizontal" :theme="theme1" active-name="1">
      <menu-item name="1">
        <div v-on:click="user_list_show">
          <Icon type="ios-paper"/>
          用户表
        </div>
      </menu-item>
      <menu-item name="2">
        <Icon type="ios-people"/>
        用户管理
      </menu-item>
      <Submenu name="3">
        <template slot="title">
          <Icon type="ios-stats"/>
          统计分析
        </template>
        <MenuGroup title="使用">
          <menu-item name="3-1">新增和启动</menu-item>
          <menu-item name="3-2">活跃分析</menu-item>
          <menu-item name="3-3">时段分析</menu-item>
        </MenuGroup>
        <MenuGroup title="留存">
          <menu-item name="3-4">用户留存</menu-item>
          <menu-item name="3-5">流失用户</menu-item>
        </MenuGroup>
      </Submenu>
      <menu-item name="4">
        <Icon type="ios-construct"/>
        综合设置
      </menu-item>
      <menu-item>
        <Icon type="ios-home"/>
        <router-link style="color: #fff" to="/">返回应用</router-link>
      </menu-item>
    </Menu>
  </div>
</template>

<script>

  export default {
    name: "top_bar_admin",
    data(){
      return{
        theme1: 'dark'
      }
    },
    methods: {
      user_list_show: function () {
        document.getElementById('user_table').style.display = 'inline';
      }
    }
  }
</script>

<style scoped>

</style>
