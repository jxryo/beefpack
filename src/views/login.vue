<template>
  <mainPage/>
  <template v-if="is_login_page_see">
  <Login_page/>
  </template >
  <template v-else>
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
        is_login_page_see: true
      }
    },methods:{

    }
  }
</script>

<style scoped>

</style>
