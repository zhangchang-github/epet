<template>
  <div class="adverList" >
    <ul class="activity" v-if="adverList">
      <li v-for="(item, index) in adverList[0]" :key="index">
        <a href="javascript:;"><img :src="item.image"></a>
      </li>
    </ul>
    <ul class="activity" v-if="adverList">
      <li v-for="(item, index) in adverList[1]" :key="index">
        <a href="javascript:;"><img :src="item.image"></a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    props:{
      adverList:Array
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .adverList
    margin-top -2px
    width 100%
    display flex
    .activity
      img
        width 100%
        display block
</style>
