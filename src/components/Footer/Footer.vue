<template>
  <div class="footer-nav">
    <ul class="footer-nav-ul">
      <li @click="$router.replace('/home')" class="footer-nav-item">
        <a href="javascript:;" class="home-a"></a>
      </li>
      <li @click="$router.replace('/group')"  class="footer-nav-item">
        <a href="javascript:;" class="group-a"></a>
      </li>
      <li @click="$router.replace('/cart')"  class="footer-nav-item">
        <a href="javascript:;" class="cart-a"></a>
      </li>
      <li @click="$router.replace('/me')"  class="footer-nav-item">
        <a href="javascript:;" class="me-a"></a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.footer-nav
  z-index 99
  position fixed
  bottom 0
  left 0
  right 0
  width 100%
  height 45px
  background #fff
  .footer-nav-ul
    border-top 1px solid #e7e7e7
    line-height 55px
    list-style none
    display flex
    text-align center
    .footer-nav-item
      flex 1
      display flex
      justify-content center
      align-items center
      >a
        background url("../../common/home-image/img.png") no-repeat
        background-size 234px 163px
        background-position 0 0
        display block
        width 42px
        height 40px
        &.group-a
          background-position -85px -41px
        &.cart-a
          background-position -85px -81px
        &.me-a
          background-position -85px -122px
</style>
