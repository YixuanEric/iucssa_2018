<template>
<div class="index">
    
    <Carousel />
    <Banner />
    <div>
    <Row class="intro">
        <Col span="12">
            <img src="../../static/events_images/graduation_party.jpg">
        </Col>
        <Col span="12">
         <img src="../../static/events_images/mass_meeting.jpg">
        </Col>
    </Row>
    </div>
</div>
</template>

<script>
    import Carousel from '../components/Carousel'
    import Banner from '../components/Banner'
    
    export default{
        data(){
            return{

            }
        },
        components:{
            Carousel,
            Banner
        }
    }
</script>

<style scoped>

.index{
    background-color:#f4f4f4;
}

.intro{
    padding:80px;
    font-size:1.5em;
}
.intro img{
    width:90%;
}

</style>