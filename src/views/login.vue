<template>
  <div><top_bar/>
  <login_page/>
  </div>
</template>

<script>
  import top_bar from "../components/top_bar";
  import login_page from '../components/login_page'

  export default {
    name: "login",
    components: {top_bar, login_page},
    data() {
      return {
      }
    },methods:{

    }
  }
</script>

<style scoped>

</style>
