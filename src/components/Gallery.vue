<template>
<div>
    <Row class="section-title">
    <h1>相册</h1>
    </Row>
    <Row class="intro">
        <Col span="12">
            <img class="photo" src="../../static/events_images/graduation_party.jpg">
        </Col>
        <Col span="12">
            <img class="photo" src="../../static/events_images/mass_meeting.jpg">
        </Col>
    </Row>
    <Row class="intro">
        <Col span="12">
            <img class="photo" src="../../static/events_images/spring_gala.jpg">
        </Col>
        <Col span="12">
            <img class="photo" src="../../static/events_images/spring_gala2.jpg">
        </Col>
    </Row>
    </div>
</template>

<script>
    export default{
        data(){
            return {

            }
        },
    name:'gallery'
    }
</script>

<style scoped>
.section-title{
    margin-top:100px;
    margin-bottom:1em;
}

.photo{
    width:95%;
    margin:0 auto;
    border-radius:1%;
}
.intro{
    font-size:1.5em;
    padding:1em 2em;
}


</style>