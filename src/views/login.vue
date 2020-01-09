<template>
  <div>
  <login_page/>
    <i-button v-on:click="get_my_page">测试me</i-button>
    <i-button v-on:click="get_logout">测试logout</i-button>
  </div>
</template>

<script>
  let URL_ROOT = {
    'base_url': 'http://localhost:8080/',
  };
  import top_bar from "../components/top_bar";
  import login_page from '../components/login_page'
  import axios from "axios";
  axios.defaults.withCredentials = true;
  export default {
    name: "login",
    components: {top_bar, login_page},
    data() {
      return {
      }
    },methods:{
      get_my_page: function () {
        axios.get(URL_ROOT.base_url + 'user/me').then(res => {
          console.log(res);
          alert(res);
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



</style>
