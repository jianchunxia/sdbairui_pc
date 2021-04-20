<template>
  <div id="industry">
    <swiper
      class="swiper"
      :options="swiperOption"
      :style="'height:' + winwid + 'px'"
    >
      <swiper-slide v-for="(item, index) in banner" :key="index">
        <img :src="item.image" alt="" id="banner" />
      </swiper-slide>
    </swiper>

    <!-- 公司环境 -->
    <div class="main">
      <p class="title">{{ title }}</p>
      <p class="title1">{{ title1 }}</p>
      <div class="xian">
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
    <!-- 环境列表 -->
    <div class="main1">
      <dl v-for="(item, index) in list" :key="index">
        <dt>
          <img :src="item.image" alt="" />
        </dt>
        <dd>{{ item.title }}</dd>
      </dl>
    </div>
    <!-- 培养模式 -->
    <div class="main2">
      <img :src="src" alt="" />
    </div>
    <!-- 真实产业环境 -->
    <div class="main2">
      <img :src="src1" alt="" />
    </div>
    <!-- 构建产业生态圈 -->
    <div class="main3">
      <p class="project">{{ title3 }}</p>
    </div>
    <div class="main4">
      <img :src="src2" alt="" />
    </div>
    <div class="main5">
      <p class="project">{{ title4 }}</p>
    </div>
    <div class="main6">
      <div class="main6img">
        <img :src="src3.image" alt="" />
      </div>
      <div class="main6img">
        <img :src="src4.image" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.min.css";

import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import {
  getDa,
  getindupei,
  getinduhuan,
  getindushen,
  getindugs,
  getinduke,
} from "../../api/http.js";
// import 'swiper/scrollbar.scss';
// Import Swiper styles
// import "swiper/swiper-bundle.css";
export default {
  name: "Home",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      banner: [
        { src: require("../../assets/banner.png") },
        { src: require("../../assets/banner.png") },
        { src: require("../../assets/banner.png") },
        { src: require("../../assets/banner.png") },
      ],
      list: [
        { image: "../../assets/logo.png", title: "办公楼" },
        { image: "../../assets/logo.png", title: "办公楼" },
        { image: "../../assets/logo.png", title: "办公楼" },
        { image: "../../assets/logo.png", title: "办公楼" },
      ],
      title: "济南创新谷软件基地",
      title1: "公司环境",
      title3: "构建产业生态圈",
      title4: "汇集融合，创新赋能 不忘初心，牢记使命，柏瑞教育践行产教融合",
      title5: "践行产教深度融合  助推校企紧密合作",
      src: "",
      src1: "",
      src2: "",
      src3: "",
      src4: "",

      swiperOption: {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        //分页器设置
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoHeight: true,
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        grabCursor: true,
      },
      screenWidth: 1920,
      winwid: 736,
    };
  },
  created() {
    this.setbanner();
    // this.$refs.swiper.$swiper.autoplay = true;
    this.winwid = parseInt(document.body.clientWidth / 2.6);
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth;
        this.winwid = parseInt(this.screenWidth / 2.6);
        // console.log(this.winwid);
        // console.log(this.screenWidth);
      })();
    };
  },
  methods: {
    setbanner() {
      var that = this;
      getDa().then((res) => {
        console.log(res);
        that.banner = res.data.data;
      });
      getindupei().then((re) => {
        // console.log(re.data.data.image)
        that.src = re.data.data.image;
      });
      getinduhuan().then((rea) => {
        //  console.log(rea.data.data.image)
        that.src1 = rea.data.data.image;
      });
      getindushen().then((reb) => {
        //  console.log(reb.data.data.image)
        that.src2 = reb.data.data.image;
      });
      getindugs().then((rec) => {
        //  console.log(rec)
        that.list = rec.data.data;
      });
      getinduke().then((rec) => {
        //  console.log(rec)
        that.src3 = rec.data.data[0];
        that.src4 = rec.data.data[1];
      });
    },
  },
};
</script>
<style scoped lang="scss">
#industry {
  @media only screen and (min-width: 1085px) {
    .swiper {
      // height: 580px;
      width: 100%;
      swiper-slide {
        width: 100%;
        // height: 100%;
        // height: 580px;
      }
    }
    #banner {
      // height: 580px;
      // object-fit: cover;
      width: 100% !important;
    }
    .main {
      .title {
        font-size: 24px;
        text-align: center;
      }
      .title1 {
        font-size: 22px;
        text-align: center;
        color: #666666;
        margin: 0;
      }
      .xian {
        display: flex;
        width: 400px;
        justify-content: space-around;
        margin: 0 auto;
        position: relative;
      }
      .xian p:first-child {
        width: 173px;
        height: 1px;
        background: #20b09f;
      }
      .xian p:nth-child(2) {
        width: 13px;
        height: 13px;
        background: #20b09f;
        transform: rotate(50deg);
        position: absolute;
        top: -20%;
      }
      .xian p:nth-child(3) {
        width: 173px;
        height: 1px;
        background: #20b09f;
      }
    }
    .main1 {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      dl {
        width: 24%;
        background: #fff;
        box-shadow: 0px 2px 35px 0px rgba(129, 128, 128, 0.31);
        border-radius: 5px;
        dt {
          text-align: center;
          width: 100%;
          img {
            width: 100%;
            height: 210px;
            display: block;
          }
        }
        dd {
          width: 100%;
          text-align: center;
          margin: 0 auto;
          padding: 10px 0;
        }
      }
    }
    .main2 {
      width: 1270px;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
    .main4 {
      width: 744px;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
    .main3 {
      .project {
        color: #333333;
        font-size: 35px;
        text-align: center;
        font-weight: 400;
        margin: 0;
      }
    }
    .main5 {
      font-size: 24px;
      color: #333333;
      font-weight: 400;
      text-align: center;
    }
    .main6 {
      width: 1080px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      .main6left {
        width: 588px;
        background: #ffffff;
        box-shadow: 0px 2px 35px 0px rgba(129, 128, 128, 0.19);
        border-radius: 5px;
      }
      .main6right {
        width: 588px;
        background: #ffffff;
        box-shadow: 0px 2px 35px 0px rgba(129, 128, 128, 0.19);
        border-radius: 5px;
      }
      .main6head {
        display: flex;
        margin-left: 40px;
        padding-top: 30px;
        position: relative;
        .sw {
          width: 10px;
          height: 10px;
          background: #20b09f;
          transform: rotate(50deg);
          position: absolute;
          top: 43%;
          left: -20px;
        }
      }
      .main6head1 {
        display: flex;
        margin-left: 40px;

        p {
          margin-top: 0;
        }
        position: relative;
        .sw {
          width: 10px;
          height: 10px;
          background: #20b09f;
          transform: rotate(50deg);
          position: absolute;
          top: 10%;
          left: -20px;
        }
      }
      .main6img {
        width: 90%;
        // margin: 5% auto;
        img {
          object-fit: cover;
          width: 100%;
          // height: 300px;
        }
        // height: 300px;
      }
    }
  }

  // 媒体查询
  @media only screen and (max-width: 1080px) {
    .swiper {
      // height: 250px;
      width: 100%;
      swiper-slide {
        width: 100%;
        // height: 100%;
        // height: 250px;
      }
    }
    #banner {
      // height: 250px;
      width: 100% !important;
      // object-fit: cover;
    }
    .main {
      .title {
        font-size: 24px;
        text-align: center;
      }
      .title1 {
        font-size: 22px;
        text-align: center;
        color: #666666;
        margin: 0;
      }
      .xian {
        display: flex;
        width: 100%;
        justify-content: space-around;
        margin: 0 auto;
        position: relative;
      }
      .xian p:first-child {
        width: 173px;
        height: 1px;
        background: #20b09f;
      }
      .xian p:nth-child(2) {
        width: 13px;
        height: 13px;
        background: #20b09f;
        transform: rotate(50deg);
        position: absolute;
        top: -20%;
      }
      .xian p:nth-child(3) {
        width: 173px;
        height: 1px;
        background: #20b09f;
      }
    }
    .main1 {
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      dl {
        width: 48%;
        background: #fff;
        box-shadow: 0px 2px 35px 0px rgba(129, 128, 128, 0.31);
        border-radius: 5px;
        font-size: 12px;
        dt {
          text-align: center;
          width: 100%;
          img {
            width: 100%;
            height: 140px;
          }
        }
        dd {
          width: 100%;
          margin: 0 auto;
          padding: 5px 10px;
        }
      }
    }
    .main2 {
      width: 95%;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
    .main3 {
      .project {
        color: #333333;
        font-size: 24px;
        text-align: center;
        font-weight: 400;
        margin: 0;
      }
    }
    .main4 {
      width: 95%;
      margin: 6% auto;
      img {
        width: 100%;
      }
    }
    .main5 {
      font-size: 18px;
      color: #333333;
      font-weight: 400;
      text-align: center;
      width: 80%;
      margin: 0 auto;
    }
    .main6 {
      width: 95%;
      margin: 5% auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .main6img {
        width: 90%;
        margin: 1% auto;
        img {
          width: 100%;
          background: #ffffff;
          box-shadow: 0px 2px 35px 0px rgba(129, 128, 128, 0.19);
          border-radius: 5px;
        }
        .main6head {
          display: flex;
          margin-left: 40px;
          padding-top: 30px;
          position: relative;
          .sw {
            width: 10px;
            height: 10px;
            background: #20b09f;
            transform: rotate(50deg);
            position: absolute;
            top: 43%;
            left: -20px;
          }
        }
        .main6head1 {
          display: flex;
          margin-left: 40px;

          p {
            margin-top: 0;
          }
          position: relative;
          .sw {
            width: 10px;
            height: 10px;
            background: #20b09f;
            transform: rotate(50deg);
            position: absolute;
            top: 10%;
            left: -20px;
          }
        }
        .main6img {
          width: 90%;
          margin: 5% auto;
          img {
            width: 100%;
            height: 200px;
            object-fit: cover;
          }
          // height: 300px;
        }
        // height: 300px;
      }
    }
    .foot {
      background: url(../../assets/foot.png) no-repeat;
      height: 120px;
      font-size: 20px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
      line-height: 120px;
      text-align: center;
    }
  }
}
</style>
