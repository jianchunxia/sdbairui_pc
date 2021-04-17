<template>
  <div id="java">
    <div class="bg">
       <p>{{title}}</p>
    </div>
    <!-- 课程介绍 -->
    <div class="curriculum">
      <p class="curr">{{title1}}</p>
      <p class="curri">{{title2}}</p>
    </div>
    <!-- 课程内容 -->
    <div class="content">
      <p>{{title3}}</p>
       <img src="../../assets/java.jpg" alt="">
    </div>
    <!-- 就业方向 -->
    <div class="work">
      <p class="jiu">{{title4}}</p>
      <p class="one"><b>{{title8}}</b>{{title5}}</p>
      <p class="twe"><b>{{title9}}</b>{{title6}}</p>
      <p class="three"><b>{{title10}}</b>{{title7}}</p>
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
      title:"Java语言作为静态面向对象编程语言的代表，允许程序员以优雅的思维方式进行复杂的编程。",
      title1:"课程介绍",
      title2:"随着IT产业的发展，许多企业中的计算机应用程序也在随之转型，企业中所应用的计算机模式逐渐向客户端较小、服务器随之增大、数据库的容量也在相应增加的方向转变。此外，加上Java语言独有的特点，根据其在各项服务器中应用程序的开发所占有的优势，企业版的J2SE为企业环境中计算机模式的应用提供了良好的平台。Java语言为与数据库联系紧密设计了Java servlet和SQL-J技术，以及JSP技术。随着JSP技术的发展，使JAVA语言的网络应用更为实际化、更高效快捷，成为IT产业常用的技术。JSP以Java语言作为其服务器端的使用语言，结合了JAVA SCRIPT等多种其他客户端语言，使网络浏览器更为方便的展现。",
      title3:" Java课程内容",
      title4:"就业方向",
      title5:" Android是全球最大的智能手机操作系统，根据Strategy Analytics最新研究报告显示，全球智能手机出货量在2016年第三季度达到3.75亿台。Android操作系统获得了创纪录的88%全球市场份额，挤压了苹果iOS和其他平台。Android应用的主要开发语言就是Java。 Android 从2010年才开始走入大众视野，最近几年发展非常快速，但人才积累却没有跟上，这也是导致Android开发人员工资高，难招人的原因",
      title6:" Web开发语言很多，Java是其中之一。Java在开发高访问、高并发、集群化的大型网站方面有很大的优势，例如去哪儿网、美团等。",
      title7:"Java客户端开发主要面向政府、事业单位和大型企业，如医疗、学校、OA、邮箱、投票、金融、考试、物流、矿山等信息方面的系统。但客户端开发只是为了给自身企业的主要业务提供辅助，一般情况下开发的客户端供内部使用，很少推向市场，所以在前景方面，前两项明显更占有一定优势。",
      title8:"1、Android开发",
      title9:"2、web开发",
      title10:"3、客户端开发 ",

    };
  },
  // directives: {
  //   swiper: directive,
  // },
};
</script>
<style scoped lang="scss">
   #java{
     .bg{
       background: url("../../assets/banner.png") no-repeat ;height: 360px;background-size: 100% 100%;
       font-size: 30px;font-weight: bold;color: #fff;line-height: 360px;text-align: center;
       p{width: 100%;height: 360px;}
     }
     .curriculum{
       .curr{
         font-size: 32px;
         text-align: center;
         font-weight: bold;
       }
     .curri{
       width: 1500px;
       margin: 0 auto;
       font-size: 16px;
       line-height: 30px;
       text-indent: 32px;
     }
     }
        .content{
       p{ font-size: 24px;text-align: center;font-weight: bold;margin-bottom: 60px;}
       background: #F4F4F4;
       margin-top: 50px;
       width: 100%;
      text-align: center;
      padding: 40px 0;
     }
     .work{
       .jiu{font-size: 30px;text-align: center;}
       .one{width: 50%;margin: 10px auto;text-indent: 32px;font-size: 16px;line-height: 30px;}
       .twe{width: 50%;margin: 10px auto;text-indent: 32px;font-size: 16px;line-height: 30px;}
       .three{width: 50%;margin: 10px auto;text-indent: 32px;font-size: 16px;line-height: 30px;}
     }
   }
</style>
