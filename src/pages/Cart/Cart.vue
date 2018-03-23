<template>
  <div>
    <header class="cart-header">
      <div class="cart-header-top">
        <a href="javascript:;" class="left-icon" @click="$router.back()"></a>
        <span class="text">购物车</span>
        <span class="right-icon" @click="toggle"></span>
      </div>

      <!--购物车组件-->
      <CartHeader :isShow="isShow"/>
    </header>

    <footer class="cart-footer">
      <div class="cart-footer-top">
        <span></span>
      </div>
      <div class="cart-footer-center">
        购物车是空的
      </div>
      <div class="cart-footer-bottom">
        <a href="javascript:;" class="txt">去逛逛</a>
        <a href="javascript:;">我的收藏</a>
      </div>
    </footer>
  </div>
</template>

<script>
  import CartHeader from '../../components/CartHeader/CartHeader.vue'

  export default{

    components:{
      CartHeader
    },

    data(){
      return{
        isShow:false
      }
    },
    methods:{
      toggle(){
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.cart-header
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

.cart-footer
  height 300px
  background #fff
  .cart-footer-top
    text-align center
    span
      margin 50px auto 20px
      display inline-block
      width 100px
      height 100px
      background url("../../common/cart-image/cart-ico.png") 0 -160px no-repeat
      background-size 105px auto
  .cart-footer-center
    text-align center
    color #7e8c8d
  .cart-footer-bottom
    margin-top 1.5em
    text-align center
    a
      font-size 14px
      width 100px
      height 40px
      line-height 40px
      display inline-block
      border 1px solid #999
      border-radius 5px
      &.txt
        margin-right 5px
</style>
