<template>
  <div class="index-footer" :class="{reset:!isShow}">
    <!--轮播1：数组中只包含一个-->
    <HomeLunbo :lunboImgs="lunboImgs[0]"/>

    <!--我们在行动-->
    <HomeImg :otherImg="otherImgs[0]"/>

    <!--图标-->
    <HomeIcon :iconList="home.homeIconList"/>

    <!--正品秒杀-->
    <HomeImg :otherImg="otherImgs[1]"/>

    <!--每日疯抢-->
    <HomeDaily />

    <!--品牌力量-->
    <HomeImg :otherImg="otherImgs[2]"/>

    <!--动态图-->
    <HomeImg :otherImg="otherImgs[3]"/>

    <!--VIP尊享服务-->
    <HomeImg :otherImg="otherImgs[4]"/>

    <!--爱宠星球-->
    <HomeActive :adverList="home.homeAdvertList[0]"/>

    <!--大牌-->
    <HomeImg :otherImg="otherImgs[5]"/>

    <!--特价团轮播图-->
    <!--轮播1：数组中只包含一个-->
    <HomeLunbo :lunboImgs="lunboImgs[1]"/>

    <!--大牌好货-->
    <HomeImg :otherImg="otherImgs[6]"/>

    <!--8宫格图-->
    <HomeActive v-for="(adver, index) in adverCollection" :adverList="adver"/>

    <!--最惨奖-->
    <HomeImg :otherImg="otherImgs[7]"/>

    <!--最惨购买经历-->
    <HomeImg :otherImg="otherImgs[8]"/>

    <!--特别星球-->
    <HomeImg :otherImg="otherImgs[9]"/>

    <!--潮品预售-->
    <HomeActive :adverList="home.homeAdvertList[6]"/>

    <!--特色栏目-->
    <HomeImg :otherImg="otherImgs[10]"/>

    <!--E国际图标-->
    <HomeActive :adverList="home.homeAdvertList[7]"/>

  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  import HomeLunbo from '../../components/HomeLunbo/HomeLunbo.vue'
  import HomeImg from '../../components/HomeImg/HomeImg.vue'
  import HomeDaily from '../../components/HomeDaily/HomeDaily.vue'
  import HomeActive from '../../components/HomeActive/HomeActive.vue'
  import HomeIcon from '../../components/HomeIcon/HomeIcon.vue'

  import {mapState} from 'vuex'

  export default{

    components:{
      HomeLunbo,
      HomeImg,
      HomeIcon,
      HomeDaily,
      HomeActive
    },

    computed:{
      ...mapState(['home']),
      lunboImgs(){
        return this.home.homeImgList.filter(item => item.index === '3160' || item.index === '3171').map(item => item.value)
      },
      otherImgs(){
        return this.home.homeImgList.filter(item => item.index !== '3160' && item.index !== '3171').map(item => item.value[0])
      },
      adverCollection(){
        return this.home.homeAdvertList.slice(1, 6)
      }
    },
    props:{
      isShow:Boolean
    },

    mounted(){
      this.$store.dispatch('getHomeIconList')
      this.$store.dispatch('getHomeImgList')
      this.$store.dispatch('getHomeAdvertList', ()=>{
        this.$nextTick(()=>{
          var swiper_lunbo2 = new Swiper(this.$refs.lunbo2, {
            centeredSlides: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          })
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .index-footer
    padding-top 141px
    &.reset
      padding-top 86px

    .div13
      margin-top -2px
      .divboximg
        display flex
        .divimg
          img
            margin-top -2px

    .div14
      .divboximg
        display flex
        img
          margin-top -2px
    .div15
      .div-boximg
        float left
        a
          display block
          margin-top -2px

</style>
