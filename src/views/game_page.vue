<template>
<div>
  <main-page/>
  <div id="game_part">
    <i-button v-on:click="open_game">
      开始
    </i-button>
  </div>
</div>
</template>

<script>
  import mainPage from "./mainPage";

  export default {
    name: "game_page",
    components: {mainPage},
    methods:{
      open_game:function () {
        window.open('./static/game_page.html')
      }
    }
  }

</script>

<style scoped>

</style>
