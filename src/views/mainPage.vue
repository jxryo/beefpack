<template>
  <div>
    <top_bar/>
    <div class="main_land">
      <blur_content>
<!--        <p>speak a word</p>-->
      </blur_content>
    </div>
<!--    <div style="top: 0">-->
<!--      <zmd/>-->
<!--    </div>-->
  </div>
</template>

<script>
  import router from 'vue-router'
  import top_bar from "../components/top_bar";
  import blur_content from "../components/blur_content";
  import zmd from "../components/zmd";
  export default {
    name: "mainPage",
    data() {
      return {
        theme1: 'primary',
        theme2: 'dark',
        is_login:false
      }
    },components:{top_bar,blur_content,zmd},
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
