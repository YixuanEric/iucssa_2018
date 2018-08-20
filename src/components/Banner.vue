<template>
    <div>
    <Row class="banner">
        <Col span="6" class="circle-button"><Icon type="md-book" /></Col>
        <Col span="6" class="circle-button"><Icon type="md-book" /></Col>
        <Col span="6" class="circle-button"><Icon type="md-book" /></Col>
        <Col span="6" class="circle-button"><Icon type="md-book" /></Col>
    </Row>
    <Row class="caption">
        <Col span="6" ><span>新生手册</span></Col>
        <Col span="6" ><span>新生手册</span></Col>
        <Col span="6" ><span>新生手册</span></Col>
        <Col span="6" ><span>新生手册</span></Col>
    </Row>
    </div>
</template>

<script>
    export default{
        data(){
            return {

            }
        },
        name:'banner'
    }
</script>

<style scoped>
.banner{
    margin:3em 2em;
    height:150px;
    flex-wrap:nowrap;
    display:flex;
    justify-content:space-between;
}

.circle-button{
    background-color:#7a1705;
    color:#ffffff;
    font-size:60px;
    line-height:110px;
    width:120px;
    height:120px;
    border-radius:50%;
    margin:0 .5em;
}

.caption{
    display:flex;
    justify-content:space-between;
    margin:20px;
}
</style>