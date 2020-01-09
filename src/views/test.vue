<template>
  <div class="bg">
<!--    <button v-on:click="login">测试</button>-->
<!--  <button v-on:click="userme">t2</button>-->
<!--    <button v-on:click="logout">t3</button>-->
<!--    <button v-on:click="page_go">测试</button>-->
    <div class="login_form" style="position: relative;top: 300px">
      <input type="text" class="qxs-ic_user qxs-icon" placeholder="用户名" v-model="user_info.username"/>
      <input type="password" class="qxs-ic_password qxs-icon" placeholder="密码" v-model="user_info.password">
      <i-button class="login_btn" v-on:click="login">登录</i-button>
      <i-button v-on:click="page_go">返回</i-button>
    </div>
  </div>

</template>

<script>
  let URL_ROOT = {
    'base_url': 'http://localhost:8080/',
  };
  import axios from 'axios'
    export default {
        name: "test",data(){
          return{
            user_info: {
              username: "",
              password: ""
            },
            is_login: false
          }
      },
      methods:{
          login:function () {
            axios.post(URL_ROOT.base_url+'login?username='+this.user_info.username+'&password='+this.user_info.password).then(res=>{
              axios.get(URL_ROOT.base_url+'user/me').then(res=>{
                console.log(res);
              });
              console.log(res);
            });
            this.$router.push('/')
          },logout(){
            axios.get(URL_ROOT.base_url+'logout').then(res=>console.log(res))
        },page_go:function () {
            this.$router.push('/')
        }
      }
    }
</script>

<style scoped>
  .login_form {
    padding-top: 8%;
    padding-left: 40%;
    padding-right: 40%;
  }
  .bg{
    background: url("../assets/bgp/cat.jpg") no-repeat;
    background-size:cover ;
    overflow: hidden;
    height: 960px;
    width:100%;
  }
</style>
