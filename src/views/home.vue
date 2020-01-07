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
        <Icon type="ios-home" />
        <router-link style="color: #fff" to="/">返回应用</router-link>
      </menu-item>
    </Menu>
    <div id = 'user_table'>
      <i-table :columns="columns" :data="table_data" />
      <i-button v-on:click="userlist" id="get_data_button">获取数据</i-button>
    </div>
  </div>
</template>

<script>
    let columns= [
      {
        title: 'ID',
        key: 'id'
      }, {
        title: 'Email',
        key: 'email'
      }, {
        title: 'Username',
        key: 'username'
      }, {
        title: 'admin_power',
        key: 'admin'
      }, {
        title: 'ban',
        key: 'ban'
      }, {
        title: 'Nickname',
        key: 'nickname'
      }, {
        title: 'Sex',
        key: 'sex'
      }
    ];
    let table_data=[];
  var URL_ROOT = {
    'base_url': 'http://localhost:8080/',
  };
  import axios from "axios";
  // document.getElementById('user_table').style.display='none';
  export default {
    name: "home",
    data() {
      return {
        theme1: 'dark',
        columns: columns,
        table_data: table_data
      }
    },
    methods: {
      userlist: function () {
        axios.get(URL_ROOT.base_url + 'user?page=1&size=1').then(res => {
          let i = 0;
          const list = res.data.data.list;
          while (i <= list.length - 1) {
            let user = list[i];
            table_data.push(eval(user));
            i++;
          }
          document.getElementById('get_data_button').style.display='none'
        }).catch(error => {
          alert(error);
        });
      },
      user_list_show:function () {
        document.getElementById('user_table').style.display='inline';
      }
    }
  }

</script>

<style scoped>

</style>
