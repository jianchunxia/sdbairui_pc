<template>
  <div id="footer">
    <div class="banner">
      <img src="../assets/guang.jpg" alt="" />
      <img src="../assets/phone_bot.png" alt="" />
      <!-- <img src="guang" alt="" /> -->
    </div>
    <div class="bot_nav">
      <div class="nav">
        <div class="head_nav">
          <div v-for="(item, index) in navList" :key="index">
            <router-link :to="{ path: item.url }">{{ item.title }}</router-link>
          </div>
        </div>

        <!-- <div class="foo_nav">
          <div style="margin-right: 20px; font-weight: 600">了解详情</div>
          <div v-for="(item, index) in fooList" :key="index">
            <router-link to="" @click.native="toweb(item.url)">{{
              item.title
            }}</router-link>
          </div>
        </div> -->
        <div class="address">
          <!-- <div style="margin-right: 20px; font-weight: 600">地址:</div> -->
          <div style="font-weight: 600">地址:</div>
          <div>{{ address }}</div>
        </div>
      </div>
      <div class="wx">
        <div class="wx_item">
          <img src="../assets/gongzhonghao.png" alt="" />
          <div>微信公众号</div>
        </div>
        <div class="woc" style="width: 30px"></div>
        <div class="wx_item">
          <img src="../assets/gongzhonghao.png" alt="" />
          <div>微信小程序</div>
        </div>
      </div>
    </div>
    <div class="copyright">
      {{ copyright }}
    </div>
  </div>
</template>
<style scoped lang="scss">
@media screen and (min-width: 1080px) {
  .woc {
    display: none;
  }
  #footer {
    width: 100%;
    height: 120px;
    .banner {
      width: 100%;
      // background: #20b09f;
      img {
        width: 100%;
      }
      img:nth-child(2n) {
        display: none;
      }
    }
    .bot_nav {
      width: 70%;
      margin: auto;
      min-width: 1080px;
      height: 200px;
      // background: #f0f0f0;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      div {
        height: 30px;
      }
      .address {
        display: flex;
        // div:nth-child(2n-1) {
        //   width: 100px;
        // }
      }
      .nav {
        margin-left: 40px;
        margin-top: 70px;
        div {
          display: flex;
        }
        .foo_nav div,
        .head_nav div {
          a {
            margin: 0 20px 0 0;
            color: #333333;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        }
      }
      .wx {
        display: flex;
        .wx_item {
          width: 120px;
          height: 120px;
          margin: 20px 40px;
          img {
            width: 100%;
            height: 100%;
          }
          div {
            width: 100%;
            color: #333333;
            font-size: 14px;
            text-align: center;
            margin-top: 10px;
          }
        }
      }
    }
    .copyright {
      width: 100%;
      min-width: 1080px;
      line-height: 40px;
      border-top: 1px solid #cccccc;
      font-size: 12px;
      text-align: center;
    }
  }
}
@media screen and (max-width: 1080px) {
  #footer {
    width: 100%;
    .banner {
      width: 100%;
      // background: #20b09f;
      img {
        width: 100%;
      }
      img:nth-child(2n-1) {
        display: none;
      }
    }

    .bot_nav {
      margin: auto;
      // width: 730px;
      width: 100%;
      height: 200px;
      // background: #f0f0f0;
      display: flex;
      justify-content: space-between;
      font-size: 14px;

      .nav {
        margin-left: 40px;
        margin-top: 20px;
        display: flex;
        .head_nav {
          display: none;
        }
        .address {
          div:nth-child(2n) {
            width: 200px;
          }
        }
        .foo_nav div,
        .head_nav div {
          a {
            margin: 0 20px 0 0;
            color: #333333;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        }
      }
      .wx {
        display: flex;
        .wx_item {
          width: 120px;
          height: 120px;
          // margin: 20px 40px;
          img {
            width: 100%;
            height: 100%;
          }
          div {
            width: 100%;
            color: #333333;
            font-size: 14px;
            text-align: center;
            margin-top: 10px;
          }
        }
      }
    }
    @media screen and (max-width: 500px) {
      // .bot_nav
      .bot_nav {
        width: 100%;
        height: auto;
        flex-direction: column-reverse;
        margin-top: 20px;
        padding-bottom: 20px;
        .nav {
          // width: 100%;
          .address {
            div:nth-child(2n) {
              width: 90%;
            }
          }
        }
        .wx {
          margin: auto;
          // display: none;
          justify-content: space-around;
          .wx_item {
            height: auto;
            img {
              height: auto;
            }
            div {
              margin: 0;
            }
          }
        }
      }
    }
    .copyright {
      display: none;
    }
  }
}
</style>
<script>
import {getPcschooladv} from '../api/http.js'
export default {
  name: "Footer",
  data() {
    return {
      back: 0,
        image:'',
      navList: [
        {
          url: "/index",
          title: "首页",
        },
        {
          url: "/school",
          title: "校区事业部",
        },
        {
          url: "/industry",
          title: "产业事业部",
        },
        // {
        //   url: "/design",
        //   title: "柏瑞设计",
        // },
        {
          url: "/about",
          title: "关于我们",
        },
        {
          url: "/us",
          title: "联系我们",
        },
      ],
      fooList: [
        {
          url: "http://www.sdbairui.com/index/index/valley.html",
          title: "创新谷",
        },
        {
          url: "http://www.sdbairui.com/index/index/course.html",
          title: "发展历程",
        },
        {
          url: "/Home",
          title: "后台管理",
        },
      ],
      address: "济南创新谷2号楼孵化器五楼(长清区海棠路与芙蓉路交叉路口东南)",
      copyright:
        "Shandong Bairui Software Technology Co., Ltd. 山东柏瑞软件科技有限公司版权所有 鲁ICP备17006298号-1",
    };
  },
  methods: {
    toweb(url) {
      window.open(url, "_parent");
    },
    setadv() {
      getPcschooladv().then(res=>{
        this.image = res.data.data
        console.log(this.image)
      })
    }
  },
  created() {
    this.setadv()
  },
};
</script>