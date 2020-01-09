<template>
  <div>
    <top_bar/>
    <div class="main_land">
      <div style="width: 800px;height: 600px;position: absolute;left: 20%;">
        <card/>
      </div>
    </div>
    <template v-if="is_login">
      <affix :offset-bottom="60">
        <div class="demo-affix">
          <i-button icon="md-brush" style="position: relative;left: 1400px" v-on:click="go_to_write"/>
        </div>
      </affix>
    </template>
    <template v-if="is_admin">
      <affix :offset-bottom="20">
        <div class="demo-affix">
          <i-button icon="md-cafe" style="position: relative;left: 1400px" v-on:click="go_to_home"/>
        </div>
      </affix>
    </template>
<!--    <div>-->
<!--      <i-button v-on:click="get_user_admin">测试</i-button>-->
<!--      <i-button v-on:click="get_logout">退出</i-button>-->
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
  axios.defaults.withCredentials = true;
  export default {
    name: "mainPage",
    data() {
      return {
        theme1: 'primary',
        theme2: 'dark',
        is_login: false,
        is_admin:false
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
          this.is_login=true;
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
            this.is_admin= true
          } else {
            console.log(false);
            this.is_admin= false
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
        this.$router.push('/write_artical');
      },
      go_to_home:function () {
        this.$router.push('/admin');
      }
    },mounted() {
      this.get_my_Info();
      this.get_user_admin();
    }
  }
</script>

<style scoped>
  .main_land {
    width: 100%;
    height: 1000px;
    margin: 0 auto;
    /*background: url("../assets/bgp/land.jpg");*/
    display: flex;
    flex-direction: column;
    background-size: cover;
    background: white;

  }
</style>
