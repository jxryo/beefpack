<template>
  <!--    对话框-->

</template>

<script>
  var URL_ROOT = {
    'base_url': 'http://localhost:8080/'
  };
  import axios from 'axios'
    export default {
        name: "register_page",
      methods:{
        register_user:function () {
          let usr_list_info={
            'email':this.email,
            "username": this.username,
            "nickname": this.nickname,
            "sex": this.sex,
            "password": this.password
          };
          axios.post(URL_ROOT.base_url+'user').then(res=>{
            return usr_list_info;
          }).catch(error=>{alert(error)})
        }
      }
    }
</script>

<style scoped>

</style>
