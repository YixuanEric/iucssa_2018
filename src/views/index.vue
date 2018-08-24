<template>
<div class="index">
    
    <Carousel />
    <Banner />
    <Gallery />
    <RecentNews />
    <Sponsors />
    
</div>
</template>

<script>
    import Carousel from '../components/Carousel'
    import Banner from '../components/Banner'
    import Gallery from '../components/Gallery'
    import RecentNews from '../components/RecentNews'
    import Sponsors from '../components/Sponsors'
    
    export default{
        data(){
            return{

            }
        },
        components:{
            Carousel,
            Banner,
            Gallery,
            RecentNews,
            Sponsors
        }
    }
</script>

<style scoped>

.index{
    background-color:#f4f4f4;
    height:100%;
}


</style>