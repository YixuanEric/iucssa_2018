<template>
  <div class="about">
    <div class="banner">
    <img src="../../static/cropped/4.jpg">
    </div>

    <Row>
        <div class="intro">
        <div class="caption">
        <p>印第安纳大学中国学生学者联谊会（IUCSSA）是一个以印第安纳大学为中心,面向Bloomington 地区所有华人学生、学者、教职工的在校社团组织。成立于1990年的IUCSSA是印第安纳大学最早建立的亚洲“学生会”性质组织之一，也是唯一受中国驻芝加哥领事馆承认的在校华人社团组织。20多年来我们一直致力于非盈利性活动的开展，现已成为美国中西部地区最具影响力的在校华人团体之一。过去的一年，是IUCSSA 历史上发展最为迅速的一年，无论在活动的数量、质量以及类型上都较以往有了极大进步。</p>
        </div>
        <div class="intro-photo">
        <img src="../../static/images/group_photo.jpeg">
        </div>
        </div>
    </Row>
    <Row class="section">
      <Col span="12">
        <div class="card">
        <div class="caption">
        <p>主席：刘宇豪</p>
        <p>副主席：刘一帆</p>
        <p>副主席：吴一凡</p>
        </div>
        <div class="photo">
        <img src="../../static/images/board.jpg">
        </div>
        </div>
      </Col>
      <Col span="12">
        <div class="card">
        <div class="caption">
        <p>主席：刘宇豪</p>
        <p>主席：刘宇豪</p>
        <p>主席：刘宇豪</p>
        </div>
        <div class="photo">
        <img src="../../static/images/a.jpg">
        </div>
        </div>
      </Col>
    </Row>
    <Row class="section">
      <Col span="12">
        <div class="card">
        <div class="caption">
        <p>主席：刘宇豪</p>
        <p>主席：刘宇豪</p>
        <p>主席：刘宇豪</p>
        </div>
        <div class="photo">
        <img src="../../static/images/m.jpg">
        </div>
        </div>
      </Col>
      <Col span="12">
        <div class="card">
        <div class="caption">
        <p>主席：刘宇豪</p>
        <p>主席：刘宇豪</p>
        <p>主席：刘宇豪</p>
        </div>
        <div class="photo">
        <img src="../../static/images/f.jpg">
        </div>
        </div>
      </Col>
    </Row>
    <Row class="section">
      <Col span="12">
        <div class="card">
        <div class="caption">
        <p>主席：刘宇豪</p>
        <p>主席：刘宇豪</p>
        <p>主席：刘宇豪</p>
        </div>
        <div class="photo">
        <img src="../../static/images/cda.jpg">
        </div>
        </div>
      </Col>
      <Col span="12">
        <div class="card">
        <div class="caption">
        <p>主席：刘宇豪</p>
        <p>主席：刘宇豪</p>
        <p>主席：刘宇豪</p>
        </div>
        <div class="photo">
        <img src="../../static/images/it.jpg">
        </div>
        </div>
      </Col>
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
  padding:80px 50px;
  background-color:#ffffff;
  font-size:1.3em;
  margin-top:-5%;
  margin-right:50%;
  margin-left:5%;
  line-height:2.5em;
  box-shadow:5px 5px 5px #7a1705;
  border-radius:2px;
  display:flex;
  justify-content:space-around;
}

.section{
  flex-wrap:nowrap;
  display:flex;
  justify-content:space-around;
  margin-top:2%;
  margin-bottom:6%;
}
.caption{
  flex-basis:200%;
}

.card{
  width:95%;
  margin:0 auto;
  padding:80px 50px;
  background-color:#ffffff;
  font-size:1.3em;
  box-shadow:3px 3px 3px #7a1705;
  border-radius:2px;
  display:flex;
  align-items:center;
}

.photo{
  flex-basis:200%;
}
.photo img{
  width:100%;
}

.intro-photo{
  margin-left:5%;
  flex-basis:auto;
}
.intro-photo img{
  width:100%;
}
</style>