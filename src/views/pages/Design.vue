<template>
  <div id="design">
    <div class="banner">
      <img :src="banner" alt="" />
    </div>
    <div class="jie width" v-for="(item, index) in sign" :key="index">
      <div class="name">
        {{ item.title }}
      </div>
      <div class="shao">
        {{ item.content }}
      </div>
    </div>
    <el-carousel
      height="180px"
      class="width ban one"
      :autoplay="false"
      arrow="always"
    >
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <h3 class="small">
          <img :src="item.src1" alt="" />
          <img :src="item.src1" alt="" />
          <img :src="item.src1" alt="" />
        </h3>
      </el-carousel-item>
    </el-carousel>
    <el-carousel
      height="480px"
      class="width ban two"
      :autoplay="false"
      arrow="always"
    >
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <h3 class="small">
          <img :src="item.src1" alt="" />
          <img :src="item.src2" alt="" />
          <img :src="item.src3" alt="" />
        </h3>
      </el-carousel-item>
    </el-carousel>
    <div class="soft width">
      <div class="title">
        <p class="t1">{{ title2 }}</p>
        <p class="p1">{{ p1 }}</p>
      </div>
      <div class="list">
        <dl v-for="(items, index) in list" :key="index">
          <dt><img :src="items.image" alt="" /></dt>
          <dd>{{ items.title }}</dd>
        </dl>
      </div>
    </div>
    <div class="soft width">
      <div class="title">
        <p class="t1">{{ title3 }}</p>
        <p class="p1">{{ p2 }}</p>
      </div>
      <div class="list">
        <dl v-for="(items, index) in lists" :key="index">
          <dt><img :src="items.image" alt="" /></dt>
          <dd>{{ items.title }}</dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getIndexBR,
  getBaiRuiLUn,
  getBaiRuiXM,
  getBaiRuiYJ,
  getDesignindex,
} from "../../api/http.js";

export default {
  data() {
    return {
      sign: [],
      banners: [
        {
          src1: require("../../assets/design3.jpeg"),
          src2: require("../../assets/design3.jpeg"),
          src3: require("../../assets/design3.jpeg"),
          src4: require("../../assets/design3.jpeg"),
        },
        {
          src1: require("../../assets/design3.jpeg"),
          src2: require("../../assets/design3.jpeg"),
          src3: require("../../assets/design3.jpeg"),
          src4: require("../../assets/design3.jpeg"),
        },
        {
          src1: require("../../assets/design3.jpeg"),
          src2: require("../../assets/design3.jpeg"),
          src3: require("../../assets/design3.jpeg"),
          src4: require("../../assets/design3.jpeg"),
        },
      ],

      dataList: [
        "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg",
        "https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg",
        "https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg",
      ],
      // currentIndex: 0, //默认显示图片
      // timer: null, //定时器
      banner: require("../../assets/designBanner.png"),
      design: "柏瑞设计",
      jie:
        "山东柏瑞设计有限公司是山东柏瑞软件科技有限公司全资子公司。柏瑞设计公司主营软件和设计方向开发。在柏瑞设计，只有简洁的提案、精要优化的服务流程，为客户提供最佳的选择。不忘初心，方得始终，柏瑞设计，值得您的信赖。",

      title2: "软件业务",
      p1: "承接各类软件开发",
      list: [
        {
          src: require("../../assets/design1.png"),
          dd: "网站开发",
        },
        {
          src: require("../../assets/design2.png"),
          dd: "小程序开发",
        },
        {
          src: require("../../assets/design4.png"),
          dd: "APP开发",
        },
        {
          src: require("../../assets/design5.png"),
          dd: "商城开发",
        },
        {
          src: require("../../assets/design6.png"),
          dd: "公众号开发",
        },
        {
          src: require("../../assets/design7.png"),
          dd: "后台管理开发",
        },
      ],

      title3: "设计业务",
      p2: "涵盖平面、电商等各个领域",
      lists: [
        {
          src: require("../../assets/design8.png"),
          dd: "标志设计",
        },
        {
          src: require("../../assets/design9.png"),
          dd: "包装设计",
        },
        {
          src: require("../../assets/design10.png"),
          dd: "VI设计",
        },
        {
          src: require("../../assets/design11.png"),
          dd: "画册设计",
        },
        {
          src: require("../../assets/design12.png"),
          dd: "网站设计",
        },
        {
          src: require("../../assets/design13.png"),
          dd: "电商设计",
        },
      ],
    };
  },
  methods: {
    gotoPage(index) {
      this.currentIndex = index;
    },
    Design() {
      var that = this;
      getIndexBR().then((res) => {
        that.sign = res.data.data;
        // console.log(that.sign)
      });
      getBaiRuiLUn().then((res) => {
        that.banners = res.data.data;
        // console.log(that.banners)
      });
      // getBaiRuiXM().then(res=>{
      //   that.list = res.data.data
      //   // console.log(that.list)
      // })
      getBaiRuiYJ().then((res) => {
        console.log(res);
        that.lists = res.data.data;
        // console.log(that.lists)
      });
    },
  },
  created() {
    this.Design();
  },
};
</script>
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #000;
}

li {
  list-style: none;
}

.width {
  max-width: 1200px;
  margin: 0 auto;
}

#design {
  width: 100%;

  .banner {
    width: 100%;

    img {
      width: 100%;
      // height: 170px;
      height: 100%;
    }
  }

  .jie {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 35px 0px rgba(106, 106, 106, 0.17);
    border-radius: 5px;
    margin-bottom: 30px;
    .name {
      width: 96px;
      color: #20b09f;
      font-size: 48px;
      padding: 20px;
    }
  }
  .ban {
    // margin-top: 30px;
    box-shadow: 0px 2px 35px 0px rgba(106, 106, 106, 0.36);
    border-radius: 8px;
    h3 {
      padding: 40px 0px;
      display: flex;
      justify-content: center;
      img {
        width: 24%;
        // height: 120px;
        margin: 0 10px;
      }
    }
    .ban >>> .el-carousel__button {
      background: #ff4545;
    }
  }
  .two {
    display: none;
  }
  .soft {
    padding-bottom: 60px;

    .title {
      margin: 0 auto;
      text-align: center;

      .t1 {
        color: #20ae9e;
        font-weight: 600;
        border-bottom: 2px solid #20ae9e;
      }

      .p1 {
        width: 100%;
        margin: 0 auto;
        color: #333333;
        line-height: 30px;
      }
    }

    .list {
      display: flex;
      justify-self: unset;
      justify-content: space-between;
      flex-wrap: wrap;
      text-align: center;

      dl {
        dt {
          overflow: hidden;

          img {
            width: 100%;
            // height: 286px;
          }
        }

        dd {
          padding: 21px 0px 22px 0px;
        }
      }
    }
  }

  @media screen and (min-width: 1085px) {
    .ban {
      // margin-top: 30px;
      box-shadow: 0px 2px 35px 0px rgba(106, 106, 106, 0.36);
      border-radius: 8px;
      .one {
        padding: 40px 0px;
        display: flex;
        justify-content: center;
        img {
          width: 4%;
          height: 100px;
          margin: 0 10px;
        }
      }
    }

    .banner {
      img {
        height: 484px;
      }
    }

    .jie {
      margin-top: 40px;

      .name {
        width: 96px;
        font-size: 48px;
      }

      .shao {
        width: 75%;
        padding: 20px;
        font-size: 24px;
      }
    }
    .one {
      display: none;
      img {
        width: 10%;
        height: 100%;
      }
    }
    .two {
      display: block;
    }

    .soft {
      margin-top: 6%;

      .title {
        width: 30%;
        margin: 0 auto;
        text-align: center;

        .t1 {
          font-size: 38px;
          line-height: 50px;
        }

        .p1 {
          font-size: 22px;
          padding-top: 15px;
        }
      }

      .list {
        margin-top: 49px;

        dl {
          width: 32%;
        }
      }
    }
  }

  @media screen and (max-width: 1080px) {
    .banner {
      img {
        height: 154px;
      }
    }

    .jie {
      margin-top: 0px;
      padding: 10px 0px;

      .name {
        width: 100px;
        font-size: 38px;
      }

      .shao {
        width: 74%;
        padding: 10px;
        font-size: 16px;
      }
    }

    .soft {
      width: 94%;
      margin: 0px auto;
      margin-top: 8%;

      .title {
        width: 70%;
        margin: 0 auto;
        text-align: center;

        .t1 {
          color: #20ae9e;
          font-size: 25px;
          font-weight: 600;
          line-height: 36px;
          border-bottom: 2px solid #20ae9e;
        }

        .p1 {
          font-size: 18px;
          padding-top: 10px;
        }
      }

      .list {
        text-align: center;
        margin-top: 6%;

        dl {
          width: 48%;
        }
      }
    }
  }
}
</style>
