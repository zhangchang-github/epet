<template>
  <div class="otherImg" v-if="otherImg">
    <a href="javascript:;">
      <img :src="otherImg.image">
    </a>
  </div>
</template>

<script>
  export default{
    props:{
      otherImg:Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .otherImg
    margin-top -2px
    img
      width 100%
</style>
