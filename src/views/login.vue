<template>
  <mainPage/>
  <template v-if="is_login">
  <Login_page/>
  </template >
  <template v-if="register_page_click(is_login)">
  <register_page/>
  </template>
</template>

<script>
  import mainPage from "./mainPage";
  import login_page from '../components/login_page'
  import register_page from "../components/register_page";

  export default {
    name: "login",
    components: {mainPage, login_page, register_page},
    data() {
      return {
        is_login: false
      }
    },methods:{
      register_page_click:function (is_login) {
        return !is_login;
      }
    }
  }
</script>

<style scoped>

</style>
