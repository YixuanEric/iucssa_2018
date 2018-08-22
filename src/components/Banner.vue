<template>
    <div>
    <Row class="banner">
        <Col span="6">
        <div>  
            <Icon type="md-book" class="circle-button"/>
            <span class="caption">新生手册</span>
        </div>
        </Col>
        <Col span="6">
        <div>  
            <Icon type="md-link" class="circle-button"/>
            <span class="caption">实用链接</span>
        </div>
        </Col>
        <Col span="6">
        <div>  
            <Icon type="md-book" class="circle-button"/>
            <span class="caption">新生手册</span>
        </div>
        </Col>
        <Col span="6">
        <div>  
            <Icon type="md-book" class="circle-button"/>
            <span class="caption">新生手册</span>
        </div>
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

.circle-button {
    background-color:#7a1705;
    color:#ffffff;
    font-size:60px;
    line-height:120px;
    width:120px;
    height:120px;
    border-radius:50%;
    margin:0 .5em;
    transition:0.5s;
}

.circle-button:hover{
    transform:scale(1.1);
}

.caption{
    display:block;
    margin-top:15px;
    font-size:1.5em;
}
</style>