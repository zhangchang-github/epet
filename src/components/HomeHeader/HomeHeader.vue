<template>
  <div :class="{reset:!isShow}" class="indexheader">
    <div class="indexnavcon">
      <div class="headerbox">
        <div class="main">
          <!--搜索区域-->
          <div class="clearfix">
            <div class="epet-search">
              <!--地址-->
              <div class="location">
                <a href="javascript:;">
                  <span class="catordog">狗狗</span>
                  <span class="c89">|</span>
                  <span class="myposition">北京</span>
                  <i></i>
                </a>
              </div>
              <!--搜索-->
              <p class="search-text" @click="search">
                <a href="javascript:;">
                  <input type="text" placeholder="搜索商品和品牌">
                  <span class="serach-ico"></span>
                </a>
              </p>
              <!--图标-->
              <a href="javascript:;" class="epet-category">
                <img src="../../common/home-image/mydope.png">
              </a>
            </div>
          </div>
          <!--导航区域-->
          <div class="swiper-container" ref="nav">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(menu, index) in home.homeMenus" :key="index">
                <div class="home-nav-item" :class="{on: index == num}" @click="handleClick(index)">
                  <a href="javascript:;">
                    <span>{{menu.menu_name}}</span>
                    <i></i>
                  </a>
                </div>
              </div>
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
    props:{
      isShow:Boolean
    },
    data(){
      return{
        isSelect:false,
        num:0
      }
    },

    mounted(){
      this.$store.dispatch('getHomeMenus', ()=>{
        this.$nextTick(()=>{
          // 导航栏
          if(!this.swiper_nav){
            this.swiper_nav = new Swiper(this.$refs.nav, {
              slidesPerView: 5,
              spaceBetween: 10,
              pagination: {
                el: '.swiper-pagination',
                clickable: true
              }
            })
          }else{
            this.swiper_nav.refresh()
          }
        })
      })
    },

    methods:{
      handleClick(index){
        this.num = index
      },
      search(){
        this.$router.push('/search')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .swiper-container
    .swiper-wrapper
      margin-right 100px
      .swiper-slide
        .home-nav-item
          position relative
          height 35px
          line-height 35px
          text-align center
          font-size 14px
          /*width 70px*/
          i
            position absolute
            height 2px
            width 100%
            bottom 2px
            left 0
          &.on
            i
              background #f00

  .swiper-pagination-bullet-active.swiper-pagination-bullet{
    background: #fff;
  }
  .swiper-pagination-bullet-active {
    width: 16px;
    height: 8px;
    border-radius: 6px;
  }

  .indexheader
    position fixed
    top 55px
    left 0
    z-index 999
    &.reset
      top 0
    .indexnavcon
      height 86px
      background #fff
      .headerbox
        .main
          margin auto
          .clearfix
            padding 5px 10px
            .epet-search
              display flex
              padding 8px 0
              .location
                margin-right 20px
                position relative
                float left
                a
                  font-size 13px
                  color #999
                  i
                    position absolute
                    top 8px;
                    right -12px
                    border-width 4px
                    font-size 0
                    line-height 0
                    border-style solid solid dotted
                    border-color #898989 transparent transparent

              .search-text
                flex 1
                a
                  position relative
                  input
                    width 100%
                    border 0
                    height 25px
                    background #e9e9e9
                    border-radius: 4px
                    color #bcbcbc
                    text-indent 10px
                    font-size 13px
                    outline 0
                  .serach-ico
                    width 11px
                    height 11px
                    background url("../../common/home-image/search.png") no-repeat
                    background-size 11px auto
                    position absolute
                    right 5px
                    top 8px

              .epet-category
                flex 1
                margin-right 50px
                display block
                img
                  width 25px
                  margin-left 10px

          .find_nav
            height 35px
            .dscroll
              .dscroll-div
                width 140%
                .dscroll-ul
                  display flex
                  .dscroll-li
                    &.on
                      span
                        color  #459d36
                        i
                          background #459d36
                    width 74.5px
                    a
                      display block
                      width 100%
                      height 100%
                      line-height 36px
                      font-size 14px
                      text-align center
                      color #666
                      .rela
                        position relative
                        line-height 36px
                        span
                          line-height 36px
                          display inline-block
                          font-size 14px
                        i
                          line-height 36px
                          position absolute
                          bottom -6px
                          left -10%
                          width 120%
                          height 2px

</style>
