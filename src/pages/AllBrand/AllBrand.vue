<template>
  <div>
    <header class="cart-header">
      <div class="cart-header-top">
        <a href="javascript:;" class="left-icon" @click="$router.back()"></a>
        <span class="text">全部品牌</span>
        <span class="right-icon" @click="toggle"></span>
      </div>

      <!--购物车组件-->
      <CartHeader :isShow="isShow"/>
    </header>

    <footer class="allbrand-footer">
      <div class="letter">
        <div class="l-wrapper">
          <div class="l-cell">
            <span @click="selectCurrent(index)" :class="{on: index == currentIndex}" v-for="(brand, index) in allBrands" :key="index">{{brand.order}}</span>
          </div>
        </div>
      </div>
      <div class="allbrands">
        <div class="brand-list" ref="brandList">
          <div class="brand-item" v-for="(brand, index) in allBrands">
            <h2>{{brand.order}}</h2>
            <div v-for="(item, index) in brand.list">
              <a href="javascript:;" class="db">
                <div class="brand-wrapper">
                  <div class="brand-img">
                    <img :src="item.logo">
                    <span v-if="item.tagongyi == 1" class="logo">TA公益</span>
                    <div>
                      <img v-if="item.recommend == 1" src="../../common/allbrand-image/jian.png" class="jian">
                    </div>
                  </div>
                  <div class="brand-name">
                    <p class="ft14">{{item.name}}</p>
                    <p class="ft12">{{item.address}}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import CartHeader from '../../components/CartHeader/CartHeader.vue'

  export default{

    components:{
      CartHeader
    },

    computed:{
      ...mapState(['allBrands']),
      currentIndex(){
        const {tops, scrollY} = this
        return tops.findIndex((top, index)=>(scrollY >= top && scrollY < tops[index+1]))
      }
    },

    data(){
      return{
        isShow:false,
        scrollY:0,  // 滑动坐标
        tops:[]     // 所有子元素高度
      }
    },

    mounted(){
      this.$store.dispatch('getAllBrands', ()=>{
        this.$nextTick(()=>{
          this._initScroll()
          this._initTops()
        })
      })
    },

    methods:{

      _initTops(){
        let tops = []
        let top = 0
        tops.push(top)

        const items = this.$refs.brandList.getElementsByClassName('brand-item')
        ;[].slice.call(items).forEach(item =>{
          top += item.clientHeight
          tops.push(top)
        })
        this.tops = tops
      },
      _initScroll(){
        if(!this.allbrandScroll){
          this.allbrandScroll = new BScroll('.allbrands', {
            click:true,
            probeType:2
          })
        }

        this.allbrandScroll.on('scroll', (pos)=>{
          this.scrollY = Math.abs(pos.y)
        })

        this.allbrandScroll.on('scrollEnd', (pos)=>{
          this.scrollY = Math.abs(pos.y)
        })
      },

      selectCurrent(index){
        const top = this.tops[index]
        this.allbrandScroll.scrollTo(0, -top, 500)
      },

      toggle(){
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cart-header
    width 100%
    height 50px
    position fixed
    z-index 999
    background #fff
    .cart-header-top
      border-bottom 1px solid #d7d7d7
      font-size 18px
      height 50px
      line-height 50px
      .left-icon
        float left
        height 20px
        width 20px
        background url("../../common/cart-image/personal-bico1.png") no-repeat
        background-size contain
        margin-top 16px
        margin-left 10px
      .right-icon
        float left
        height 20px
        width 20px
        background url("../../common/cart-image/imgtk-new.png") no-repeat
        background-size contain
        margin-top 16px
        margin-left 10px
      .text
        float left
        text-align center
        display inline-block
        width 80%

  .allbrand-footer
    .letter
      position fixed
      top 0
      bottom 0
      width 10px
      right 10px
      z-index 999
      .l-wrapper
        display table
        height 100%
        text-align center
        .l-cell
          display table-cell
          height 100%
          vertical-align middle
          span
            font-size 12px
            margin-top 2px
            display block
            height 12px
            &.on
              color #f00
              font-weight bold
    .allbrands
      width 100%
      position fixed
      top 50px
      bottom 0
      .brand-list
        padding-bottom 160px
        background #f3f4f5
        .brand-item
          background #fff
          h2
            text-indent 15px
            background #f3f4f5
            font-size 12px
            line-height 24px
            color #999
          .db
            .brand-wrapper
              overflow hidden
              padding 10px
              border-bottom 1px solid #f3f4f5
              .brand-img
                position relative
                float left
                border 1px solid #f3f4f5
                width 30%
                height 50px
                img
                  margin 5px auto
                  width 90%
                  height 40px
                .logo
                  position absolute
                  top 0
                  right 0
                  padding 0 2px
                  background #e44b46
                  font-size 10px
                  color #fff
                .jian
                  position absolute
                  top -5px
                  left 0
                  width 13px
                  height 13px
              .brand-name
                float left
                margin 5px 0 5px 20px
                .ft14
                  font-size 14px
                  line-height 22px
                  color #333
                .ft12
                  font-size 12px
                  line-height 22px

</style>
