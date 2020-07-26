<template>
  <div id="app">
    <LeftNav></LeftNav>
    <router-view></router-view>
  </div>
</template>

<script>
import LeftNav from './components/common/LeftNav.vue'
export default {
  components: {
    LeftNav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
}
</style>
