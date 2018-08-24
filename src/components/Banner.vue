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
            <router-link to="/about"><Icon type="md-people" class="circle-button"/></router-link>
            <span class="caption">关于我们</span>
        </div>
        </Col>
        <Col span="6">
        <div>  
            <router-link to="/events"><Icon type="md-list" class="circle-button"/></router-link>
            <span class="caption">最新活动</span>
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
    font-weight:600;
}

@media only screen and (max-width: 600px) {
.circle-button {
    background-color:#7a1705;
    color:#ffffff;
    font-size:30px;
    line-height:80px;
    width:80px;
    height:80px;
    border-radius:50%;
    margin:0 .5em;
    transition:0.5s;
}
.banner{
    margin:2em 2em;
    height:80px;
    flex-wrap:nowrap;
    display:flex;
    justify-content:space-between;
}
}
</style>