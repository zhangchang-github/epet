<template>
  <div>
    <header class="group-header">
      <div class="group-header-left" @click="toggleShow(true)">
        <router-link to="/group/type">
          <span :class="{on:isShow}">分类</span>
        </router-link>
      </div>
      <div class="group-header-right" @click="toggleShow(false)">
        <router-link to="/group/brand">
          <span :class="{on:!isShow}">品牌</span>
        </router-link>
      </div>
      <a href="javascript:;" class="search-icon">
        <img src="../../common/group-image/search-ico.png">
      </a>
    </header>

    <!--分类-->
    <!--品牌-->
    <router-view></router-view>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        isShow:true
      }
    },

    mounted(){
      this.$store.dispatch('getGroupNames')
    },

    methods:{
      toggleShow(isShow){
        this.isShow = isShow
      }
    }
  }
</script>

<!--

  height calc(100% - 80px)

-->

<style lang="stylus" rel="stylesheet/stylus">
.group-header
  background #fff
  font-size 13px
  position fixed
  z-index 999
  top 0
  left 0
  height 40px
  width 100%
  line-height 40px
  display flex
  border-bottom 1px solid #cbcbcb
  >div
    width 50%
    padding 0 5%
    a
      >span
        display inline-block
        &.on
          line-height 34px
          border-bottom 2px solid #f00
    &.group-header-left
      text-align right
  .group-header-left
    color #fff
  .search-icon
    width 14px
    height 14px
    position absolute
    top 5px
    right 16px
    img
      width 100%

</style>
