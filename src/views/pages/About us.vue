<template>
  <div id="about">
    <!-- 柏瑞简介 -->
    <div class="brief">
      <p>{{title}}</p>
      <dl>
        <dt><img src="../../assets/lou.png" alt=""></dt>
        <dd>
          <span class="kong">{{title1}}</span>
          <span>{{title2}}</span>
          <span>{{title3}}</span>
        </dd>
      </dl>
    </div>
    <!-- 合作院校 -->
    <div class="cooperation">
      <p>{{title4}}</p>
      <div class="hezuo">
        <p><img src="../../assets/hezuo1.png" alt=""></p>
        <p><img src="../../assets/hezuo2.png" alt=""></p>
      </div>
    </div>

    <div class="lo">
       <dl>
         <dt><img src="../../assets/lo.png" alt=""></dt>
         <dd class="kong">{{title5}}</dd>
       </dl>
    </div>
    <!-- 公司环境 -->
    <div class="environment">
       <p class="p1">{{title6}}</p>
       <p class="p2">{{title7}}</p>
       <div class="tu">
         <p v-for="(item,index) in list" :key="index"><img :src="item.src" alt=""></p>
       </div>
    </div>
    <!-- 底部背景图 -->
     <div class="foot">
      {{title8}}}
    </div>
  </div>
</template>
<script>
export default {
    name: "Home",
  components: {
    // Swiper,
    // SwiperSlide,
  },
  data() {
    return {
      title:"柏瑞简介",
      title1:"山东柏瑞软件科技有限公司，其前身为泰安市思柏瑞软件科技有限公司，始建于2006年。 主要从事软件开发软件技术咨询服务、互联网技术开发、咨询与服务、非学历性职业技能培训等业务。",
      title2:"公司成立以来，先后与临沂大学、临沂电大、山东商业职业技术学院、山东交通技师学院、山东交通职业学院、山东省城市服务技师学院、淄博市技师学院等院校合作，是山东省最早开展校企联合办学并拥有较好口碑的企业之一。",
      title3:"2016年，山东柏瑞入驻济南高新区，依托中国济南创新谷优质资源优势以及自身行业优势，以服务为宗旨，以就业为导向，大力推进校企联合人才培养模式的探索与实践。",
      title4:"合作院校",
      title5:"公司推出的人才培养体系拥有ISO9001国际质量体系认证资格并根据不同的客户群体因材施教，让不同层次的客户都能够通过学习成为符合企业需求的实用人才。未来，我们将继续深化校企合作，采取多种方式与院校进行联合办学力求将山东柏瑞软件科技有限公司打造成“省内领先国内一流”的软件教育基地，努力开创校企合作的新局面。",
      title6:"办公环境",
      title7:"敞亮、干净、卫生、温馨的办公环境",
      title8:"践行产教深度融合  助推校企紧密合作",
      list:[
         {src:require("../../assets/c.png")},
         {src:require("../../assets/c.png")},
         {src:require("../../assets/c.png")},
         {src:require("../../assets/c.png")},
         {src:require("../../assets/c.png")},
         {src:require("../../assets/c.png")},

      ]
    };
  },
}
</script>
<style scoped lang="scss">
  #about{
    margin: 0 ;
    padding: 0;
    // pc端
     @media only screen and (min-width: 1085px) {
    .kong{text-indent: 20px;}
    .brief{
       margin-top: 90px;
       p{
       font-size: 24px;
       color: #333333;
       font-weight: 400;
       text-align: center;
     }
     dl{
       width: 1200px;margin: 0 auto;
       box-shadow: 0px 2px 35px 0px rgba(106, 106, 106, 0.17);
       display: flex;
       justify-content: space-between;
       padding: 20px;
       dt{
         width: 460px;
         height: 340px;
         img{width: 100%;}
       }
       dd{
         span{display: block;}
         width: 661px;
         height: 338px;
         font-size: 18px;
         font-family: Microsoft YaHei;
         font-weight: 400;
         color: #666666;
         line-height: 40px;
       }
       }
    }
    .cooperation{
      margin-top: 90px;
      p{
       font-size: 24px;
       color: #333333;
       font-weight: 400;
       text-align: center;
     }
     .hezuo{
         width: 1200px;margin: 0 auto;
         display: flex;
         justify-content: space-between;
       p{
         width: 600px;
         img{width: 100%;}
       }
     }
    }
    .lo{
      width: 1200px;margin: 90px auto;
      dl{
        width: 100%;display: flex;justify-content: space-between;
        dt{width: 530px;height:192px;img{width: 100%;height: 100%;}}
        dd{width: 649px;height: 177px;font-size: 18px;font-family: Microsoft YaHei;font-weight: 400;color: #666666;line-height: 40px;}
      }
    }
    .environment{
      width: 1200px;margin: 90px auto;
      .p1{font-size: 24px;font-family: Microsoft YaHei;font-weight: 400;color: #333333;text-align: center;}
      .p2{font-size: 22px;font-family: Microsoft YaHei;font-weight: 400;color: #666666;text-align: center;}
      .tu{
        display: flex;justify-content: space-between;flex-wrap: wrap;
        p{
          width: 390px;
          margin: 5px 0;
          transition:1s ease;
          img{width: 100%;}
        }
        p:hover{transform: scale(1.1)}
      }
    }
     }
    //  手机端
     @media only screen and (max-width: 1080px) {
       body{background: red;}
       .brief{
       margin-top: 90px;
       p{
       font-size: 24px;
       color: #333333;
       font-weight: 400;
       text-align: center;
     }
     dl{
       width: 90%;margin: 0 auto;
       box-shadow: 0px 2px 35px 0px rgba(106, 106, 106, 0.17);
       display: flex;
       justify-content: space-between;
       flex-wrap: wrap;
       padding: 20px;
       dt{
         width: 90%;
         height: 340px;
         img{width: 100%;}
       }
       dd{
         span{display: block;}
         width: 90%;
         height: 338px;
         font-size: 18px;
         font-family: Microsoft YaHei;
         font-weight: 400;
         color: #666666;
         line-height: 40px;
       }
       }
    }
     }
  }
</style>
