<template>
  <div class="div2" v-if="otherImg">
    <a href="javascript:;">
      <img style="width: 375px;" :src="otherImg.image">
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
  .div2
    margin-top -2px
</style>
