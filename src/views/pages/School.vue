<template>
  <div class="school">
    <!-- banner -->
    <div class="banner">
      <el-carousel :height="winwid + 'px'" class="pc">
        <el-carousel-item v-for="(item, index) in banner" :key="index">
          <h3 class="small">
            <img :src="item.image" alt="山东柏瑞科技有限公司" />
          </h3>
        </el-carousel-item>
      </el-carousel>
      <!-- <el-carousel height="260px" id="phone">
        <el-carousel-item v-for="(item, index) in banner" :key="index">
          <img :src="item.image" />
        </el-carousel-item>
      </el-carousel> -->
    </div>
    <!-- 中间盒子 -->
    <div class="con">
      <!-- 我们的职责范围 -->
      <div class="first">
        <p class="title">{{ zhize }}</p>
        <p class="bg"></p>
        <div class="zhize">
          <dl v-for="(item, index) in zzfw" :key="index">
            <dt><img :src="item.image" /></dt>
            <dd>{{ item.title }}</dd>
          </dl>
        </div>
      </div>
      <!-- 山东交通职业学院泰山校区 -->
      <div class="second">
        <p class="title">{{ xiao1 }}</p>
        <p class="bg"></p>
        <div class="tuw">
          <dl v-for="(item, index) in xiao" :key="index">
            <dt><img :src="item.image" alt="" /></dt>
            <dd class="name">{{ item.title }}</dd>
            <dd>{{ item.desc }}</dd>
          </dl>
        </div>
      </div>
      <!-- 山东交通职业学院泰山校区 -->
      <div class="second">
        <p class="title">{{ xiao2 }}</p>
        <p class="bg"></p>
        <div class="tuw">
          <dl v-for="(item, index) in fu" :key="index">
            <dt><img :src="item.image" alt="" /></dt>
            <dd class="name">{{ item.title }}</dd>
            <dd>{{ item.desc }}</dd>
          </dl>
        </div>
      </div>
      <!-- 山东交通职业学院泰山校区 -->
      <div class="second">
        <p class="title">{{ xiao3 }}</p>
        <p class="bg"></p>
        <div class="tuw">
          <dl v-for="(item, index) in zi" :key="index">
            <dt><img :src="item.image" alt="" /></dt>
            <dd class="name">{{ item.title }}</dd>
            <dd>{{ item.desc }}</dd>
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
          <!-- <dl v-for="(item, index) in tese" :key="index">
            <dt><img :src="item.image" /></dt>
            <dd>{{ item.title }}</dd>
          </dl> -->
          <div v-for="(item, index) in tese" :key="index" class="tuw_content">
            <div class="tuw_img">
              <img :src="item.image" alt="" />
            </div>
            <div class="tuw_tit">{{ item.title }}</div>
          </div>
        </div>
      </div>
      <!-- 合作院校 -->
      <div class="fourth">
        <p class="title">{{ hezuo }}</p>
        <p class="grey">{{ yuanx1 }}</p>
        <div class="xue">
          <dl
            v-for="(item, index) in yuanxi"
            :key="index"
            @mouseover="aaa(index)"
            :class="index == numindex ? 'addClass' : ''"
          >
            <dt><img :src="item.image" /></dt>
            <dd class="name">{{ item.name }}</dd>
            <dd class="text">{{ item.desc }}</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getSchoolban,
  getSchoolduty,
  getSchoolSchooles,
  getSchoolSchooltwo,
  getSchoolSchoolthree,
  getSchooldutytwo,
  getSchoolSchools,
} from "../../api/http.js";

export default {
  name: "School",
  components: {
    // Swiper,
    // SwiperSlide,
  },
  data() {
    return {
      banner: [],
      numindex: null,
      zhize: "我们的职责范围",
      xiao1: "山东交通职业学院泰山校区",
      xiao2: "山东省城市服务技师学院",
      xiao3: "淄博市技师学院",
      zzfw: [],
      xiao: [],
      liang: "特色亮点",
      hezuo: "合作院校",
      yuanx1: "我们一直与众多院校建立友好的合作关系",
      yuanx: [],
      fu: [],
      zi: [],
      tese: [],
      yuanxi: [],
      screenWidth: 1920,
      winwid: 736,
    };
  },
  methods: {
    aaa(index) {
      // console.log(index);
      this.numindex = index;
    },
    setschool() {
      var that = this;

      getSchoolban().then((res) => {
        that.banner = res.data.data;
        // console.log(that.banner);
      });

      getSchoolduty().then((res) => {
        that.zzfw = res.data.data.list;
        // console.log(that.zzfw);
      });

      getSchoolSchooles().then((res) => {
        that.xiao = res.data.data.list;
        // console.log(that.xiao);
      });

      getSchoolSchooltwo().then((res) => {
        that.fu = res.data.data.list;
        // console.log(that.fu);
      });

      getSchoolSchoolthree().then((res) => {
        that.zi = res.data.data.list;
        // console.log(that.zi);
      });

      var that = this;
      getSchooldutytwo().then((res) => {
        that.tese = res.data.data.list;
        // console.log(that.tese);
      });

      var that = this;
      getSchoolSchools().then((res) => {
        that.yuanxi = res.data.data.list;
        // console.log(that.yuanxi);
      });
    },

    // setduty() {
    // },
  },
  created() {
    this.setschool();
    // this.setduty();
    this.winwid = parseInt(document.body.clientWidth / 2.6);
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth;
        this.winwid = parseInt(this.screenWidth / 2.6);
        // // console.log(this.winwid);
        // // console.log(this.screenWidth);
      })();
    };
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
        margin: 1rem auto 20px;
      }

      .zhize {
        width: 100%;
        margin: 0 auto;
        justify-content: space-around;
        display: flex;

        dl {
          margin: 1rem 0;

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

        .tuw_content {
          .tuw_img {
            text-align: center;
          }
        }

        dl {
          box-shadow: 2px 4px 20px 8px #e8e8e8;
          padding-bottom: 0.5rem;
          border-radius: 10px;

          img {
            width: 100%;
            height: 210px;
            display: inline-block;
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
        div {
          margin-top: 20px;
        }
        .tuw_content {
          margin-top: 20px;
          .tuw_img {
            text-align: center;
            margin-bottom: 20px;
            img {
              width: 40px;
            }
          }
        }
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
              width: 100%;
              margin-top: 1.4rem;
            }
          }

          dd {
            width: 74%;
            line-height: 1.8rem;
            float: left;
            margin-left: 4%;
          }

          // .name {
          //   font-size: 18px;
          // }

          .text {
            color: #666666;
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
            line-height: 2rem;
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
        margin-top: 3rem;
        // justify-content: center !important;
       
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
          .name {
            font-size: 18px;
          }

          .text {
            font-size: 15px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
            overflow: hidden;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1080px) {
    .banner {
      #pc {
        // display: none;
        img {
          width: 100%;
          height: 100%;
        }
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
        font-size: 18px;
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
            font-size: 13px;
          }
        }
      }
    }
    .con {
      .second {
        width: 96%;
        margin-top: 3rem;

        .title {
          font-size: 18px;
        }

        .bg {
          width: 50%;
          height: 8px;
        }

        .tuw {
          width: 96%;
          flex-wrap: wrap;
          margin: auto;
          .tuw_content {
            width: 40%;
            text-align: center;
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
            margin-left: 24%;
          }
        }

        .text {
          left: 41%;
          font-size: 18px !important;
          // text-align: center;
        }
      }

      .tuw {
        width: 94%;
        margin: 0 auto;
        flex-wrap: wrap;
        margin-top: 0%;

          justify-content: center !important;
        .tuw_content {
          width: 48%;
          margin-top: 20px;
          // border: 1px solid #000;
          font-size: 13px;
          text-align: center;
          // margin-left: 2%;
          .tuw_img {
            text-align: center;
            margin-bottom: 20px;
            img {
              width: 40px;
            }
          }
        }

        dl {
          width: 48%;
          margin-top: 4rem;

          img {
            // width: 10%;
            // margin-left: 40%;
            height: 2rem;
          }

          dd {
            font-size: 12px !important;
          }
        }
      }
    }

    .fourth {
      width: 98%;

      .title {
        margin-top: 2rem;
        font-size: 18px;
      }

      .grey {
        font-size: 16px;
      }

      .xue {
        width: 90%;
        margin: 0 auto;

        dl {
          width: 100%;

          .name {
            font-size: 15px;
          }

          .text {
            font-size: 14px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
        }
      }
    }
  }
}
</style>
