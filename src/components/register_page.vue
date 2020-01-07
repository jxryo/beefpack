<template>
  <div>
    <top_bar/>
    <div class="outer_label">
      <img class="inner_label login_logo" src="../assets/logo.png">
    </div>
    <div class="login_form" :model="user_list_info">
      <input type="text" class="qxs-ic_user qxs-icon" placeholder="账号" v-model="user_list_info.username">
      <input type="text" class="qxs-ic_password qxs-icon" placeholder="密码" v-model="user_list_info.password">
      <input type="text" class="qxs-ic_user qxs-icon" placeholder="昵称" v-model="user_list_info.nickname">
      <input type="text" class="qxs-ic_user qxs-icon" placeholder="性别" v-model="user_list_info.sex">
      <input type="text" class="qxs-ic_user qxs-icon" placeholder="邮箱" v-model="user_list_info.email">
      <el-button class="login_btn" v-on:click="register_user">注册</el-button>
      <div style="margin-top: 10px">
        <span style="color: #000099"><router-link to="/login">已有账号？登入...</router-link></span>
        <span style="float: right;color: #A9A9AB"><router-link to="/">忘记密码</router-link></span>
      </div>
    </div>
  </div>
</template>


<script>
  let URL_ROOT = {
    'base_url': 'http://localhost:8080/',
  };
  import axios from "axios";
  import top_bar from "./top_bar";
  export default {
    name: 'register',
    components:{top_bar},
    data() {
      return {
        isBtnLoading: false,
        user_list_info : {
          email: '',
          username: '',
          nickname:'',
          sex: '',
          password:''
        }
      }
    },
    methods: {
      register_user: function () {
        axios.post(URL_ROOT.base_url + 'user',this.user_list_info).then(res => {
          alert('注册成功');
          // console.log(this.$router.app.$router.currentRoute.path);

        }).catch(error => {
          alert(error)
        })
      },
      user_list_info() {

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
