<template>
  <div>
    <div class="outer_label">
      <img class="inner_label login_logo" src="../assets/logo.png">
    </div>
    <div class="login_form">
      <input type="text"  class="qxs-ic_user qxs-icon"  placeholder="用户名" v-model="userName">
      <input type="text"  class="qxs-ic_password qxs-icon"  placeholder="密码" v-model="password">
      <!--<button class="login_btn el-button el-button&#45;&#45;primary is-round" type="primary" round>登录</button>-->
      <el-button class="login_btn" @click.native="login" type="primary" round :loading="isBtnLoading" v-on:click="login_check()">登录</el-button>
      <div style="margin-top: 10px">
<!--        <span style="color: #000099;" @click="login">微信账号登陆</span>-->
        <span style="color: #22BBFF">
          <router-link to="/register_page">注册</router-link>
        </span>
        <span style="float: right;color: #A9A9AB">忘记密码？</span>
      </div>
    </div>
  </div>
</template>



<script>
  //  import { userLogin } from '../../api/api';

  import axios from "axios";
  export default {
    name:'login',
    data() {
      return {
        userName: '',
        password: '',
        isBtnLoading: false
      }
    },
    created () {
      if(JSON.parse( localStorage.getItem('user')) && JSON.parse( localStorage.getItem('user')).userName){
        this.userName = JSON.parse( localStorage.getItem('user')).userName;
        this.password = JSON.parse( localStorage.getItem('user')).password;
      }
    },
    computed: {
      btnText() {
        if (this.isBtnLoading) return '登录中...';
        return '登录';
      }
    },
    methods: {
      login() {
        if (!this.userName) {
          // this.$message.error('请输入用户名');
          alert('请输入用户名');
          return;
        }
        if (!this.password) {
          // this.$message.error('请输入密码');
          // return;
          alert('请输入密码');
        }

      },
      userlist: function () {

        axios.get(URL_ROOT.base_url + 'user?id=?').then(res => {

        }).catch(error => {
          alert(error);
        });
      },
      login_check:function () {

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
    background: linear-gradient(to right, #ff1493 , #00bfff); /* 标准的语法 */
    filter: brightness(1.4);
  }
</style>
