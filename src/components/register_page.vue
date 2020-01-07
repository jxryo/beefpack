<template>
  <div>
    <div class="outer_label">
      <img class="inner_label login_logo" src="../assets/logo.png">
    </div>
    <div class="login_form">
      <input type="text"  class="qxs-ic_user qxs-icon"  placeholder="账号" v-model="username">
      <input type="text"  class="qxs-ic_password qxs-icon"  placeholder="密码" v-model="password">
      <input type="text"  class="qxs-ic_user qxs-icon"  placeholder="昵称" v-model="nickname">
      <input type="text"  class="qxs-ic_user qxs-icon"  placeholder="性别" v-model="sex">
      <input type="text"  class="qxs-ic_user qxs-icon"  placeholder="邮箱" v-model="email">
      <!--<button class="login_btn el-button el-button&#45;&#45;primary is-round" type="primary" round>登录</button>-->
      <el-button class="login_btn" @click.native="login" type="primary" round :loading="isBtnLoading">注册</el-button>
      <div style="margin-top: 10px">
        <span style="color: #000099;" @click="login"><router-link to="/login_page">已有账号？登入...</router-link></span><span style="float: right;color: #A9A9AB"><router-link to="/">忘记密码</router-link></span>
      </div>
    </div>
  </div>
</template>



<script>
  // //  import { userLogin } from '../../api/api';
  //
  // import axios from "axios";
  //
  // export default {
  //   name:'register',
  //   data() {
  //     return {
  //       userName: '',
  //       password: '',
  //       isBtnLoading: false
  //     }
  //   },
  //   created () {
  //     if(JSON.parse( localStorage.getItem('user')) && JSON.parse( localStorage.getItem('user')).userName){
  //       this.userName = JSON.parse( localStorage.getItem('user')).username;
  //       this.password = JSON.parse( localStorage.getItem('user')).password;
  //       this.nickname = JSON.parse( localStorage.getItem('user')).nickname;
  //       this.sex = JSON.parse( localStorage.getItem('user')).sex;
  //       this.Email=JSON.parse(localStorage.getItem('user')).emeal;
  //     }
  //   },
  //   computed: {
  //     btnText() {
  //       if (this.isBtnLoading) return '注册中...';
  //       return '注册';
  //     }
  //   },
  //   methods: {
  //     register() {
  //       if (!this.username) {
  //         // this.$message.error('请输入用户名');
  //         alert('请输入用户名');
  //         return;
  //       }
  //       if (!this.password) {
  //         // this.$message.error('请输入密码');
  //         // return;
  //         alert('请输入密码');
  //       }
  //       if (!this.nickname) {
  //         // this.$message.error('请输入昵称');
  //         alert('请输入昵称');
  //         return;
  //       }
  //       if (!this.email) {
  //         // this.$message.error('请输入性别');
  //         alert('请输入性别');
  //         return;
  //       }
  //       if (!this.email) {
  //         // this.$message.error('请输入邮箱');
  //         alert('请输入邮箱');
  //         return;
  //       }
  //
  //     },
  //     userlist: function () {
  //       axios.get(URL_ROOT.base_url + 'user?page=1&size=1').then(res => {
  //         let i = 0;
  //         const list = res.data.data.list;
  //         while (i <= list.length - 1) {
  //           let user = list[i];
  //           table_data.push(eval(user));
  //           i++;
  //         }
  //         document.getElementById('get_data_button').style.display='none'
  //       }).catch(error => {
  //         alert(error);
  //       });
  //     }
  //   }
  // }
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
