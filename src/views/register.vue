<template>
  <top_bar/>
  <register_page/>
</template>

<script>
  import register_page from "../components/register_page";
  import top_bar from "../components/top_bar";

  export default {
    name: "register",
    components: {top_bar, register_page}
  }
</script>

<style scoped>

</style>
