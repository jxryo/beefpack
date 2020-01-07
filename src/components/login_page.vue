<template>
  <div>
    <div class="outer_label">
      <img class="inner_label login_logo" src="../assets/logo.png">
    </div>
    <div class="login_form" :model="user_info">
      <input type="text" class="qxs-ic_user qxs-icon" placeholder="用户名" v-model="user_info.userName">
      <input type="text" class="qxs-ic_password qxs-icon" placeholder="密码" v-model="user_info.password">
      <el-button class="login_btn" type="primary" v-on:click="login_check()">登录</el-button>
      <div style="margin-top: 10px">
        <span style="color: #000099;">
          <router-link to="/register_page">注册</router-link>
        </span><span style="float: right;color: #A9A9AB">忘记密码？</span>
      </div>
    </div>
  </div>
</template>


<script>
  let URL_ROOT = {
    'base_url': 'http://localhost:8080/',
  };
  import axios from "axios";

  export default {
    name: 'login',
    data() {
      return {
        user_info: {
          userName: '',
          password: ''
        }
      }
    },
    methods: {
      login_check: function () {
        axios.post(URL_ROOT.base_url + 'login?password=' + this.user_info.password + '&username=' + this.user_info.userName).then(res => {
          console.log('success');
        }).catch(error => {
          console.log(error);
        });
      }
    }
  }
</script>
<style>
  .login_form {
    padding-top: 8%;
    padding-left: 40%;
    padding-right: 40%;
  }

  .qxs-ic_user {
    background: url("../assets/login/ic_user.png") no-repeat;
    background-size: 13px 15px;
    background-position: 3%;
  }

  .qxs-ic_password {
    background: url("../assets/login/ic_password.png") no-repeat;
    background-size: 13px 15px;
    background-position: 3%;
    margin-bottom: 20px;
  }

  .login_logo {
    height: 100%;
  }

  .login_btn {
    width: 90%;
    font-size: 16px;
    background: -webkit-linear-gradient(left, #ff1493, #00bfff); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #ff1493, #00bfff); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #ff1493, #00bfff); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #ff1493, #00bfff); /* 标准的语法 */
    filter: brightness(1.4);
  }
</style>
