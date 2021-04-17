<template>
  <div id="nav">
    <div class="logo">
      <img src="../assets/logo.png" />
    </div>
    <div class="nav_item">
      <div
        v-for="(item, index) in navList"
        :key="index"
        :class="back == index ? 'back' : ''"
      >
        <router-link :to="{ path: item.url }" @click.native="back = index">{{
          item.title
        }}</router-link>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
#nav {
  width: 100%;
  min-width: 1080px;
  height: 80px;
  display: flex;
  justify-content: space-around;
  .logo {
    width: 200px;
    height: 80px;
    img {
      width: 80px;
      height: 80px;
    }
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