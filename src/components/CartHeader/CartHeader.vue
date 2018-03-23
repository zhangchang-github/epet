<template>
  <transition name="move">
    <div class="cart-header-bottom" v-show="isShow">
      <a href="javascript:;">
        <span></span>
        <p>首页</p>
      </a>
      <a href="javascript:;">
        <span class="fl"></span>
        <p>商品分类</p>
      </a>
      <a href="javascript:;">
        <span class="gwc"><em>0</em></span>
        <p>购物车</p>
      </a>
      <a href="javascript:;">
        <span class="ec"></span>
        <p>我的e宠</p>
      </a>
    </div>
  </transition>
</template>

<script>
  export default{
    props:{
      isShow:Boolean
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cart-header-bottom
    border-bottom 1px solid #d7d7d7
    padding 1em 0
    display flex
    text-align center
    background #fff
    &.move-enter-active, &.move-leave-active
      transition all .5s
    &.move-enter, &.move-leave-active
      opacity 0
      transform translateY(-50px)
    a
      display block
      width 25%
      height 50px
      text-align center
      span
        display block
        background url("../../common/cart-image/head_icon1.png") center no-repeat
        background-size contain
        width 100%
        height 30px
        &.fl
          background url("../../common/cart-image/head_icon2.png") center no-repeat
          background-size contain
        &.gwc
          background url("../../common/cart-image/head_icon4.png") center no-repeat
          background-size contain
          em
            position relative
            display inline-block
            width 18px
            height 18px
            line-height 16px
            font-style normal
            background #f00
            color #fff
            border-radius 50%
            text-align center
            left 15px
            font-size 10px
        &.ec
          background url("../../common/cart-image/head_icon5.png") center no-repeat
          background-size contain
</style>
