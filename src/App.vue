<template>
  <div id="app">
    <home msg="Telemetria" />
  </div>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style>
* {
  font-family: "Avenir", Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #060606 !important;
  color: #ffffff;
}
</style>

<style scoped>
#app {
  text-align: center;
  margin: 40px;
}
</style>
