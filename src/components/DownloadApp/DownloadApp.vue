<template>
  <div class="xiazai" v-if="isShow">
    <div class="rela">
      <!--关闭按钮-->
      <span class="clsoebtn" @click="close">
          <img src="../../common/home-image/closebtn_03.png">
        </span>
      <!--广告图片-->
      <div class="appdowimg">
        <a href="javascript:;">
          <img src="../../common/home-image/c63b6e6cf483cbb61196f658920a9d6e.jpg">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props:{
      isShow:Boolean
    },
    methods:{
      close(){
        // 自定义事件方式
        this.$emit('close')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .xiazai
    z-index 999
    width 100%
    height 55px
    position fixed
    top 0
    left 0
    z-index 999
    .rela
      position relative
      .clsoebtn
        position absolute
        width 5%
        top 20%
        left 2%
        img
          width 100%
          height 100%
      .appdowimg
        a
          display block
          img
            width 100%
            height 100%

</style>
