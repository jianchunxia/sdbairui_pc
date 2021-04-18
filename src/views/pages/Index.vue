<template>
  <div id="index">
    <div class="banner">
      <el-carousel height="580px" class="pc">
        <el-carousel-item v-for="(item, index) in banner" :key="index">
          <h3 class="small"><img :src="item.image" alt="" /></h3>
        </el-carousel-item>
      </el-carousel>
      <el-carousel height="260px" class="phone">
        <el-carousel-item v-for="(item, index) in banner" :key="index">
          <h3 class="small"><img :src="item.image" alt="" /></h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="center">
      <div class="core width">
        <div class="bo">
          <div class="title">
            <div>{{ title1 }}</div>
            <p>{{ qing }}</p>
          </div>
        </div>

        <div class="card">
          <ul class="list">
            <li
              v-for="(item, index) in list"
              :key="index"
              :class="{ current: currenta == index }"
              @mousemove="onhover(index)"
            >
              {{ item.title }}
            </li>
          </ul>
          <div class="xia">
            <block v-for="(item, index) in cards" :key="index">
              <div class="cards" v-if="index == currenta">
                <div class="image">
                  <img :src="item.image" alt="" />
                </div>
                <div class="content">
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.content }}</p>
                  <div class="tiao">
                    <router-link :to="loc[index]">查看更多>></router-link>
                  </div>
                </div>
              </div>
            </block>
          </div>
        </div>
      </div>
      <div class="teacher width">
        <div class="teacherTit">
          <img :src="teacherImg" alt="" />
        </div>
        <div class="teacherList">
          <div class="teacherli" v-for="(item, index) in teali" :key="index">
            <div class="title">
              <img :src="item.image" alt="" />
              {{ item.title }}
            </div>
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
      <div class="foster">
        <div class="width">
          <div class="bo">
            <div class="title">
              <div>{{ title2 }}</div>
              <p>{{ foster }}</p>
            </div>
          </div>

          <div class="list fourClass">
            <!-- <dl v-for="(item, index) in training" :key="index">
              <router-link :to="item.url">
                <dt>
                  <img :src="item.image" alt="" />
                  <img :src="item.src2" alt="" />
                </dt>
                <dd class="tit">
                  {{ item.name }}
                </dd>
                <dd class="con">
                  {{ item.title }}
                </dd>
              </router-link>
            </dl> -->

            <div
              @mouseover="changeOne = require('../../assets/ui-in.png')"
              @mouseleave="changeOne = require('../../assets/ui-out.png')"
            >
              <div class="img">
                <img :src="changeOne" alt="" />
                <h4>UI设计</h4>
                <p>
                  UI设计是指对软件的人机交互、操作逻辑、界面美观的整体设计。
                </p>
              </div>
            </div>
            <div
              @mouseover="changeTwo = require('../../assets/php-in.png')"
              @mouseleave="changeTwo = require('../../assets/php-out.png')"
            >
              <div class="img">
                <img :src="changeTwo" alt="" />

                <h4>PHP开发</h4>
                <p>
                  利于学习，使用广泛，主要适用于Web开发领域的服务端脚本语言。
                </p>
              </div>
            </div>
            <div
              @mouseover="changeThree = require('../../assets/java-in.png')"
              @mouseleave="changeThree = require('../../assets/java-out.png')"
            >
              <div class="img">
                <img :src="changeThree" alt="" />
                <h4>JAVA开发</h4>
                <p>
                  Java语言作为静态面向对象编程语言的代表，允许程序员以优雅的思维方式进行复杂的编程
                  。
                </p>
              </div>
            </div>
            <div
              @mouseover="changeFour = require('../../assets/web-in.png')"
              @mouseleave="changeFour = require('../../assets/web-out.png')"
            >
              <div class="img">
                <img :src="changeFour" alt="" />
                <h4>前端开发</h4>
                <p>
                  前端开发是用户端效果的代码实现，包括JavaScript、HTML5、CSS3，以及微信小程序等。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bbg">
        <div class="width">
          <ul v-for="(item, index) in bbg" :key="index">
            <li class="first">
              <span class="big">{{ item.number }}</span
              ><span>{{ item.key }}</span>
            </li>
            <li>{{ item.title }}</li>
          </ul>
        </div>
      </div>
      <div class="news width">
        <div class="bo">
          <div class="title">
            <div>{{ title3 }}</div>
            <p>{{ newp }}</p>
          </div>
          <div class="more">
            <router-link :to="newMore"
              >更多<span class="right-jt">></span></router-link
            >
          </div>
        </div>

        <div class="list">
          <dl v-for="(item, index) in news" :key="index">
            <dt><img :src="item.image" alt="" /></dt>
            <div>
              <dd class="tit">{{ item.title }}</dd>
              <dd class="content">{{ item.content }}</dd>
              <dd class="last">
                <span>{{ item.create_time }}</span>
                <span class="more">
                  <router-link @click.native="open(item.url)" to=""
                    >查看更多</router-link
                  >
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div class="pera width">
        <div class="bo">
          <div class="title">
            <div>{{ title4 }}</div>
            <p>{{ perap }}</p>
          </div>
        </div>
        <dl>
          <dt v-for="(item, index) in dt" :key="index">
            <img :src="item.image" alt="" />
          </dt>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";

// Import Swiper styles
// import "swiper/swiper-bundle.css";
import {
  getIndexBanner,
  getIndexYwu,
  getIndexBM,
  getIndexCJ,
  getIndexNew,
  getIndexHz,
} from "../../api/http.js";
export default {
  name: "Index",
  components: {
    // getIndexBan
    // Swiper,
    // SwiperSlide,
  },
  data() {
    return {
      changeOne: require("../../assets/ui-out.png"),
      changeTwo: require("../../assets/php-out.png"),
      changeThree: require("../../assets/java-out.png"),
      changeFour: require("../../assets/web-out.png"),

      currenta: 0,
      banner: [
        { src: require("../../assets/index_banner.png") },
        { src: require("../../assets/index_banner.png") },
        { src: require("../../assets/index_banner.png") },
        { src: require("../../assets/index_banner.png") },
      ],
      title1: "核心业务 · Core Business​",
      qing: "产教融合，服务大众",
      list: [
        { name: "校区事业部" },
        { name: "产业事业部" },
        { name: "柏瑞设计" },
      ],
      cards: [
        {
          src1: require("../../assets/index_core.png"),
          title: "校区事业部",
          content:
            "  校区事业部主要负责学生后期的职业技能培养。下设四个校区，分别是济南创新谷软件工厂、山东交通职业学院泰山校区、山东省城市服务技师学院和淄博市技师学院。泰安、烟台和淄博三个校区主要负责学生基本技能的学习和培养。济南创新谷软件工厂主要负责学生后期专业技能的提升和后期的真实项目实训，实现与招聘单位的无缝对接，确保高薪对口就业。",
          more: "查看更多>>",
        },
        {
          src1: require("../../assets/index_core.png"),
          title: "产业事业部",
          content:
            " 产业事业部负责学生工学交替、实训实习，下设软件工厂。软件工厂是山东柏瑞为践行 “深度产教融合”而打造的产业基地，同时以“校中厂”的形式进行组织工学交替，学生在实际工作中打磨技术能力，在为项目交付的努力中体会用户体验。经过一年左右的项目研发，积累实际工作经验，把毕业后找工作变为向更高平台的“跳槽”。",
          more: "查看更多>>",
        },
        {
          src1: require("../../assets/index_core.png"),
          title: "柏瑞设计",
          content:
            "最有价值的培养模式，最符合企业需求的课程体系，最科学的授课方式，最完善的就业保障体系，最具有口碑竞争力的教育机构。",
          more: "查看更多>>",
        },
      ],
      loc: ["school", "industry", "design"],
      teacherImg: require("../../assets/index_teacher.png"),
      teacher: [
        {
          shu: "1",
          name: "基础教学部",
        },
        {
          shu: "2",
          name: "项目研发部",
        },
        {
          shu: "3",
          name: "企业人才部",
        },
      ],
      teali: [
        {
          src: require("../../assets/index_jichu.png"),
          title: "基础教育部",
          p:
            "  基础教学部负责制定课程体系和教学计划并负责基础知识授课。根据当今软件公司的真实需求制定课程体系，并实时更新，保证学生所学课程与企业需求无缝对接。基础教学部因材施教对学生针对性培养，将课程分为编程、美工、前端三个方向，根据学生学习特点和爱好，让学生选择适合自己的专业方向。重视上机实践，让学生具备扎实的开发基本功，为进入项目研发组做足准备。",
        },
        {
          src: require("../../assets/index_shu.png"),
          title: "基础教育部",
          p:
            "  基础教学部负责制定课程体系和教学计划并负责基础知识授课。根据当今软件公司的真实需求制定课程体系，并实时更新，保证学生所学课程与企业需求无缝对接。基础教学部因材施教对学生针对性培养，将课程分为编程、美工、前端三个方向，根据学生学习特点和爱好，让学生选择适合自己的专业方向。重视上机实践，让学生具备扎实的开发基本功，为进入项目研发组做足准备。",
        },
        {
          src: require("../../assets/index_ren.png"),
          title: "基础教育部",
          p:
            "  基础教学部负责制定课程体系和教学计划并负责基础知识授课。根据当今软件公司的真实需求制定课程体系，并实时更新，保证学生所学课程与企业需求无缝对接。基础教学部因材施教对学生针对性培养，将课程分为编程、美工、前端三个方向，根据学生学习特点和爱好，让学生选择适合自己的专业方向。重视上机实践，让学生具备扎实的开发基本功，为进入项目研发组做足准备。",
        },
      ],
      title2: "培养方向· Training Direction",
      foster: "打造企业需求的高技能人才",
      // training: [
      //   {
      //     src1: require("../../assets/index_tran4.png"),
      //     src2: require("../../assets/index_tran44.png"),
      //     title: "UI设计",
      //     content: "UI设计是指对软件的人机交互操作逻辑、界面美观的整体设计。",
      //     url: "Ui",
      //   },
      //   {
      //     src1: require("../../assets/index_tran1.png"),
      //     src2: require("../../assets/index_tran11.png"),
      //     title: "UI设计",
      //     content: "UI设计是指对软件的人机交互操作逻辑、界面美观的整体设计。",
      //     url: "Php",
      //   },
      //   {
      //     src1: require("../../assets/index_tran1.png"),
      //     src2: require("../../assets/index_tran11.png"),
      //     title: "UI设计",
      //     content: "UI设计是指对软件的人机交互操作逻辑、界面美观的整体设计。",
      //     url: "Javadel",
      //   },
      //   {
      //     src1: require("../../assets/index_tran1.png"),
      //     src2: require("../../assets/index_tran11.png"),
      //     title: "UI设计",
      //     content: "UI设计是指对软件的人机交互操作逻辑、界面美观的整体设计。",
      //     url: "Webdel",
      //   },
      // ],
      bbg: [
        {
          year: "16",
          name: "年",
          tit: "校企合作",
        },
        {
          year: "26",
          name: "家",
          tit: "订单企业",
        },
        {
          year: "2248",
          name: "家",
          tit: "企业服务员",
        },
        {
          year: "5039",
          name: "名",
          tit: "培养人数",
        },
      ],
      title3: "最新动态 · News",
      newp: "纷至沓来，了解公司实时动态",
      newMore: "list",
      news: [
        {
          src: require("../../assets/index_news.png"),
          tit: "烟台校区学习经验分享",
          content:
            "有目标就有方向和动力，行动要以目标为先要想实现目标就要制定切实可行的计划，制定",
          time: "2021-03-25",
          url: "#",
        },
        {
          src: require("../../assets/index_news.png"),
          tit: "烟台校区学习经验分享",
          content:
            "有目标就有方向和动力，行动要以目标为先要想实现目标就要制定切实可行的计划，制定",
          time: "2021-03-25",
          url: "#",
        },
        {
          src: require("../../assets/index_news.png"),
          tit: "烟台校区学习经验分享",
          content:
            "有目标就有方向和动力，行动要以目标为先要想实现目标就要制定切实可行的计划，制定",
          time: "2021-03-25",
          url: "#",
        },
      ],
      title4: "合作伙伴 · Coopera",
      perap: "独木不成林，我们与优秀的第三方供应商合作，满足业务的全面需求",
      dt: [
        { dt: require("../../assets/index_coo1.png") },
        { dt: require("../../assets/index_coo2.png") },
        { dt: require("../../assets/index_coo3.png") },
        { dt: require("../../assets/index_coo4.png") },
        { dt: require("../../assets/index_coo5.png") },
        { dt: require("../../assets/index_coo6.png") },
        { dt: require("../../assets/index_coo7.png") },
        { dt: require("../../assets/index_coo8.png") },
        { dt: require("../../assets/index_coo9.png") },
        { dt: require("../../assets/index_coo10.png") },
      ],
      guang: "践行产教深度融合  助推校企紧密合作",
    };
  },
  methods: {
    open(url) {
      window.open(url);
    },

    onhover(index) {
      this.currenta = index;
    },
    index() {
      var that = this;
      getIndexBanner().then((res) => {
        that.banner = res.data.data.data;
        // console.log(that.banner)
      });
      getIndexYwu().then((res) => {
        that.cards = res.data.data.data;
        that.list = res.data.data.data;
        // console.log(that.cards)
      });
      getIndexBM().then((res) => {
        console.log(res);
        that.teali = res.data.data.data;
        // console.log(that.teali)
      });
      // getIndexPY().then((res) => {
      //   that.training = res.data.data.data;
      //   // console.log(that.training)
      // });
      getIndexCJ().then((res) => {
        that.bbg = res.data.data.data;
        // console.log(that.bbg)
      });
      getIndexNew().then((res) => {
        that.news = res.data.data.data;
      });
    },
  },
  created() {
    this.index();
    getIndexHz();
    getIndexHz().then((res) => {
      console.log(res);
      this.dt = res.data.data.data;
    });
  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.right-jt {
  margin-left: 5px;
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

.current {
  color: #20b09f;
}
#index {
  background: #fff;
  padding-top: 0;
  .center {
    .core {
      width: 100%;
      // margin-top: 71px;
      .bo {
        text-align: center;
        .title {
          display: inline-block;
          text-align: center;
          margin: 0 auto;
          margin-bottom: 30px;
          background: url(../../assets/indexBg1.png) left top no-repeat,
            url(../../assets/indexBg12.png) right bottom no-repeat;
          background-size: 6% 14%;
          p {
            color: #666666;
            font-size: 14px;
            margin-top: 5px;
          }
        }
      }

      .card {
        width: 100%;
        .list {
          margin: 0 auto;
          display: flex;
          justify-content: space-around;
        }

        .xia {
          border-top: 6px solid #20b09f;
          box-shadow: 0px 0px 35px 0px rgba(106, 106, 106, 0.31);
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          .cards {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            align-items: center;
            .image {
              margin-top: 62px;
              img {
                width: 100%;
                margin: auto;
              }
            }
            .content {
              max-width: 684px;
              overflow: hidden;
              position: relative;
              height: 100%;

              p {
                text-indent: 2em;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 5;
                overflow: hidden;
              }

              .tiao {
                a {
                  display: block;
                  text-align: center;
                  background: #20b09f;
                  color: #fff;
                  margin-top: 11px;
                  padding: 0px 12px;
                  border-radius: 10px;
                  margin-bottom: 23px;
                  position: absolute;
                  bottom: 0;
                  right: 0;
                }
              }
            }
          }
        }
      }
    }

    .teacher {
      margin: 0 auto;
      .teacherTit {
        width: 79%;
        margin: 0 auto;
        img {
          width: 100%;
        }
      }
      .teacherList {
        width: 100%;
        margin: 0 auto;
        margin-top: 50px;
        display: grid;
        .teacherli {
          border: 2px solid #20b09f;
          box-shadow: 0px 0px 22px 10px rgba(120, 118, 118, 0.26);
          .title {
            background: #20b09f;
            text-align: center;
            color: #fff;
            img {
              vertical-align: middle;
              margin-right: 2%;
            }
          }
          p {
            text-indent: 2em;
          }
        }
      }
    }

    .foster {
      width: 100%;
      background: #f6f6f6;
      padding-top: 49px;
      .width {
        .bo {
          text-align: center;
          .title {
            display: inline-block;
            text-align: center;
            margin: 0 auto;
            margin-bottom: 30px;
            background: url(../../assets/indexBg1.png) left top no-repeat,
              url(../../assets/indexBg12.png) right bottom no-repeat;
            background-size: 6% 14%;
            p {
              color: #666666;
              font-size: 14px;
              margin-top: 5px;
            }
          }
        }

        .list {
          display: flex;
          justify-self: unset;
          justify-content: space-around;
          // flex-wrap: wrap;
          text-align: center;
          > div {
            padding: 20px;
            width: 20%;
            h4 {
              margin: 10px auto;
              font-size: 20px;
            }
            p {
              text-align: left;
              font-size: 14px;
            }
            img {
              width: 60%;
            }
          }
          > div:hover {
            background: #fff;
            box-shadow: 0 0 10px gainsboro;
          }
        }
      }
    }

    .bbg {
      width: 100%;
      background: url("../../assets/indexBg2.png");
      background-attachment: fixed;
      background-repeat: no-repeat;
      background-position: center;
      max-height: 300px;
      .width {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        ul {
          text-align: center;
          color: #fff;
          font-size: 24px;
          li {
            vertical-align: top;
            span {
              vertical-align: top;
            }

            .big {
              margin-right: 10px;
            }
          }

          li:last-child {
            padding-top: 20px;
          }
        }
      }
    }

    .news {
      padding-top: 49px;
      .bo {
        text-align: center;
        .title {
          display: inline-block;
          text-align: center;
          margin: 0 auto;
          background: url(../../assets/indexBg1.png) left top no-repeat,
            url(../../assets/indexBg12.png) right bottom no-repeat;
          background-size: 6% 14%;
          p {
            color: #666666;
            font-size: 14px;
            margin-top: 5px;
          }
        }
        .more {
          text-align: right;
          margin-top: -10px;
          margin-bottom: 30px;
          span {
            color: #20b09f;
          }
        }
      }

      .list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        dl {
          position: relative;

          background: #ffffff;
          box-shadow: 0px 2px 35px 0px rgba(106, 106, 106, 0.51);
          // border-radius: 0px 0px 8px 8px;
          border-radius: 8px;
          dt {
            width: 100%;
            img {
              width: 100%;
            }
          }
          div {
            box-sizing: border-box;
            .tit {
              font-weight: bold;
              // text-align: left;
              line-height: 40px;
              color: #333333;
            }

            .content {
              text-indent: 1em;
              font-size: 14px;
              width: 100%;
              color: #666666;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }

            .last {
              color: #666666;
              overflow: hidden;
              line-height: 40px;
              margin-top: 10px;
              position: absolute;
              bottom: 10px;
              z-index: 10;
              .more {
                float: right;
                margin-right: 40px;
                a {
                  color: #333333;
                }
              }
            }
          }
        }
      }
    }
    .pera {
      padding-top: 49px;
      padding-bottom: 59px;
      .bo {
        text-align: center;
        .title {
          display: inline-block;
          text-align: center;
          margin: 0 auto;
          margin-bottom: 30px;
          background: url(../../assets/indexBg1.png) left top no-repeat,
            url(../../assets/indexBg12.png) right bottom no-repeat;
          background-size: 6% 14%;
          p {
            color: #666666;
            font-size: 10px;
            margin-top: 5px;
          }
        }
      }

      dl {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        dt {
          background: #fff;
          border: 2px solid #cecece;
          border-radius: 10px;
          img {
            width: 100%;
            border-radius: 10px;
          }
        }
        dt:hover {
          border: 2px solid #72cdc2;
        }
      }
    }
  }

  @media screen and (min-width: 1085px) {
    .banner {
      padding-top: 80px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .phone {
        display: none;
        // img {
        //   width: 100%;
        //   height: 100%;
        // }
      }
    }

    .center {
      .core {
        .bo {
          .title {
            font-size: 24px;
            padding: 30px;
            margin-top: 59px;
          }
        }

        .card {
          margin-top: 30px;

          .list {
            width: 50%;
            font-size: 22px;
          }

          .xia {
            margin: 0 auto;
            height: 379px;
            margin-top: 36px;

            .cards {
              width: 100%;

              .image {
                max-width: 292px;
              }

              .content {
                max-width: 684px;

                h4 {
                  font-size: 22px;
                  margin: 62px 0px 34px 0px;
                }

                p {
                  // font-size: 16px;
                  line-height: 40px;
                }

                .tiao {
                  width: 96px;
                  height: 40px;
                  line-height: 40px;
                }
              }
            }
          }
        }
      }

      .teacher {
        width: 100%;
        margin-top: 62px;
        margin-bottom: 52px;

        .teacherTit {
          width: 79%;

          img {
            width: 100%;
          }
        }
        .teacherList {
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 4rem;

          .teacherli {
            width: 100%;
            margin: 0 auto;
            border-radius: 13px;

            .title {
              height: 61px;
              line-height: 61px;
              border-radius: 10px;

              img {
                width: 26px;
                height: 30px;
              }
            }

            p {
              padding: 10%;
              font-size: 13px;
              line-height: 26px;
            }
          }

          .teacherli:last-child {
            .title {
              img {
                width: 27px;
                height: 27px;
              }
            }
          }
        }
      }

      .foster {
        padding-bottom: 57px;
        margin-bottom: 30px;

        .width {
          .bo {
            .title {
              font-size: 24px;
              padding: 30px;
              margin-top: 59px;
            }
          }

          .list {
            dl {
              width: 23%;
              padding: 20px 15px 14px 13px;

              dt {
                img {
                  max-width: 117px;
                  max-height: 107px;
                }
              }

              .tit {
                font-size: 20px;
              }
            }
          }
        }
      }

      .bbg {
        background-size: 100% 100%;
        padding-top: 49px;

        .width {
          padding: 105px 0px 84px 0px;

          ul {
            width: 25%;

            li {
              .big {
                font-size: 60px;
              }
            }

            li:last-child {
              padding-top: 20px;
            }
          }
        }
      }
      .news {
        .bo {
          .title {
            font-size: 24px;
            margin-top: 59px;
            padding: 30px;
          }

          .more {
            margin-top: -10px;
            margin-bottom: 30px;
          }
        }

        .list {
          dl {
            width: 30%;

            div {
              // padding: 23px;
              padding: 20px 20px 50px;

              .tit {
                // font-size: 18px;
              }

              .last {
                font-size: 16px;
                width: 100%;
              }
            }
          }
        }
      }

      .pera {
        .bo {
          .title {
            font-size: 24px;
            margin-top: 59px;
            padding: 30px;
          }
        }

        dl {
          margin-top: 20px;

          dt {
            width: 18%;
            margin-bottom: 35px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1080px) {
    .banner {
      padding-top: 60px;

      .pc {
        display: none;
      }
      .phone {
        display: block;
        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }
    }
    .fourClass {
      flex-wrap: wrap;
      > div {
        width: 35% !important;
      }
    }

    .center {
      .core {
        margin-top: 50px;
        .bo {
          .title {
            font-size: 20px;
            padding: 10px;
            margin-top: 0px;
          }
        }

        .card {
          margin-top: 0px;

          .list {
            width: 90%;
            margin: 0 auto;
            font-size: 16px;
          }

          .xia {
            width: 94%;
            margin: 0 auto;
            // height: 239px;
            margin-top: 26px;

            .cards {
              width: 98%;
              margin: 0 auto;

              .image {
                max-width: 24%;
              }

              .content {
                max-width: 66%;
                margin: 0 auto;

                h4 {
                  font-size: 18px;
                  margin: 22px 0px 14px 0px;
                }

                p {
                  font-size: 13px;
                  line-height: 22px;
                }

                .tiao {
                  font-size: 13px;
                  width: 86px;
                  height: 28px;
                  line-height: 28px;
                }
              }
            }
          }
        }
      }
      .teacher {
        width: 94%;
        margin: 0 auto;
        margin-top: 32px;
        margin-bottom: 8px;

        .teacherTit {
          width: 92%;
          margin: 0 auto;

          img {
            width: 100%;
          }
        }
        .teacherList {
          grid-template-columns: repeat(1, 1fr);
          grid-gap: 0rem;

          .teacherli {
            width: 94%;
            margin: 0 auto;
            margin-bottom: 16px;
            border-radius: 8px;
            box-shadow: none;

            .title {
              height: 41px;
              line-height: 41px;
              border-radius: 6px;
              font-size: 16px;

              img {
                width: 16px;
                height: 18px;
              }
            }

            p {
              padding: 3%;
              font-size: 13px;
              text-indent: 2em;
              line-height: 26px;
            }
          }

          .teacherli:last-child {
            .title {
              img {
                width: 22px;
                height: 22px;
              }
            }
          }
        }
      }

      .foster {
        width: 100%;
        background: #f6f6f6;
        padding-top: 49px;
        padding-bottom: 18px;
        margin-bottom: 10px;

        .width {
          width: 94%;
          margin: 0 auto;

          .bo {
            .title {
              font-size: 20px;
              padding: 10px;
              margin-top: 0px;
            }
          }
          // .foster {
          //   .list {
          //     flex-wrap: wrap !important;
          //   }
          // }
          .list {
            dl {
              width: 48%;
              padding: 18px 6px 8px 6px;

              dt {
                width: 99%;
                text-align: center;

                img {
                  max-width: 87px;
                  max-height: 77px;
                }
              }

              .tit {
                font-size: 18px;
              }

              .con {
                font-size: 8px;
              }
            }
          }
        }
      }

      .bbg {
        background-size: 100% 100%;
        padding: 0;

        .width {
          padding: 0;

          ul {
            width: 50%;
            font-size: 24px;
            padding: 20px 0px 15px 0px;

            li {
              span {
                font-size: 14px;
              }

              .big {
                font-size: 30px;
              }
            }

            li:last-child {
              font-size: 14px;
              padding-top: 5px;
            }
          }
        }
      }
      .news {
        width: 94%;
        margin: 0 auto;
        padding-top: 49px;

        .bo {
          margin-bottom: 20px;

          .title {
            font-size: 20px;
            margin-top: 0px;
            padding: 10px;
          }

          .more {
            text-align: right;
            font-size: 10px;
            margin-top: 10px;
            margin-bottom: 15px;

            span {
              color: #20b09f;
            }
          }
        }

        .list {
          dl {
            width: 94%;
            margin: 0 auto;
            margin-bottom: 20px;

            div {
              // padding: 10px;
              padding: 20px 20px 50px;

              .tit {
                font-size: 14px;
              }

              .content {
                font-size: 10px;
              }

              .last {
                font-size: 13px;
                color: #666666;
                overflow: hidden;
                line-height: 40px;
                width: 100%;

                .more {
                  float: right;
                  margin-right: 40px;

                  a {
                    color: #333333;
                  }
                }
              }
            }
          }
        }
      }

      .pera {
        padding-top: 49px;
        padding-bottom: 59px;

        .bo {
          .title {
            width: 70%;
            font-size: 20px;
            margin-top: 0px;
            margin: 0 auto;
            margin-bottom: 30px;
            padding: 10px;
          }
        }

        dl {
          width: 94%;
          margin: 0 auto;
          dt {
            width: 30%;
            margin-bottom: 15px;
          }
        }
      }
    }
  }
}
</style>
