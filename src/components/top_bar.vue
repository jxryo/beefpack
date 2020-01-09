<template>
  <div>
    <Menu mode="horizontal" :theme="theme1" active-name="1">
      <submenu id="hk">
        <template slot="title">
          <Icon type="ios-color-wand"/>
          <router-link style="color: white" to="/">来点好康的</router-link>
        </template>
        <menu-item id="hot_topic" v-on:click="hot_sort()">
          <Icon type="md-flame"/>
          最热的
        </menu-item>
        <menu-item id="new_topic" v-on:click="new_sort()">
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
      <template v-if="is_admin">
        <menu-item>
          <Icon type="ios-infinite" />
          <router-link style="color:black" to="/admin">管理后台</router-link>
        </menu-item>
      </template>
      <menu-item style="position: relative;left: 1000px">
        <div>
          <template v-if="is_no_login">
          <div id="login_out">
            <Icon type="md-person-add"/>
            <router-link style="color: white" to="/test">登录</router-link>
          </div>
          </template>
          <template v-if="is_login">
            <div id="login_in">
              <Icon type="md-person"/>
                我的
            </div>
          </template>
        </div>
      </menu-item>
      <template v-if="is_login">
      <menu-item style="position:relative;left: 970px">
        <div v-on:click="logout">
        <Icon type="ios-exit" />
        退出
        </div>
      </menu-item>
      </template>
    </Menu>
  </div>
</template>

<script>
  let URL_ROOT = {
    'base_url': 'http://localhost:8080/',
  };
  import axios from 'axios';
  export default {
    name: "top_bar",
    data(){
      return {
        theme1:'primary',
        is_login: false,
        is_no_login:true,
        is_admin:false
      }
    },
    methods:{
      loginChange:function(){
        if(this.is_login){
          return false;
        }
      },
      get_my_Info: function (func) {
        axios.get(URL_ROOT.base_url + 'user/me').then(res => {
          // console.log('get:'+res.data.data);
          let user_info = res.data.data;
          this.is_login=true;
          this.is_no_login=false;
          func(user_info);
        }).catch(error => {
          console.log(error);
        });
      }, get_user_admin: function () {
        this.get_my_Info(user => {
          let user_admin = user.admin;
          if (user_admin) {
            console.log(true);
            this.is_admin=true
          } else {
            console.log(false);
            this.is_admin=false
          }
        });
      },logout:function () {
        axios.get(URL_ROOT.base_url+'logout').then(res=>{
          alert('退出成功')
        }).catch(error=>{
          alert(error);
        })
      },
      hot_sort:function () {
        //最热门的
      },
      new_sort:function () {
        //最新的
      }
      // is_login_status:function () {
      //   //判断是否登录
      // }
    },
    mounted() {
      this.get_my_Info();
    }
  }

</script>

<style scoped>

</style>
