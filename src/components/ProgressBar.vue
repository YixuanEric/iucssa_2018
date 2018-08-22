<template>
<div class="progress-bar" :style="{'width':progressWidth}">

</div>
</template>

<script>
  export default{
    data(){
      return{
        progressWidth:''
      }
    },
    name:'progressBar',
    mounted(){
            window.addEventListener('scroll',this.scrollHandler)
    },
    methods:{
      scrollHandler(){
                var scrollTop = window.pageYOffset
                this.progressWidth = scrollTop /(document.body.clientHeight - document.documentElement.clientHeight)*100 + '%'
            }
    }
  }
</script>

<style scoped>
.progress-bar{
  height:.4%;
  background-color:#7a1705;
  position:fixed;
  z-index:999;
}
</style>