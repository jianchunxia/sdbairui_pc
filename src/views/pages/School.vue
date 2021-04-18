<template>
  <div class="school">
    <!-- banner -->
    <div class="banner">
      <el-carousel height="580px" id="pc">
        <el-carousel-item v-for="(item, index) in banner" :key="index">
          <img :src="item.ban" />
        </el-carousel-item>
      </el-carousel>
      <el-carousel height="320px" id="phone">
        <el-carousel-item v-for="(item, index) in banner" :key="index">
          <img :src="item.ban" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- <swiper :space-between="50" class="swiper" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <swiper-slide v-for="(item, index) in banner" :key="index">
        <img :src="item.src" alt="" id="banner" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper> -->
    <!-- 中间盒子 -->
    <div class="con">
      <!-- 我们的职责范围 -->
      <div class="first">
        <p class="title">{{ zhize }}</p>
        <p class="bg"></p>
        <div class="zhize">
          <dl v-for="(item, index) in zzfw" :key="index">
            <dt><img :src="item.img" /></dt>
            <dd>{{ item.text }}</dd>
          </dl>
        </div>
      </div>
      <!-- 山东交通职业学院泰山校区 -->
      <div class="second" v-for="(item, index) in xiao" :key="index">
        <p class="title">{{ item.xiao }}</p>
        <p class="bg"></p>
        <div class="tuw">
          <dl v-for="(items, index) in item.nei" :key="index">
            <dt><img :src="items.img" alt="" /></dt>
            <dd class="name">{{ items.name }}</dd>
            <dd>{{ items.text }}</dd>
          </dl>
        </div>
      </div>
      <!-- 特色亮点 -->
      <div class="third">
        <div class="title">
          <p class="bor">
            <span></span>
            <span class="ri"></span>
          </p>
          <p class="text">{{ liang }}</p>
        </div>
        <div class="tuw">
          <dl v-for="(item, index) in tese" :key="index">
            <dt><img :src="item.img" /></dt>
            <dd>{{ item.text }}</dd>
          </dl>
        </div>
      </div>
      <!-- 合作院校 -->
      <div class="fourth">
        <p class="title">{{ hezuo }}</p>
        <p class="grey">{{ yuanx }}</p>
        <div class="xue">
          <dl
            v-for="(item, index) in yuanxi"
            :key="index"
            @mouseover="aaa(index)"
            :class="index == numindex ? 'addClass' : ''"
          >
            <dt><img :src="item.img" /></dt>
            <dd class="name">{{ item.name }}</dd>
            <dd class="text">{{ item.text }}</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import "swiper/swiper-bundle.css";
import { getData } from "../../api/http.js";

export default {
  name: "School",
  components: {
    // Swiper,
    // SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: "swiper-pagination",
          // type:'bullets',
          // clickble:true,
          // dynamicBullets:false
        },
        // speed:1000,
        // autoplay:{
        //   delay:3000,
        //   disableOnInteraction:false
        // },
        // effect:'slide',
        navigation: {
          nextEl: "swiper-button-prev",
          prevEl: "swiper-button-next",
        },
      },
      numindex: null,
      zhize: "我们的职责范围",
      // banner: [
      //   { src: require("../../assets/schban.png") },
      //   { src: require("../../assets/schban.png") },
      //   { src: require("../../assets/schban.png") },
      //   { src: require("../../assets/schban.png") },
      // ],
      zzfw: [
        { img: require("../../assets/zhaos.png"), text: "独立招生" },
        { img: require("../../assets/guanl.png"), text: "90%教学+学生管理" },
        { img: require("../../assets/shix.png"), text: "实训实习" },
        { img: require("../../assets/jiuye.png"), text: "就业安置" },
      ],
      xiao: [
        {
          xiao: "山东交通职业学院泰山校区",
          nei: [
            {
              img: require("../../assets/10.png"),
              name: "办公楼",
              text:
                " 办公楼雅致低调，开展各类教学活动组织各项教学管理会议，为学生的健康成长保驾护航。",
            },
            {
              img: require("../../assets/10.png"),
              name: "办公楼",
              text:
                " 办公楼雅致低调，开展各类教学活动组织各项教学管理会议，为学生的健康成长保驾护航。",
            },
            {
              img: require("../../assets/10.png"),
              name: "办公楼",
              text:
                " 办公楼雅致低调，开展各类教学活动组织各项教学管理会议，为学生的健康成长保驾护航。",
            },
            {
              img: require("../../assets/10.png"),
              name: "办公楼",
              text:
                " 办公楼雅致低调，开展各类教学活动组织各项教学管理会议，为学生的健康成长保驾护航。",
            },
          ],
        },
        {
          xiao: "山东省城市服务技师学院",
          nei: [
            {
              img: require("../../assets/10.png"),
              name: "办公楼",
              text:
                " 办公楼雅致低调，开展各类教学活动组织各项教学管理会议，为学生的健康成长保驾护航。",
            },
            {
              img: require("../../assets/10.png"),
              name: "办公楼",
              text:
                " 办公楼雅致低调，开展各类教学活动组织各项教学管理会议，为学生的健康成长保驾护航。",
            },
            {
              img: require("../../assets/10.png"),
              name: "办公楼",
              text:
                " 办公楼雅致低调，开展各类教学活动组织各项教学管理会议，为学生的健康成长保驾护航。",
            },
            {
              img: require("../../assets/10.png"),
              name: "办公楼",
              text:
                " 办公楼雅致低调，开展各类教学活动组织各项教学管理会议，为学生的健康成长保驾护航。",
            },
          ],
        },
        {
          xiao: "淄博市技师学院",
          nei: [
            {
              img: require("../../assets/10.png"),
              name: "办公楼",
              text:
                " 办公楼雅致低调，开展各类教学活动组织各项教学管理会议，为学生的健康成长保驾护航。",
            },
            {
              img: require("../../assets/10.png"),
              name: "办公楼",
              text:
                " 办公楼雅致低调，开展各类教学活动组织各项教学管理会议，为学生的健康成长保驾护航。",
            },
            {
              img: require("../../assets/10.png"),
              name: "办公楼",
              text:
                " 办公楼雅致低调，开展各类教学活动组织各项教学管理会议，为学生的健康成长保驾护航。",
            },
            {
              img: require("../../assets/10.png"),
              name: "办公楼",
              text:
                " 办公楼雅致低调，开展各类教学活动组织各项教学管理会议，为学生的健康成长保驾护航。",
            },
          ],
        },
      ],
      liang: "特色亮点",
      tese: [
        {
          img: require("../../assets/shuju.png"),
          text: "因材施教，分层培养。",
        },
        {
          img: require("../../assets/shuju.png"),
          text: "24小时陪伴，保姆式管理。",
        },
        {
          img: require("../../assets/hezuo.png"),
          text: "时时教育，机会教育。",
        },
        {
          img: require("../../assets/shouc.png"),
          text: "技能+综合素养，双线培养。",
        },
      ],
      hezuo: "合作院校",
      yuanx: "我们一直与众多院校建立友好的合作关系",
      yuanxi: [
        {
          img: require("../../assets/30.png"),
          name: "山东交通职业学院",
          text:
            "山东交通职业学院由一所山东省人民政府举办的全日制公办普通高等学校，2010年被中华人民共和国交通运输部确立为交通职业教育示范院校，并入选山东省示范性高等职业院校。",
        },
        {
          img: require("../../assets/30.png"),
          name: "山东交通职业学院",
          text:
            "山东交通职业学院由一所山东省人民政府举办的全日制公办普通高等学校，2010年被中华人民共和国交通运输部确立为交通职业教育示范院校，并入选山东省示范性高等职业院校。",
        },
        {
          img: require("../../assets/30.png"),
          name: "山东交通职业学院",
          text:
            "山东交通职业学院由一所山东省人民政府举办的全日制公办普通高等学校，2010年被中华人民共和国交通运输部确立为交通职业教育示范院校，并入选山东省示范性高等职业院校。",
        },
        {
          img: require("../../assets/30.png"),
          name: "山东交通职业学院",
          text:
            "山东交通职业学院由一所山东省人民政府举办的全日制公办普通高等学校，2010年被中华人民共和国交通运输部确立为交通职业教育示范院校，并入选山东省示范性高等职业院校。",
        },
        {
          img: require("../../assets/30.png"),
          name: "山东交通职业学院",
          text:
            "山东交通职业学院由一所山东省人民政府举办的全日制公办普通高等学校，2010年被中华人民共和国交通运输部确立为交通职业教育示范院校，并入选山东省示范性高等职业院校。",
        },
        {
          img: require("../../assets/30.png"),
          name: "山东交通职业学院",
          text:
            "山东交通职业学院由一所山东省人民政府举办的全日制公办普通高等学校，2010年被中华人民共和国交通运输部确立为交通职业教育示范院校，并入选山东省示范性高等职业院校。",
        },
      ],
      // banner: [
      //   { ban: require("../../assets/schban.png") },
      //   { ban: require("../../assets/schban.png") },
      //   { ban: require("../../assets/schban.png") },
      //],
    };
  },
  // computed:{
  //   Swiper(){
  //     return this.$refs.mySwiper.swiper
  //   }
  // },
  // mounted(){
  //     this.swiper.slideTo(3, 1000, false)
  // },
  methods: {
    aaa(index) {
      console.log(index);
      this.numindex = index;
      // getData();
      // getData()
    },
    // tonext(){
    //   var swiper =  this.$refs.mySwiper;
    //   swiper.slidePrev();
    // }
  },
  created() {
    // getData()
    this.setindex();
  },
  setindex() {
    var that = this;
    getData().then((res) => {
      console.log(res);
      that.banner = res.data.data.img;
    });
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.swiper-pagination {
  border: 1px solid #000;
  z-index: 99;
}

.swiper {
  height: 580px;
  width: 100%;
  swiper-slide {
    width: 100%;
    height: 580px;
  }
}
#banner {
  height: 580px;
  width: 100% !important;
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

.banner {
  width: 100%;

  img {
    width: 100%;
    height: 100%;
  }
}

.school {
  width: 100%;

  .con {
    width: 100%;

    .first {
      margin: 0 auto;
      margin-top: 2rem;

      .title {
        text-align: center;
        padding-top: 1rem;
      }

      .bg {
        background: url("../../assets/zhize.png") no-repeat center center;
        background-size: 100% 100%;
        margin: 1rem auto 0;
      }

      .zhize {
        width: 100%;
        margin: 0 auto;
        justify-content: space-around;
        display: flex;

        dl {
          margin: 3rem 0;

          img {
            width: 40%;
            margin-left: 30%;
          }

          dd {
            text-align: center;
            margin-top: 0.6rem;
          }
        }
      }
    }

    .second {
      margin: 0 auto;

      .title {
        text-align: center;
        margin-top: 3rem;
      }

      .bg {
        background: url("../../assets/xue.png") no-repeat center center;
        background-size: 100% 100%;
        margin: 1rem auto;
      }

      .tuw {
        width: 100%;
        justify-content: space-around;
        display: flex;

        dl {
          box-shadow: 2px 4px 20px 8px #e8e8e8;
          padding-bottom: 0.5rem;
          border-radius: 10px;

          img {
            width: 100%;
          }

          dd {
            width: 100%;
            color: #666666;
            margin-top: 0.8rem;
            width: 92%;
            margin: 0 auto;
            text-indent: 0.5rem;
          }

          .name {
            font-size: 16px;
            color: #000;
            text-indent: 0;
          }
        }
      }
    }

    .third {
      width: 100%;
      margin-top: 2rem;
      background-color: #eeeeee;
      padding: 2rem 0;

      .title {
        position: relative;
        .bor {
          text-align: center;

          span {
            border-bottom: 2px solid #20b09f;
          }
        }

        .text {
          font-size: 22px;
          color: #20b09f;
          position: absolute;
          top: 0.4rem;
        }
      }

      .tuw {
        justify-content: space-between;
        display: flex;

        dl {
          dd {
            text-align: center;
            margin-top: 1rem;
          }
        }
      }
    }

    .fourth {
      margin: 0 auto;
      margin-bottom: 2rem;

      .title {
        text-align: center;
      }

      .grey {
        text-align: center;
        color: #666666;
        margin-top: 1rem;
      }

      .xue {
        justify-content: space-around;
        display: flex;
        flex-wrap: wrap;

        dl {
          padding: 1rem 2%;
          box-shadow: 2px 4px 20px 8px #e8e8e8;
          overflow: hidden;
          margin-top: 2rem;
          // border:1px red solid;
          transition: all 0.5s ease-out;
          background-color: #fff;
          dt {
            width: 22%;
            float: left;

            img {
              width: 92%;
              margin-top: 1.4rem;
            }
          }

          dd {
            width: 74%;
            line-height: 1.8rem;
            float: left;
            margin-left: 4%;
          }

          .name {
            font-size: 18px;
          }

          .text {
            color: #666666;
            font-size: 15px;
          }
        }
        .addClass {
          transform: scale(1.1);

          img {
            transform: scale(1.1);
          }
        }
      }
    }
  }
  @media screen and (min-width: 1085px) {
    .banner {
      #pc {
        display: block;
      }

      #phone {
        display: none;
      }
    }

    .first {
      max-width: 1200px;
      box-shadow: 2px 4px 20px 3px #e8e8e8;

      .title {
        font-size: 24px;
      }

      .bg {
        width: 414px;
        height: 15px;
      }

      .zhize {
        justify-content: space-around;
        display: flex;

        dl {
          width: 25%;
          dd {
            font-size: 20px;
          }
        }
      }
    }

    .second {
      max-width: 1200px;
      margin-top: 4rem;

      .title {
        font-size: 24px;
      }

      .bg {
        width: 383px;
        height: 15px;
      }

      .tuw {
        width: 100%;

        dl {
          width: 23%;
          margin-top: 3rem;

          dd {
            line-height: 2.4rem;
            font-size: 15px;
          }
        }
      }
    }

    .third {
      .title {
        .bor {
          span {
            padding: 0 3%;
          }

          .ri {
            margin-left: 8%;
          }
        }

        .text {
          left: 47.8%;
        }
      }

      .tuw {
        max-width: 1200px;
        margin: 0 auto;
        margin-top: 6rem;

        dl {
          width: 25%;

          img {
            width: 16%;
            margin-left: 39%;
            height: 2.6rem;
          }

          dd {
            font-size: 19px;
          }
        }
      }
    }

    .fourth {
      max-width: 1200px;

      .title {
        margin-top: 3rem;
        font-size: 24px;
      }

      .grey {
        font-size: 22px;
      }

      .xue {
        width: 100%;
        margin-top: 2rem;

        dl {
          width: 40%;
        }
      }
    }
  }

  @media screen and (max-width: 1080px) {
    .banner {
      #pc {
        display: none;
      }

      #phone {
        display: block;
      }
    }
    .swiper {
      height: 250px;
      width: 100%;
      swiper-slide {
        width: 100%;
        height: 250px;
      }
    }
    #banner {
      height: 250px;
      width: 100% !important;
    }

    .first {
      width: 88%;
      // max-width: 1200px;
      box-shadow: none;

      .title {
        font-size: 20px;
      }

      .bg {
        width: 100%;
        height: 10px;
      }

      .zhize {
        flex-wrap: wrap;
        box-shadow: 2px 4px 20px 3px #e8e8e8;

        dl {
          width: 50%;
          margin: 1rem 0;

          dd {
            font-size: 16px;
          }
        }
      }
    }

    .second {
      width: 96%;
      margin-top: 3rem;

      .title {
        font-size: 20px;
      }

      .bg {
        width: 50%;
        height: 8px;
      }

      .tuw {
        width: 100%;
        flex-wrap: wrap;

        dl {
          width: 47%;
          margin-top: 1rem;

          dd {
            line-height: 1.6rem;
            font-size: 14px;
          }
        }
      }
    }

    .third {
      .title {
        .bor {
          span {
            padding: 0 8%;
          }

          .ri {
            margin-left: 20%;
          }
        }

        .text {
          left: 45%;
          // text-align: center;
        }
      }

      .tuw {
        width: 100%;
        flex-wrap: wrap;
        margin-top: 0%;

        dl {
          width: 50%;
          margin-top: 4rem;

          img {
            width: 10%;
            margin-left: 40%;
            height: 2rem;
          }

          dd {
            font-size: 16px;
          }
        }
      }
    }

    .fourth {
      width: 98%;

      .title {
        margin-top: 2rem;
        font-size: 20px;
      }

      .grey {
        font-size: 18px;
      }

      .xue {
        width: 90%;
        margin: 0 auto;

        dl {
          width: 100%;
        }
      }
    }
  }
}
</style>
