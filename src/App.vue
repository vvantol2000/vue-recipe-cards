<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link :to="{ name: 'recipe-create'}">Create</router-link> |-->
<!--      <router-link :to="{ name: 'recipe-list'}">List</router-link> |-->
<!--    </div>-->
    <Navbar/>
    <router-view />
  </div>
</template>
<script>
  import Navbar from "./components/Navbar";
  export default {
      components: {
          Navbar
      }
  }
</script>
<style>
  @import "assets/paper-kit.min.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
