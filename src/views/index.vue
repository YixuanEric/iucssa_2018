<template>
<div class="index">
    <ProgressBar />
    <Navbar />
    <Carousel />
    <Banner />
    <div>
    <Row class="intro">
        <Col span="12">
            <p>印第安纳大学中国学生学者联谊会（IUCSSA）是一个以印第安纳大学为中心,面向Bloomington 地区所有华人学生、学者、教职工的在校社团组织。成立于1990年的IUCSSA是印第安纳大学最早建立的亚洲“学生会”性质组织之一，也是唯一受中国驻芝加哥领事馆承认的在校华人社团组织。20多年来我们一直致力于非盈利性活动的开展，现已成为美国中西部地区最具影响力的在校华人团体之一。过去的一年，是IUCSSA 历史上发展最为迅速的一年，无论在活动的数量、质量以及类型上都较以往有了极大进步。</p>
        </Col>
        <Col span="12">
         <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </Col>
    </Row>
    </div>
</div>
</template>

<script>
    import Navbar from '../components/Navbar'
    import Carousel from '../components/Carousel'
    import Banner from '../components/Banner'
    import ProgressBar from '../components/ProgressBar'
    
    export default{
        data(){
            return{

            }
        },
        components:{
            Navbar,
            Carousel,
            Banner,
            ProgressBar
        }
    }
</script>

<style scoped>

.index{
    background:#f4f4f4;
}

.intro{
    padding:80px;
    font-size:1.5em;
}
.intro p{
    margin:20px;
}

</style>