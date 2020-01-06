<template>
  <main-page/>
  <register_page/>
</template>

<script>
  import register_page from "../components/register_page";
  import mainPage from "./mainPage";

  export default {
    name: "register",
    components: {mainPage, register_page}
  }
</script>

<style scoped>

</style>
