<template>
  <div class="div5">
    <div class="div5-top">
      <div class="titimg" v-if="home.homeDaily.surprise_icon">
        <img :src="home.homeDaily.surprise_icon.image">
      </div>
      <p class="nexttip">{{home.homeDaily.title}}</p>
      <div class="time">
        <span class="time-1">20</span>
        <span class="time-2">:</span>
        <span class="time-1">20</span>
      </div>
      <div class="more">
        <a href="javascript:;" v-if="home.homeDaily.right_image">
          <img :src="home.homeDaily.right_image.image">
        </a>
      </div>
    </div>

    <div class="div5-bottom">
      <div class="swiper-container" ref="fengqiang">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(daily, index) in home.homeDaily.goods">
            <div class="pro-block">
              <a href="javascript:;">
                <div class="thispro-img">
                  <img :src="daily.image.image">
                </div>
                <div class="cred">
                  <span class="ft12">¥</span>
                  <span>{{daily.sale_price}}</span>
                </div>
                <p>{{daily.little_price}}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  import {mapState} from 'vuex'

  export default{

    computed:{
      ...mapState(['home'])
    },

    mounted(){
      this.$store.dispatch('getHomeDaily', ()=>{
        this.$nextTick(()=>{
          new Swiper(this.$refs.fengqiang, {
            slidesPerView: 3.5,
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            }
          })
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .div5
    padding 10px
    overflow hidden
    .div5-top
      overflow hidden
      position relative
      .titimg
        float left
        img
          width 85px
      .nexttip
        font-size 13px
        position absolute
        right 114px
      .time
        position absolute
        right 55px
        font-size 13px
        .time-1
          font-size 13px
          border 1px solid #999
          padding 1px 2px

      .more
        position absolute
        top -9px
        right -70px
        a
          img
            width 50%
    .div5-bottom
      margin-top 10px
      .swiper-container
        .swiper-wrapper
          .swiper-slide
            .pro-block
              text-align center
              .thispro-img
                img
                  width 98px
              .cred
                color #f00
                span
                  font-size 13px
                  &.ft12
                    font-size 12px
              p
                font-size 12px
                margin-top 5px
</style>
