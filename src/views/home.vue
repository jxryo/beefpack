<template>

  <top_bar_admin/>
  <div id='user_table'>
    <i-table :columns="columns" :data="table_data"/>
    <i-button v-on:click="userlist" id="get_data_button">获取数据</i-button>
  </div>
</template>

<script>
  let columns = [
    {
      title: 'ID',
      key: 'id'
    }, {
      title: 'Email',
      key: 'email'
    }, {
      title: 'Username',
      key: 'username'
    }, {
      title: 'admin_power',
      key: 'admin'
    }, {
      title: 'ban',
      key: 'ban'
    }, {
      title: 'Nickname',
      key: 'nickname'
    }, {
      title: 'Sex',
      key: 'sex'
    }
  ];
  let table_data = [];
  let URL_ROOT = {
    'base_url': 'http://localhost:8080/',
  };
  import axios from "axios";
  import top_bar_admin from "../components/top_bar_admin";
  // document.getElementById('user_table').style.display='none';
  export default {
    name: "home",
    components: {top_bar_admin},
    data() {
      return {
        theme1: 'dark',
        columns: columns,
        table_data: table_data
      }
    },
    methods: {
      userlist: function () {
        axios.get(URL_ROOT.base_url + 'user?page=1&size=9999').then(res => {
          let i = 0;
          const list = res.data.data.list;
          while (i <= list.length - 1) {
            let user = list[i];
            table_data.push(eval(user));
            i++;
          }
          document.getElementById('get_data_button').style.display = 'none'
        }).catch(error => {
          alert(error);
        });
      }
    }
  }

</script>

<style scoped>

</style>
