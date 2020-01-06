<template>
  <div>
  <mainPage/>
  <login_page/>
  </div>
</template>

<script>
  import mainPage from "./mainPage";
  import login_page from '../components/login_page'

  export default {
    name: "login",
    components: {mainPage, login_page},
    data() {
      return {
      }
    },methods:{

    }
  }
</script>

<style scoped>

</style>
