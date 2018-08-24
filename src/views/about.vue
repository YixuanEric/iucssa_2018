<template>
  <div class="about">
    <div class="banner">
    <img src="../../static/cropped/4.jpg">
    </div>
    <Row class="section-title">
    <h1>关于我们</h1>
    </Row>
    <Row>
        <div class="intro">
        <div class="intro-photo">
        <img src="../../static/images/group_photo.jpeg">
        </div>
        <div>
        <p>印第安纳大学中国学生学者联谊会（IUCSSA）是一个以印第安纳大学为中心,面向Bloomington 地区所有华人学生、学者、教职工的在校社团组织。成立于1990年的IUCSSA是印第安纳大学最早建立的亚洲“学生会”性质组织之一，也是唯一受中国驻芝加哥领事馆承认的在校华人社团组织。20多年来我们一直致力于非盈利性活动的开展，现已成为美国中西部地区最具影响力的在校华人团体之一。过去的一年，是IUCSSA 历史上发展最为迅速的一年，无论在活动的数量、质量以及类型上都较以往有了极大进步。</p>
        </div>
        
        </div>
    </Row>
    <Row>
        <div class="department">
        
        <div class="caption">
        <h2>主席团</h2>
        <p>主席：刘宇豪</p>
        <p>副主席：吴一凡</p>
        <p>副主席：刘一帆</p>
        </div>
        <div class="intro-photo">
        <img src="../../static/images/board.jpeg">
        </div>
        </div>
    </Row>
    <Row>
        <div class="department">
        
        <div class="caption">
        <h2>Treasure</h2>
        <p>周辰</p>
        </div>
        <div class="intro-photo">
        <img src="../../static/images/treasure.jpeg" style="width:80%">
        </div>
        </div>
    </Row>
    <Row>
        <div class="department">
        
        <div class="caption">
        <h2>活动部</h2>
        <p>部长：宣浩东</p>
        <p>副部长 ：曾浩然 张培博</p>
        <p>干事：方均安 李苏 冯舒婷 杨理睿 王卓昊 郭虎生 李昊铭 孙伟强
考核期干事 ：欧阳雨欣 黄元泓 罗雪滢 许刘璇 杜逸豪</p>
        </div>
        <div class="intro-photo">
        <img src="../../static/images/a.jpeg" style="width:80%">
        </div>
        </div>
    </Row>
    <Row>
        <div class="department">
        
        <div class="caption">
        <h2>金融部</h2>
        <p>部长：于嘉林</p>
        <p>副部长：李晓苇 何宇瑄</p>
        <p>干事：李泽逸 麦嘉祺 王嘉豪 傅泽楠 陈浩生</p>
        </div>
        <div class="intro-photo">
        <img src="../../static/images/f.jpeg">
        </div>
        </div>
    </Row>
    <Row>
        <div class="department">
        
        <div class="caption">
        <h2>职业规划发展部</h2>
        <p>部长: 苏稚淇</p>
        <p>副部长：林雨晴 陈垚光</p>
        <p>干事：刘佳明 黄鑫淼 刘子易 刘新宇 倪泽艺 蒋金金 </p>
        </div>
        <div class="intro-photo">
        <img src="../../static/images/cda.jpeg">
        </div>
        </div>
    </Row>
    <Row>
        <div class="department">
        
        <div class="caption">
        <h2>网络部</h2>
        <p>部长：王翌轩</p>
        <p>干事：刘梓萌 张楚萱</p>
        </div>
        <div class="intro-photo">
        <img src="../../static/images/it.jpg" style="width:80%">
        </div>
        </div>
    </Row>
    
    
  </div>
</template>

<script>
  export default{
    data(){
      return{

      }
    },
    name:'about'
  }
</script>

<style scoped>
.about{
  background-color:#f4f4f4;
  height:100%;
}
.banner{
  max-height:400px;
  overflow:hidden;
}
.banner img{
  width:100%;
}

.intro{
  width:90%;
  height:40%;
  padding:60px 30px;
  margin:0 auto;
  margin-top:5%;
  background-color:#ffffff;
  font-size:1.3em;
  font-weight:700;
  line-height:2.5em;
  border-radius:2px;
}
.intro-photo img{
  width:100%;
}

.department{
  width:90%;
  height:30%;
  padding:30px 15px;
  margin:0 auto;
  margin-top:5%;
  background-color:#ffffff;
  font-size:1.3em;
  font-weight:700;
  line-height:2.5em;
  border-radius:2px;
  display:flex;
  align-items:center;
}
.caption{
  flex-basis:180%;
  padding: 0 2em;
}
.section-title{
    margin-top:1em;
    margin-bottom:-2em;
}
@media only screen and (max-width: 600px) {
    .department{
        display:block;
    }
    .intro-photo img{
    width:90%;
}
}

</style>