<template>
    <div class="carousel">
    <Carousel 
        v-model="value"
        :autoplay="setting.autoplay"
        :autoplay-speed="setting.autoplaySpeed"
        :dots="setting.dots"
        :radius-dot="setting.radiusDot"
        :trigger="setting.trigger"
        :arrow="setting.arrow">
        <CarouselItem>
            <div class="demo-carousel">
                <img src="../../static/cropped/1.jpg">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
                <img src="../../static/cropped/2.jpeg">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
                <img src="../../static/cropped/3.jpg">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
                <img src="../../static/cropped/4.jpg">
            </div>
        </CarouselItem>
    </Carousel>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value:1,
                setting: {
                    autoplay: false,
                    autoplaySpeed: 6000,
                    dots: 'inside',
                    radiusDot: false,
                    trigger: 'click',
                    arrow: 'hover'
                }
            }
        },
        name:'carousel'
    }
</script>

<style scoped>
.carousel{
    max-height:500px;
    overflow:hidden;
}
img{
    width:100%;
    margin-top:-6%;
}

</style>
