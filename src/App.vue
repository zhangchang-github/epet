<template>
  <div id="app">
    <!--显示当前路由的数据-->
    <router-view></router-view>

    <!--底部切换-->
   <Footer></Footer>
  </div>
</template>

<script>
  import Footer from './components/Footer/Footer.vue'
  export default {
    mounted(){
      this.$store.dispatch('getHomeMenus')
    },
    components:{
      Footer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  padding-bottom 46px
  /*height 100%*/
  width 100%
</style>
