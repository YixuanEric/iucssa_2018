<template>
<div>
    <Row class="section-title">
    <h1>IUCSSA 友好合作伙伴</h1>
    </Row>
    <Row class="sponsors">
        <Col span="6"><img src="../../static/sponsors/ribao.jpg"></Col>
        <Col span="6"><img src="../../static/sponsors/dianxin.png"></Col>
        <Col span="6"><img src="../../static/sponsors/iso.jpg"></Col>
        <Col span="6"><img src="../../static/sponsors/joytravel.jpg"></Col>
    </Row>
    <Row class="sponsors">
        <Col span="6"><img src="../../static/sponsors/fields.png"></Col>
        <Col span="6"><img src="../../static/sponsors/royal.jpeg"></Col>
        <Col span="6"><img src="../../static/sponsors/red.png"></Col>
        <Col span="6"><img src="../../static/sponsors/mingjianhui.png"></Col>
    </Row>
</div>
</template>

<script>
    export default{
        data(){
            return {

            }
        },
        name:'sponsors'
    }
</script>

<style scoped>
.sponsors{
    width:80%;
    margin:0 auto;
}
.sponsors img{
    width:90%;
    margin:1em;
    border-radius:2%;
}

.section-title{
    margin-top:60px;
    margin-bottom:1em;
}

</style>