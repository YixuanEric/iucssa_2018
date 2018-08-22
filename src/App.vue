<template>
  <div id="app">
    <ProgressBar />
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import ProgressBar from './components/ProgressBar'

export default {
  name: 'App',
  components:{
    Navbar,
    ProgressBar
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif, 'Microsoft YaHei';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
