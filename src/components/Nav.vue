<template>
  <div id="nav">
    <div class="logo" @click="toindex">
      <img src="../assets/logo.png" />
      <span>山东柏瑞软件科技有限公司</span>
    </div>
    <div
      class="nav_item"
      :style="nav_show ? '' : 'display:block'"
      @click.self="nav_show = true"
    >
      <div
        v-for="(item, index) in navList"
        :key="index"
        :class="back == index ? 'back' : ''"
      >
        <router-link
          :to="{ path: item.url }"
          @click.native="(back = index), (nav_show = true)"
          >{{ item.title }}</router-link
        >
      </div>
    </div>
    <img src="../assets/nav.png" class="but" @click="nav_show = !nav_show" />
  </div>
</template>
<style scoped lang="scss">
@media screen and (min-width: 1080px) {
  #nav {
    width: 100%;
    min-width: 1080px;
    height: 80px;
    display: flex;
    justify-content: space-around;
    .logo {
      // width: 200px;
      height: 80px;
      line-height: 80px;
      img {
        height: 60px;
        vertical-align: middle;
      }
      span {
        font-size: 24px;

        line-height: 80px;
      }
    }
    .but {
      display: none;
    }
    .nav_item {
      display: flex;
      div {
        padding: 0 20px;
        height: 80px;
        line-height: 80px;
        min-width: 60px;
        text-align: center;
        a {
          text-decoration: none;
          color: #333333;
        }
      }
      div:hover {
        background: #20b09f;
      }
      div:hover a {
        color: #ffffff;
      }
      .back {
        background: #20b09f;
        a {
          color: #ffffff;
        }
      }
    }
  }
}

@media screen and (max-width: 1080px) {
  #nav {
    width: 100%;
    max-width: 1080px;
    height: 60px;
    position: fixed;
    .but {
      width: 28px;
      height: 24px;
      position: absolute;
      right: 15px;
      top: 15px;
    }
    .nav_item {
      display: none;
      position: absolute;
      right: 0;
      top: 60px;
      width: 100%;
      height: 100vh;
      background: rgba(255, 255, 255, 0.95);
      div {
        margin: 20px 80px;
        a {
          color: #333333;
          text-decoration: none;
        }
      }
      .back {
        a {
          color: #20b09f;
          // text-decoration: underline;
          border-bottom: 2px solid #20b09f;
          padding-bottom: 4px;
          font-weight: bold;
        }
      }
    }
    .logo {
      // width: 200px;
      height: 60px;
      img {
        vertical-align: middle;
        height: 100%;
      }
      span {
        // display: none;
        font-size: 20px;
      }
    }
  }
}
</style>
<script>
export default {
  name: "Nav",
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
      routes: [],
      nav_show: true,
    };
  },
  watch: {
    $route(to) {
      // console.log(from.path); //从哪来
      // console.log(to.path); //到哪去
      this.toback(to.path);
    },
  },
  created() {
    this.routes = this.$router.options.routes;
    // console.log(this.routes);
    // console.log(this.$route.path);
    this.toback(this.$route.path);
    // console.log(this.routes);
  },
  methods: {
    toback(path) {
      switch (path) {
        case "/index":
          this.back = 0;
          break;
        case "/school":
          this.back = 1;
          break;
        case "/industry":
          this.back = 2;
          break;
        case "/about":
          this.back = 3;
          break;
        case "/us":
          this.back = 4;
          break;
      }
    },
    toindex() {
      this.$router.push("index");
    },
  },
  computed: {
    // 获取当前路由的子路由
    // getroutes() {
    // var routes = {
    //   children: this.$router.options.routes,
    // };
    // var route = this.$route.matched;
    // for (var i = 0; i < route.length - 1; i++) {
    //   routes = routes.children.find((e) => e.name == route[i].name);
    // }
    // return routes.children;
    // return [{ router: this.$router, route: this.$route }];
    // },
  },
};
</script>