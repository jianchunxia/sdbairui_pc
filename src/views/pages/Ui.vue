<template>
  <div class="ui">
    <div class="banner">
      <img :src="ban" />
    </div>
    <div class="con">
      <div class="first">
        <p class="title">{{ kecheng }}</p>
        <p class="text">{{ text }}</p>
      </div>
      <div class="second">
        <p class="title">{{ title1 }}</p>
        <p><img :src="img1" /></p>
      </div>
      <div class="first">
        <p class="title">{{ title2 }}</p>
        <p class="text">{{ text2 }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ui",
  components: {},
  data() {
    return {
      ban: require("../../assets/uiban.png"),
      kecheng: "课程介绍",
      text:
        "用户界面(User Interface)是指对软件的人机交互、操作逻辑、界面美观的整体设计。好的UI设计不仅是让软件变得有个性有品味，还要让软件的操作变得舒适、简单、自由、充分体现软件的定位和特点。国内目前大部分UI工作者都是从事这个行业。也有人称之为美工，但实际上不是单纯意义上的美术工人，而是软件产品的产品外形设计师。随着“UI”热的到来，近几年国内很多从事手机，软件，网站，增值服务等企业和公司都设立了这个部门。还有很多专门从事U设计的公司也应运而生。软件UI设计师的待遇和地位也逐渐上升。",
      title1: "ui课程内容",
      img1: require("../../assets/uicon.png"),
      title2: "就业方向",
      text2:
        "UI即用户界面设计行业刚刚在全球软件业兴起，属于高薪技术设计产业，与国外在同步发展水平。其次国内外众多大型IT企业(例如:百度、腾讯、Yahoo、中国移动、Nokia、联想、网易、微软、盛大、淘宝等众多企业)均已成立专业的UI设计部门，但专业人才稀缺，人才资源争夺激烈。就业市场供不应求。如今，国内的UI设计日益发展，有了专门的职业分工也开始出现一些较高水准的一线设计师与UI设计交流组织。但总的来说，在这一领域，我们与西方发达国家间的差距仍是显而易见的。软件领域不像物质产品那样，存在工艺、材料上的限制，其核心问题恰在于人。因此，提高软件UI设计师的个人能力，真正提升软件产品的人性化程度，已成为中国UI发展的重中之重。",
    };
  },
};
</script>

<style lang="scss" scoped>
.ui {
  .banner img {
    width: 100%;
  }

  .con {
    width: 100%;
    padding-bottom: 4rem;

    .first {
      max-width: 1200px;
      margin: 0 auto;
      margin-top: 3rem;

      p {
        width: 80%;
        margin: 0 auto;
      }

      .title {
        font-size: 28px;
        text-align: center;
      }

      .text {
        margin-top: 2rem;
        text-indent: 2em;
        line-height: 2rem;
      }
    }

    .second {
      margin-top: 2rem;
      background-color: #f4f4f4;
      padding: 4rem 0;

      .title {
        font-weight: bold;
        font-size: 20px;
        text-align: center;
      }

      p {
        max-width: 1200px;
        margin: 0 auto;

        img {
          width: 90%;
          margin-left: 5%;
          margin-top: 4rem;
        }
      }
    }
  }

  @media screen and (min-width: 1085px) {
    .con {
      .first {
        .title {
          font-size: 28px;
        }
      }

      .second {
        .title {
          font-size: 20px;
        }
      }
    }
  }

  @media screen and (max-width: 1080px) {
    .banner img {
      height: 14rem;
    }

    .con {
      font-size: 14px;

      .first {
        .title {
          font-size: 24px;
        }
      }

      .second {
        .title {
          font-size: 18px;
        }
      }
    }
  }
}
</style>