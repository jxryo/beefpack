<template>
    <mainPage/>

</template>

<script>
  import mainPage from "./mainPage";
    export default {
        name: "login",
      components:{mainPage},
      methods:{
        loginChange:function () {
          let login_out=document.getElementById('login_out').style.display;
          let login_in=document.getElementById('login_in').style.display;
          if (login_in === 'inline'){
            login_out='none';
          }
        }
      }
    }
</script>

<style scoped>

</style>
