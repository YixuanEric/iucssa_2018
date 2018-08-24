<template>
  <div id="app">
    <ProgressBar />
    <Navbar />
    <router-view/>
    <Footnote />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import ProgressBar from './components/ProgressBar'
import Footnote from './components/Footnote'

export default {
  name: 'App',
  components:{
    Navbar,
    ProgressBar,
    Footnote
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif, 'Microsoft YaHei';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color:#f4f4f4;
}
</style>
