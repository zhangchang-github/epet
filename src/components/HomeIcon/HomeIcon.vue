<template>
  <div class="column-nav-div">
    <ul>
      <li v-for="(icon, index) in iconList" :key="index">
        <a href="javascript:;">
          <img :src="icon.image">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    props:{
      iconList:Array
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .column-nav-div
    margin-top -2px
    ul
      overflow hidden
      li
        width 20%
        float left
        margin-top -2px
        a
          img
            width 100%


</style>
