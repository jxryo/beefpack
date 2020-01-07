<template>
  <div>
    <top_bar/>
    <div class="main_land">
      <div style="width: 800px;height: 600px;position: absolute;left: 20%;">
        <card/>
      </div>
    </div>
    <i-button v-on:click="get_my_page">测试me</i-button>
    <i-button v-on:click="get_logout">测试logout</i-button>
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

  export default {
    name: "mainPage",
    data() {
      return {
        theme1: 'primary',
        theme2: 'dark',
        is_login: false
      }
    }, components: {top_bar, card, zmd},
    methods: {
      get_my_page: function () {
        axios.get(URL_ROOT.base_url + 'user/me', {
          headers: {
            crossDomain: true,
            xhrFields: {withCredentials: true}
          }
        }).then(data => {
          console.log(data);
          alert(data);
        }).catch(error => {
          console.log(error);
        })
      },
      get_logout: function () {
        axios.get(URL_ROOT.base_url + 'logout').then().catch(error => {
          console.log(error);
        })
      }
    }
  }
</script>

<style scoped>
  .main_land {
    width: 100%;
    margin: 0 auto;
    background: url("../assets/bgp/land.jpg");
    height: 960px;
    display: flex;
    flex-direction: column;

  }
</style>
