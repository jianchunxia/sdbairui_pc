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
       <img src="../../assets/qd.jpg" alt="">
    </div>
    <!-- 就业方向 -->
    <div class="work">
      <p class="jiu">{{title4}}</p>
      <p class="one"><b>{{title8}}</b>{{title5}}</p>
      <p class="twe"><b>{{title9}}</b>{{title7}}</p>
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
      title:"前端开发是用户端效果的代码实现，包括JavaScript、HTML5、CSS3，以及微信小程序等。",
      title1:"课程介绍",
      title2:"前端即网站前台部分，运行在PC端，移动端等浏览器上展现给用户浏览的网页。随着互联网技术的发展，HTML5，CSS3，前端框架的应用，跨平台响应式网页设计能够适应各种屏幕分辨率，合适的动效设计，给用户带来极高的用户体验。 前端技术一般分为前端设计和前端开发，前端设计一般可以理解为网站的视觉设计，前端开发则是网站的前台代码实现，包括基本的HTML和CSS以及JavaScript/ajax，最新的高级版本HTML5、CSS3，以及SVG等。 随着互联网技术的迅速发展，前端开发不再仅限于网页开发，而是衍生出了更多的移动端应用程序，如小程序、APP等，这些技术的出现也提高了人们对于移动端应用的使用体验，同时也使得前端开发岗位越来越受青睐。/ajax，最新的高级版本HTML5、CSS3，以及SVG等。随着互联网技术的迅速发展，前端开发不再仅限于网页开发，而是衍生出了更多的移动端应用程序，如小程序、APP等，这些技术的出现也提高了人们对于移动端应用的使用体验，同时也使得前端开发岗位越来越受青睐.",
      title3:" 前端 课程内容",
      title4:"就业方向",
      title5:" 这个方向是目前从事Web前端开发的主要就业方向。而随着企业的发展以及大量的人才涌入前端行业，现在企业对Web前端工程师的招聘要求日渐严格，所以就导致了大部分刚刚毕业的大学生，或者自学的朋友就业过程中屡屡碰壁。主要原因在于实战能力欠缺或者实际工作技能与企业需求不符。所以建议想从事Web前端开发的人员，首先要了解目前市场对前端工程师的技术要求，查漏补缺，提高自己的能力才能获得更好的机会",
      title6:" Web开发语言很多，Java是其中之一。Java在开发高访问、高并发、集群化的大型网站方面有很大的优势，例如去哪儿网、美团等。",
      title7:"一般来说Web架构师的薪资普遍比较高，但其要求较Web前端工程师要更加的严格。架构师是将广泛的Web相关知识的沉淀，需要充分掌握多种技能，包括：后端技术、DBA、Platform等等，甚至包括网站优化SEO技术。而这些技术更多的是在实战中才能够更好得到补充。所以一般从事Web架构师的人员都是相对从业经历比较丰富的人。 市场要求Web前端工程师需要掌握更多的技能，更扎实的技术，但整体环境来看，Web前端的前景是非常乐观的。正式因为企业对于人才的要求提高，相对应的薪资待遇也是水涨船高。所以对于求知者来说，目前加入Web前端开发的行列中，即是机遇也是挑战。",
      title8:"1、Web前端工程师",
      title9:"2、Web架构师",

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
       p{width: 100%;height: 360px;margin: 0 auto;}
     }
     .curriculum{
       .curr{
         font-size: 32px;
         text-align: center;
         font-weight: bold;
       }
     .curri{
       width: 960px;
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
       padding-bottom: 30px;
       .jiu{font-size: 30px;text-align: center;}
       .one{width: 50%;margin: 10px auto;text-indent: 32px;font-size: 16px;line-height: 30px;}
       .twe{width: 50%;margin: 10px auto;text-indent: 32px;font-size: 16px;line-height: 30px;}
       .three{width: 50%;margin: 10px auto;text-indent: 32px;font-size: 16px;line-height: 30px;}
     }
   }
</style>
