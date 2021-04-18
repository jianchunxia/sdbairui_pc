<template>
  <div id="footer">
    <div class="banner">
      <img src="../assets/logo.png" alt="" />
    </div>
    <div class="bot_nav">
      <div class="nav">
        <div class="head_nav">
          <div v-for="(item, index) in navList" :key="index">
            <router-link :to="{ path: item.url }">{{ item.title }}</router-link>
          </div>
        </div>

        <div class="foo_nav">
          <div style="margin-right: 20px">了解详情</div>
          <div v-for="(item, index) in fooList" :key="index">
            <router-link to="" @click.native="toweb(item.url)">{{
              item.title
            }}</router-link>
          </div>
        </div>
        <div>地址：{{ address }}</div>
      </div>
      <div class="wx">
        <div class="wx_item">
          <img src="../assets/logo.png" alt="" />
          <div>微信公众号</div>
        </div>
        <div class="wx_item">
          <img src="../assets/logo.png" alt="" />
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
#footer {
  width: 100%;
  height: 120px;
  .banner {
    width: 100%;
    height: 120px;
    background: #20b09f;
    img {
      width: 80px;
      height: 80px;
    }
  }
  .bot_nav {
    width: 70%;
    margin: auto;
    max-width: 1200px;
    min-width: 1080px;
    height: 200px;
    // background: #f0f0f0;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    div {
      height: 30px;
    }
    .nav {
      margin-left: 40px;
      margin-top: 20px;
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
</style>
<script>
export default {
  name: "Footer",
  data() {
    return {
      back: 0,
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
        {
          url: "/design",
          title: "柏瑞设计",
        },
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
      address: "济南创新谷西城软件园A3座",
      copyright:
        "123123asfasfasf啊发顺丰阿斯弗啊按时发我发顺丰阿萨阿斯弗阿斯弗阿斯弗阿斯弗阿三安抚阿斯弗阿斯弗阿三",
    };
  },
  methods: {
    toweb(url) {
      window.open(url, "_parent");
    },
  },
};
</script>