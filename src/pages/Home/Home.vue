<template>
  <div>

    <!--广告栏-->
    <DownloadApp :isShow="isShow" @close="close"/>

    <!--头部区-->
    <HomeHeader :isShow="isShow"/>

    <!--内容区-->
    <HomeContent :isShow="isShow"/>

    <!---->
    <div class="go-dog">

    </div>

    <!--底部区-->
    <HomeFooter />
  </div>
</template>

<script>

  import DownloadApp from '../../components/DownloadApp/DownloadApp.vue'
  import HomeHeader from '../../components/HomeHeader/HomeHeader.vue'
  import HomeContent from '../../components/HomeContent/HomeContent.vue'
  import HomeFooter from '../../components/HomeFooter/HomeFooter.vue'

  export default{
    data(){
      return{
        isShow:true
      }
    },
    methods:{
      close(){
        this.isShow = false
      }
    },
    components:{
      DownloadApp,
      HomeHeader,
      HomeContent,
      HomeFooter
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @keyframes myAnimation
    0%{
      background-position 1px
    }
    100%{
      background-position -81px
    }

  .go-dog
    width 41px
    height 46px
    background url("../../common/home-image/godog.png") no-repeat
    background-size 80px auto
    position fixed
    bottom 15%
    right -1px
    z-index 999
    animation myAnimation 2.5s steps(2) infinite

</style>
