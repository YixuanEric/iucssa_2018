<template>
<div class="news">

    <Row class="section-title">
    <h1>近期活动</h1>
    </Row>
    <Card class="card">
        <a href="https://mp.weixin.qq.com/s/Y3sfIkyoDDoZGNvGY3uc7A" target="_blank">
            <h1 slot="title">2018秋季招新</h1>
            <div class="card-content">
            <div class="card-img">
            <img src="../../static/posters/recruit_poster.jpg">
            </div>
            <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp年年有今日，岁岁有今朝。一年两度让人激情澎湃的学生会招新又要到来了！感受过学长学姐无微不至的假期答疑，体验过暖身暖心的新生接机，参加过带你变成老司机的新生大本营活动，你是不是对参加学生会充满了浓浓的好奇与按捺不住的激动呢？作为学生会的一员，我们其实也怀有热烈的期待，欢迎怀瑾握瑜，兼持异彩的你加入我们，为IUCSSA带来一股夏季的新风！有多远的距离，以为闻不到你气息，
谁知道你就在招新的名单上，
一回头就看到你。
我们，静候出色的你! </p>
            </div>
        </a>
    </Card>
    <Card class="card">
        <a href="https://mp.weixin.qq.com/s/9-mMm-Cptt4TCp_504OWGQ" target="_blank">
            <h1 slot="title">2018秋季Mass Meeting</h1>
            <div class="card-content">
            <div class="card-img">
            <img src="../../static/posters/mass_meeting_poster.jpg">
            </div>
            <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp今年IUCSSA有幸请到
芝加哥总领事馆总领事洪磊先生致辞演讲，
支持IU学生的同时，也会宣传校内外安全的重要性，
让大家更加了解美国生活的同时，
也感受到祖国的关怀。传递爱与希望的梦想行动，
发扬中国传统文化的3C书法社，
让你在运动场上挥洒青春汗水的
ABL篮球联盟与足球社，
拥有魅力舞台的D.Force与X-Power舞蹈社，
代表中国留学生参赛小500的Young Pioneer，
有着各种文艺情怀的Blazor摄影社与IA手作社，
让你充分发挥戏剧细胞的和平剧社，
IU奇葩说的主角纵横辩论，
给予你发挥音乐天分的Musina音乐社等等，
一切都从Mass Meeting开始！ </p>
            </div>
        </a>
    </Card>
    <Card class="card">
        <a href="https://mp.weixin.qq.com/s/x5kxfcwymZhffyE0AS27Lw" target="_blank">
            <h1 slot="title">第29届IUCSSA换届选举及招新结果公示</h1>
            <div class="card-content">
            <div class="card-img">
            <img src="../../static/images/board.jpg">
            </div>
            <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp2018年4月，IUCSSA成功举办了新执委会换届选举，随后又进行了2018年度春季招新，一共有17位新力军加入我们的团队，自此开始印大学联将由第29届主席团全面接手学生会的日常工作。
 
新面孔，新气象，新征程，但永恒不变的是我们致力于为全体华人学生学者无私奉献的精神。在接下来的一年，我们会开展更多精彩高质量的活动，例如毕业酒会，新生答疑，大陆新生见面会，新生接机以及秋季入学后的Mass Meeting等等。</p>
            </div>
        </a>
    </Card>
    
    <Card class="card">
        <a href="https://mp.weixin.qq.com/s/gJT7WHbjDGAoFrehwQ2Oxw" target="_blank">
            <h1 slot="title">2018印大狗年春晚回顾</h1>
            <div class="card-content">
            <div class="card-img">
            <img src="../../static/posters/spring_gala_poster2.jpg">
            </div>
            <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp2018年印第安纳大学狗年春晚在2月17日圆满落下帷幕。 你是否因为种种原因错失了IUCSSA狗年春晚呢？或是在春晚途中因为其他原因错过了哪个精彩节目呢？亦或是你对今年节目依然回味无穷呢？别担心，快跟随IUCSSA的小伙伴一起，回顾一下春晚的精彩瞬间吧。 </p>
            </div>
        </a>
    </Card>
    

    <Button type="primary" size="large" to="/news">阅读更多</Button>
</div>
</template>

<script>
    export default{
        data(){
            return{

            }
        },
        name:"recentnews"
    }
</script>

<style scoped>
.news{
  background-color:#f4f4f4;
  height:100%;
}

.card{
    margin:1em auto;
    width:60%;
    color:#515a6e;
   
}
.card p{
    flex-basis:100%;
    text-align:left;
    padding-top:1vw;
}
.card-img{
    flex-basis:26%;
    padding:0px 12px;
}
.card-img img{
    width:100%;
}
.card-content{
    display:flex;
    align-items:flex-start;
}

.card a{
    color:#515a6e;
}
.section-title{
    margin-top:2em;
    margin-bottom:1em;
}

@media only screen and (max-width: 600px) {
    .card-content{
        display:block;
    }
    .card{
    margin: 1em auto;
    width:90%;
    }
    .card-img{
        margin:0 auto;
        width:80%;
}

}
</style>