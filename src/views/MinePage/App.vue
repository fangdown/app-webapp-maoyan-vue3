<template>
  <div class="header">
    <Logo></Logo>
    <Header>猫眼电影</Header>
  </div>
  <div>我的模块</div>
  <Footer :categoryNum="5"></Footer>
</template>

<script>
import Header from '@/components/Header.vue'
import Logo from '@/components/Logo.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Logo,
    Footer
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 3rem;
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: #fff;
}
</style>
