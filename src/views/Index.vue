<template>
  <div id="index">
    <Nav></Nav>
    <router-view></router-view>
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
};
</script>
<style lang="scss" scoped>
</style>