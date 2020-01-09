<template>
  <affix :offset-bottom="20">
    <div class="demo-affix">
      <i-button icon="md-brush" style="position: relative;left: 1360px" v-on:click="go_to_write"/>
    </div>
  </affix>
</template>

<script>
    export default {
        name: "affix_write_button",
      methods:{
        go_to_write:function () {
          this.$router.push('/write_artical');
        }
      }
    }
</script>

<style scoped>

</style>
