<template>
  <div class="content">

  </div>
</template>

<script>
    export default {
        name: "blur_content"
    }
</script>

<style scoped>
  .blur_class {
    background-color: rgba(0,0,0,0.3);
    -webkit-filter: blur(2px);
    -moz-filter: blur(2px);
    -ms-filter: blur(2px);
    -o-filter: blur(2px);
    filter: blur(2px);
    z-index: 1;
    width: 600px;
    height: 400px;
    background-position: center top;
    background-size: cover;
    border-radius: 10%;
    position: relative;
    left: 425px;
  }

  .blur_class::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: -1;
    background-image: url('../assets/bgp/game_bg.png');
    background-position: center top;
    background-size: cover;
    background-attachment: fixed;
    -webkit-filter: blur(20px);
    -moz-filter: blur(20px);
    -ms-filter: blur(20px);
    -o-filter: blur(20px);
    filter: blur(20px);
  }
  .content{
    font-size: x-large;
    color: black;
    position: relative;
    left: 160px;
    top: 150px
  }
</style>
