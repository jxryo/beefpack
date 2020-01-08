<template>
  <div>
    <top_bar/>
    <div class="main_land">
      <div style="width: 800px;height: 600px;position: absolute;left: 20%;">
        <card/>
      </div>
    </div>
    <affix_write_button v-on:click="go_to_write"/>
    <div>
      <i-button v-on:click="get_user_admin">测试</i-button>
      <i-button v-on:click="get_logout">退出</i-button>
    </div>
    <!--    <div>-->
    <!--      <i-button icon="md-brush"/>-->
    <!--    </div>-->
    <!--    <div style="top: 0">-->
    <!--      <zmd/>-->
    <!--    </div>-->
  </div>
</template>

<script>
  let URL_ROOT = {
    'base_url': 'http://localhost:8080/',
  };
  import router from 'vue-router'
  import top_bar from "../components/top_bar";
  import card from "../components/card";
  import zmd from "../components/zmd";
  import axios from "axios";
  import affix_write_button from "../components/affix_write_button";
  // // import axios from 'axios';
  // // //修复CORS
  // axios.defaults.withCredentials = true;
  export default {
    name: "mainPage",
    data() {
      return {
        theme1: 'primary',
        theme2: 'dark',
        is_login: false
      }
    }, components: {top_bar, card, zmd, affix_write_button},
    methods: {
      get_test: function () {
        axios.get(URL_ROOT.base_url + 'user/me').then(function (res) {
          console.log(res.data.data);
        }).catch(error => {
          console.log(error);
        });
      },
      get_logout: function () {
        axios.get(URL_ROOT.base_url + 'logout').then(res => {
          alert('success')
        }).catch(error => {
          console.log(error)
        })
      },
      get_my_Info: function (func) {
        axios.get(URL_ROOT.base_url + 'user/me').then(res => {
          // console.log('get:'+res.data.data);
          let user_info = res.data.data;
          func(user_info);
        }).catch(error => {
          console.log(error);
        });
      }, get_user_admin: function () {
        this.get_my_Info(user => {
          let user_admin = user.admin;
          if (user_admin) {
            console.log(true);
            return true
          } else {
            console.log(false);
            return false
          }
        });
      },
      get_user_id: function () {
        this.get_my_Info(user => {
          let my_id = user.id;
          return my_id;
        });
      },
      go_to_write:function () {
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>
  .main_land {
    width: 100%;
    margin: 0 auto;
    /*background: url("../assets/bgp/land.jpg");*/
    height: 1300px;
    display: flex;
    flex-direction: column;

  }
</style>
