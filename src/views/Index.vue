<template>
  <div id="index">
    <Nav class="nav"></Nav>
    <router-view class="content"></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Footer,
    Nav,
  },
  watch: {
    $route() {
      // console.log(from.path); //从哪来
      // console.log(to.path); //到哪去
      window.scrollTo(0, 0);
    },
  },
};
</script>
<style lang="scss" scoped>
.nav {
  position: fixed;
  z-index: 10;
  background: #ffffff;
}
@media screen and(min-width:1080px) {
  .content {
    padding-top: 80px;
  }
}
@media screen and(max-width:1080px) {
  .content {
    padding-top: 60px;
  }
}
</style>