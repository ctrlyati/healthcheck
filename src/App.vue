<template>
  <div id="app">

    <Topbar></Topbar>

    

  </div>
</template>

<script>

import Topbar from './components/Topbar'

export default {
  name: 'App',
  components: {
    Topbar
  }
}
</script>

<style lang="scss">
@import "./styles/main.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
