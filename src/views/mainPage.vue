<template>
  <div>
    <top_bar/>
    <div class="main_land">
    </div>
  </div>
</template>

<script>
  import router from 'vue-router'
  import top_bar from "../components/top_bar";
  export default {
    name: "mainPage",
    data() {
      return {
        theme1: 'primary',
        theme2: 'dark',
        is_login:false
      }
    },components:{top_bar},
    methods: {

    }
  }
</script>

<style scoped>
  .main_land {
    width: 100%;
    margin: 0 auto;
    background: url("../assets/bgp/land.jpg");
    height: 960px;
    display: flex;
    flex-direction: column;

  }
</style>
