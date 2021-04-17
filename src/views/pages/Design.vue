<template>
  <div id="design">
    <div class="banner">
      <img :src="banner" alt="" />
    </div>
    <div class="jie width">
      <div class="name">
        {{ design }}
      </div>
      <div class="shao">
        {{ jie }}
      </div>
    </div>
    <!-- <div class="element width">
      <div class="item">
        <img :src="dataList[currentIndex]">
        <div>
          <img :src="dataList[currentIndex].img" alt="">
        </div>
      </div>
      <div class="page" v-if="this.dataList.length > 1">
    <ul>
      <li @click="gotoPage(prevIndex)">&lt;</li>
      <div v-for="(item,index) in dataList" :key="index" @click="gotoPage(index)"  :class="{'current':currentIndex == index}" >
      </div>
      <li @click="gotoPage(nextIndex)">&gt;</li>
    </ul>
  </div> -->
    <!-- </div> -->

    <div class="soft width" v-for="(item, index) in soft" :key="index">
      <div class="title">
        <p class="t1">{{ item.title2 }}</p>
        <p class="p1">{{ item.p1 }}</p>
      </div>
      <div class="list">
        <dl v-for="(items, index) in item.list" :key="index">
          <dt><img :src="items.src" alt="" /></dt>
          <dd>{{ items.dd }}</dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataList: [
        "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg",
        "https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg",
        "https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg",
      ],
      currentIndex: 0, //默认显示图片
      timer: null, //定时器

      banner: require("../../assets/designBanner.png"),
      design: "柏瑞设计",
      jie:
        "山东柏瑞设计有限公司是山东柏瑞软件科技有限公司全资子公司。柏瑞设计公司主营软件和设计方向开发。在柏瑞设计，只有简洁的提案、精要优化的服务流程，为客户提供最佳的选择。不忘初心，方得始终，柏瑞设计，值得您的信赖。",

      soft: [
        {
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
        },
        {
          title2: "设计业务",
          p1: "涵盖平面、电商等各个领域",
          list: [
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
        },
      ],
    };
  },
  methods: {
    gotoPage(index) {
      this.currentIndex = index;
    },
  },
  computed: {
    //上一张
    // prevIndex() {
    //   if(this.currentIndex == 0) {
    //     return this.dataList.length - 1;
    //   }else{
    //     return this.currentIndex - 1;
    //   }
    // },
    //下一张
    // nextIndex() {
    //   if(this.currentIndex == this.dataList.length - 1) {
    //     return 0;
    //   }else {
    //     return this.currentIndex + 1;
    //   }
    // },
    // runInv() {
    // this.timer = setInterval(() => {
    //   this.gotoPage(this.nextIndex)
    // }, 1000)
    // }
  },
};
</script>
<style scoped lang="scss">
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

* {
  margin: 0;
  padding: 0;
}

img {
  object-fit: cover;
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
      height: 484px;
    }
  }
  .jie {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    box-shadow: 0px 2px 35px 0px rgba(106, 106, 106, 0.17);
    border-radius: 5px;
    .name {
      width: 96px;
      color: #20b09f;
      font-size: 48px;
      padding: 20px;
      // border: 1px solid #000;
    }

    .shao {
      width: 75%;
      padding: 20px;
      font-size: 24px;
      // border: 1px solid #000;
    }
  }

  .element {
    margin-top: 34px;
    position: relative;
    // ul li {
    //     list-style: none;
    //     float: left;
    //     width: 30px;
    //     height: 40px;
    //     line-height: 40px;
    //     text-align: center;
    //     cursor: pointer;
    //     color: rgba(255,255,255,.8);
    //     font-size: 14px;
    // }
    .item {
      max-width: 100%;
      margin: 0 auto;
      position: relative;
      margin-top: 60px;
    }
    .item img {
      width: 100%;
      display: block;
    }
    .page {
      // background: rgba(0,0,0,.5);
      // position: absolute;
      right: 0;
      bottom: 0;
      width: 100%;
      text-align: center;
    }
    .page ul {
      text-align: center;
      width: 20%;
      display: flex;
      justify-content: space-between;
      // border: 1px solid #000;
      margin: 0 auto;
      text-align: center;
      cursor: pointer;
      height: 20px;
      line-height: 20px;
      // color: rgba(255,255,255,.8);
      color: #20b09f;
      div {
        width: 6px;
        height: 6px;
        background: #6a6a6a;
        border-radius: 3px;
      }
    }
    .current {
      background: #20b09f !important;
      z-index: 1234;
    }
  }

  .soft {
    margin-top: 84px;
    .title {
      width: 30%;
      margin: 0 auto;
      text-align: center;
      .t1 {
        color: #20ae9e;
        font-size: 28px;
        line-height: 36px;
        border-bottom: 2px solid #20ae9e;
      }
      .p1 {
        width: 100%;
        margin: 0 auto;
        color: #333333;
        line-height: 30px;
        font-size: 22px;
        padding-top: 15px;
      }
    }

    .list {
      display: flex;
      justify-self: unset;
      justify-content: space-between;
      flex-wrap: wrap;
      text-align: center;
      margin-top: 49px;
      dl {
        width: 32%;
        dt {
          overflow: hidden;
          img {
            width: 100%;
            height: 286px;
          }
        }

        dd {
          padding: 21px 0px 22px 0px;
        }
      }
    }
  }
}
</style>
