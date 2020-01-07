<template>
  <div>
    <top_bar/>
    <div id="game_part" class="game_part">
      <div class="blur_class">
        <div style="position: relative;left: 100px;top: 150px">
        <p style="color: black;font-size: x-large">请点击以下按钮开始游戏</p>
        </div>
      </div>
      <div class="start_button">
        <i-button v-on:click="open_game">
          开始
        </i-button>
      </div>
    </div>
  </div>
</template>

<script>
  // import mainPage from "./mainPage";
  import top_bar from "../components/top_bar";
  export default {
    name: "game_page",
    components: {top_bar},
    methods: {
      open_game: function () {
        window.open('./static/game_page.html')
      }
    }
  }

</script>

<style scoped>
  .game_part {
    width: 100%;
    margin: 0 auto;
    background: url("../assets/bgp/game_bg.png");
    height: 960px;
    display: flex;
    flex-direction: column;

  }

  .start_button {
    width: 100px;
    position: relative;
    left: 700px;
    /*bottom: 100px;*/
  }

  .blur_class {
    /*background-color: rgba(0,0,0,0.3);*/
    /*-webkit-filter: blur(2px);*/
    /*-moz-filter: blur(2px);*/
    /*-ms-filter: blur(2px);*/
    /*-o-filter: blur(2px);*/
    /*filter: blur(2px);*/
    z-index: 1;
    overflow: hidden;
    width: 400px;
    height: 200px;
    /*background-position: center top;*/
    /*background-size: cover;*/
    border-radius: 10%;
    position: relative;
    left: 525px;

  }

  .blur_class::after {
    content: '';
    position: absolute;
    margin: -30px;
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
</style>
